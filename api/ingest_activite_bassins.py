"""
Agrégat de l'activité économique par bassin versant, pour la page Vision
territoriale : nombre d'établissements et emplois salariés estimés, par bassin
et par code NAF.

Le calcul parcourt toute la table insee_entreprises (12 millions de lignes,
environ une minute) : il est fait une fois ici, et la page lit le résultat
dans bassins_activite. À relancer après chaque rechargement de
insee_entreprises.

Emplois estimés : milieu de la tranche d'effectif salarié INSEE de
l'établissement (« 10-19 » compte pour 14,5). Les établissements sans salarié
ou sans tranche connue comptent pour zéro emploi.

    conda run -n noe-env python api/ingest_activite_bassins.py
"""

import time

import DB_processor as DBP

TABLE = "bassins_activite"

DDL = f"""
CREATE TABLE IF NOT EXISTS {TABLE} (
    bassin_id                 text    NOT NULL,
    naf                       text    NOT NULL,
    etablissements            integer NOT NULL,
    etablissements_employeurs integer NOT NULL,
    emplois_estimes           real    NOT NULL,
    PRIMARY KEY (bassin_id, naf)
)
"""

# Milieu de la tranche « a-b », borne basse pour une tranche ouverte (« 10000+ »)
EMPLOIS = r"""
    CASE
        WHEN trancheeffectifsetablissement ~ '^\d+-\d+$'
            THEN (split_part(trancheeffectifsetablissement, '-', 1)::numeric
                + split_part(trancheeffectifsetablissement, '-', 2)::numeric) / 2
        WHEN trancheeffectifsetablissement ~ '^\d+'
            THEN substring(trancheeffectifsetablissement from '^\d+')::numeric
        ELSE 0
    END
"""

INSERTION = f"""
INSERT INTO {TABLE} (bassin_id, naf, etablissements, etablissements_employeurs, emplois_estimes)
SELECT
    bassin_id,
    activiteprincipaleetablissement,
    count(*),
    count(*) FILTER (WHERE trancheeffectifsetablissement IS NOT NULL AND trancheeffectifsetablissement <> '0'),
    coalesce(sum({EMPLOIS}), 0)
FROM insee_entreprises
WHERE bassin_id IS NOT NULL AND activiteprincipaleetablissement IS NOT NULL
GROUP BY 1, 2
"""


def main():
    conn = DBP.get_conn()
    debut = time.time()
    try:
        with conn, conn.cursor() as cur:
            cur.execute(DDL)
            cur.execute(f"TRUNCATE {TABLE}")
            cur.execute(INSERTION)
            # Statistiques à jour : sans elles, le planificateur choisit des
            # boucles imbriquées sur la jointure avec sectors
            cur.execute(f"ANALYZE {TABLE}")
            cur.execute(f"SELECT count(*), count(DISTINCT bassin_id), sum(etablissements), sum(emplois_estimes) FROM {TABLE}")
            lignes, bassins, etablissements, emplois = cur.fetchone()
    finally:
        conn.close()

    print(f"{TABLE} : {lignes} lignes, {bassins} bassins, {etablissements} établissements, "
          f"{round(emplois):,} emplois estimés ({time.time() - debut:.0f} s)".replace(",", " "))


if __name__ == "__main__":
    main()
