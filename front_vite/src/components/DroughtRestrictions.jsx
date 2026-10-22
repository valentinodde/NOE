import { useEffect, useMemo, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { fetchVigieauZones, fetchRestrictionsHistorique } from '../utils/api';
import { NIVEAUX, getNiveau } from '../utils/niveauxSecheresse';

const TYPE_ICONS = { SUP: '🌊', SOU: '💧', AEP: '🚰' };

// Profils proposés dans l'interface (les autres profils VigiEau ne concernent
// pas les établissements analysés ici).
const PROFILS = [
  { code: 'entreprise',   label: 'Entreprise' },
  { code: 'exploitation', label: 'Exploitation agricole' },
];

const formatDate = (iso) =>
  iso ? new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) : null;

// ─── Section principale ───────────────────────────────────────────────────────

export default function DroughtRestrictions({ entreprise }) {
  const lat     = entreprise?.latitude;
  const lon     = entreprise?.longitude;
  const commune = entreprise?.codecommuneetablissement;
  const naf     = entreprise?.activiteprincipaleetablissement;

  // null tant que l'utilisateur n'a pas choisi : le backend déduit alors le
  // profil du code NAF et le renvoie dans la réponse.
  const [profilChoisi, setProfilChoisi] = useState(null);
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    if (lat == null || lon == null) {
      setLoading(false);
      return;
    }

    let annule = false;
    setLoading(true);
    setError(null);

    fetchVigieauZones({ lat, lon, commune, naf, profil: profilChoisi })
      .then((res) => { if (!annule) setData(res); })
      .catch((err) => { if (!annule) setError(err); })
      .finally(() => { if (!annule) setLoading(false); });

    return () => { annule = true; };
  }, [lat, lon, commune, naf, profilChoisi]);

  // Sans coordonnées, la situation en vigueur est hors de portée, mais
  // l'historique reste disponible dès lors qu'on connaît la commune.
  if (lat == null || lon == null) {
    return (
      <div className="flex flex-col gap-5">
        <EmptyState message="Localisation de l'établissement indisponible : impossible d'interroger VigiEau." />
        {commune && <RestrictionsHistory codeCommune={commune} />}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <ProfilSelector
        actif={data?.profil ?? profilChoisi}
        deduitDuNaf={profilChoisi === null}
        onChange={setProfilChoisi}
      />

      {loading && <EmptyState message="Consultation de VigiEau…" />}

      {!loading && error && (
        <EmptyState message={`Restrictions indisponibles pour le moment (${error.message}).`} />
      )}

      {!loading && !error && data && (
        data.concerne
          ? <ZonesList data={data} />
          : <EmptyState message="Aucune zone d'alerte sécheresse ne couvre actuellement cet établissement." />
      )}

      {commune && <RestrictionsHistory codeCommune={commune} />}

      <p className="text-[0.75rem] text-on-surface-var">
        Source :{' '}
        <a
          href="https://vigieau.gouv.fr"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary"
        >
          VigiEau
        </a>
        . Situation en vigueur mise à jour quotidiennement, historique consolidé par commune.
      </p>
    </div>
  );
}

// ─── Historique annuel ────────────────────────────────────────────────────────

const VUES = [
  { code: 'annee', label: 'Par an' },
  { code: 'mois',  label: 'Par mois' },
];

const MOIS_INITIALES = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'];
const MOIS_NOMS = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
];

function RestrictionsHistory({ codeCommune }) {
  const [ressource, setRessource] = useState('SUP');
  const [vue,       setVue]       = useState('annee');
  const [data,    setData]    = useState(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState(null);

  useEffect(() => {
    let annule = false;
    setLoading(true);
    setError(null);

    fetchRestrictionsHistorique(codeCommune)
      .then((res) => { if (!annule) setData(res); })
      .catch((err) => { if (!annule) setError(err); })
      .finally(() => { if (!annule) setLoading(false); });

    return () => { annule = true; };
  }, [codeCommune]);

  if (loading) return null;
  if (error || !data?.concerne) return null;

  const serie = data.ressources.find((r) => r.code === ressource) ?? data.ressources[0];

  return (
    <div className="border-t border-surface-high pt-6 flex flex-col gap-4">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h3 className="text-[0.875rem] font-semibold text-on-surface">
            {vue === 'annee' ? 'Jours de restriction par an' : 'Niveau atteint mois par mois'}
          </h3>
          <p className="text-[0.75rem] text-on-surface-var">
            Commune de l'établissement, {data.annee_debut} à {data.annee_fin}
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Segmented
            options={data.ressources.map((r) => ({ code: r.code, label: r.label }))}
            actif={serie.code}
            onChange={setRessource}
          />
          <Segmented options={VUES} actif={vue} onChange={setVue} />
        </div>
      </div>

      {vue === 'mois' ? (
        <MonthlyHeatmap serie={serie} niveaux={data.niveaux} />
      ) : (
      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={serie.points} margin={{ top: 8, right: 0, left: -22, bottom: 4 }}>
          <XAxis
            dataKey="annee"
            tick={{ fontSize: 11, fill: '#44474f', fontFamily: 'Inter, sans-serif' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 366]}
            ticks={[0, 90, 180, 270, 366]}
            tick={{ fontSize: 11, fill: '#44474f', fontFamily: 'Inter, sans-serif' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            cursor={{ fill: 'rgba(0,10,67,0.04)' }}
            contentStyle={{
              borderRadius: '12px',
              border: 'none',
              background: 'rgba(241,243,252,0.96)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 0 48px rgba(0,10,67,0.08)',
              fontSize: 12,
              fontFamily: 'Inter, sans-serif',
              color: '#181c22',
            }}
            formatter={(value, name) => [`${value} jours`, name]}
          />
          {data.niveaux.map((niveau) => (
            <Bar
              key={niveau.code}
              dataKey={niveau.code}
              name={niveau.label}
              stackId="niveaux"
              fill={getNiveau(niveau.code).fill}
              radius={niveau.code === 'crise' ? [4, 4, 0, 0] : 0}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
      )}

      <div className="flex flex-wrap gap-4">
        {vue === 'mois' && (
          <div className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-sm shrink-0"
              style={{ background: NIVEAUX.pas_restriction.fill }}
            />
            <span className="text-[0.75rem] text-on-surface-var">Aucune</span>
          </div>
        )}
        {data.niveaux.map((niveau) => (
          <div key={niveau.code} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-sm shrink-0"
              style={{ background: getNiveau(niveau.code).fill }}
            />
            <span className="text-[0.75rem] text-on-surface-var">{niveau.label}</span>
          </div>
        ))}
      </div>

      <p className="text-[0.75rem] text-on-surface-var leading-relaxed">
        {vue === 'mois'
          ? 'Chaque case indique le niveau le plus sévère atteint dans le mois. '
          : ''}
        Années complètes uniquement : la situation de l'année en cours figure dans les cartes
        ci-dessus. L'eau potable (AEP) n'est pas représentée, son suivi n'ayant démarré qu'en 2024,
        ce qui la rendrait incomparable d'une année sur l'autre.
      </p>
    </div>
  );
}

// ─── Heatmap année x mois ─────────────────────────────────────────────────────

function MonthlyHeatmap({ serie, niveaux }) {
  // La grille mensuelle stocke des codes numériques, il faut le libellé associé.
  const parValeur = useMemo(
    () => Object.fromEntries(niveaux.map((n) => [n.valeur, n])),
    [niveaux],
  );

  const colonnes = '2.75rem repeat(12, minmax(0, 1fr))';

  return (
    <div className="overflow-x-auto">
      <div className="min-w-[26rem] flex flex-col gap-1">
        <div className="grid gap-1" style={{ gridTemplateColumns: colonnes }}>
          <span />
          {MOIS_INITIALES.map((initiale, i) => (
            <span
              key={i}
              className="text-[0.6875rem] text-on-surface-var text-center leading-none"
            >
              {initiale}
            </span>
          ))}
        </div>

        {serie.mois.map((ligne) => (
          <div key={ligne.annee} className="grid gap-1" style={{ gridTemplateColumns: colonnes }}>
            <span className="text-[0.6875rem] text-on-surface-var tabular-nums leading-5">
              {ligne.annee}
            </span>
            {ligne.niveaux.map((valeur, i) => {
              const niveau = parValeur[valeur];
              return (
                <span
                  key={i}
                  title={`${MOIS_NOMS[i]} ${ligne.annee} : ${niveau ? niveau.label : 'aucune restriction'}`}
                  className="h-5 rounded-[3px]"
                  style={{
                    background: niveau
                      ? getNiveau(niveau.code).fill
                      : NIVEAUX.pas_restriction.fill,
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Sélecteur de profil ──────────────────────────────────────────────────────

function ProfilSelector({ actif, deduitDuNaf, onChange }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-[0.8125rem] text-on-surface-var">Usages affichés pour&nbsp;:</span>
      <Segmented options={PROFILS} actif={actif} onChange={onChange} />
      {deduitDuNaf && (
        <span className="text-[0.75rem] text-on-surface-var italic">
          déduit du code NAF, modifiable si la classification est incorrecte
        </span>
      )}
    </div>
  );
}

// ─── Liste des zones ──────────────────────────────────────────────────────────

function ZonesList({ data }) {
  const niveauMax = getNiveau(data.niveau_max);

  return (
    <>
      <div
        className="flex flex-wrap items-center gap-3 rounded-xl px-5 py-4"
        style={{ background: niveauMax.bg, borderLeft: `4px solid ${niveauMax.color}` }}
      >
        <span className="text-xl">⚠️</span>
        <div>
          <p className="text-[0.875rem] font-semibold text-on-surface">
            Niveau de restriction le plus élevé sur le territoire :{' '}
            <span style={{ color: niveauMax.color }}>{niveauMax.label}</span>
          </p>
          <p className="text-[0.8125rem] text-on-surface-var">
            {data.zones[0]?.nom}
            {data.zones[0]?.departement && ` (département ${data.zones[0].departement})`}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {data.zones.map((zone) => (
          <ZoneCard key={`${zone.type}-${zone.id}`} zone={zone} />
        ))}
      </div>
    </>
  );
}

function ZoneCard({ zone }) {
  const niveau = getNiveau(zone.niveau);
  const [ouvert, setOuvert] = useState(false);

  const usagesParThematique = useMemo(() => {
    const groupes = new Map();
    for (const usage of zone.usages) {
      const cle = usage.thematique || 'Autres usages';
      if (!groupes.has(cle)) groupes.set(cle, []);
      groupes.get(cle).push(usage);
    }
    return [...groupes.entries()];
  }, [zone.usages]);

  return (
    <div
      className="bg-surface-low rounded-xl overflow-hidden flex flex-col"
      style={{ boxShadow: '0 0 24px rgba(0,10,67,0.04)', borderLeft: `4px solid ${niveau.color}` }}
    >
      <div className="px-5 py-4 flex items-center justify-between gap-2" style={{ background: niveau.bg }}>
        <div className="flex items-center gap-2">
          <span className="text-xl">{TYPE_ICONS[zone.type] || '💧'}</span>
          <p className="text-[0.875rem] font-semibold text-on-surface">{zone.type_label}</p>
        </div>
        <span
          className="text-[0.75rem] font-bold px-2.5 py-1 rounded-full text-white shrink-0"
          style={{ background: niveau.color }}
        >
          {niveau.label}
        </span>
      </div>

      <div className="px-5 py-4 flex flex-col gap-2 flex-1">
        <p className="text-[0.8125rem] text-on-surface leading-relaxed">{zone.nom}</p>

        {zone.arrete?.date_fin && (
          <p className="text-[0.75rem] text-on-surface-var">
            Arrêté en vigueur
            {zone.arrete.date_debut && ` depuis le ${formatDate(zone.arrete.date_debut)}`}
            {` jusqu'au ${formatDate(zone.arrete.date_fin)}`}
          </p>
        )}

        {(zone.arrete?.url_restriction || zone.arrete?.url_cadre) && (
          <div className="flex flex-col gap-1 mt-1">
            {zone.arrete.url_restriction && (
              <PdfLink href={zone.arrete.url_restriction} label="Arrêté de restriction (PDF)" />
            )}
            {zone.arrete.url_cadre && (
              <PdfLink href={zone.arrete.url_cadre} label="Arrêté cadre (PDF)" />
            )}
          </div>
        )}

        {zone.usages.length > 0 && (
          <div className="mt-auto pt-3">
            <button
              onClick={() => setOuvert((v) => !v)}
              className="text-[0.8125rem] font-semibold text-primary hover:underline"
            >
              {ouvert ? 'Masquer' : `Voir les ${zone.usages.length} usages restreints`}
            </button>

            {ouvert && (
              <div className="mt-3 flex flex-col gap-3 max-h-80 overflow-y-auto pr-1">
                {usagesParThematique.map(([thematique, usages]) => (
                  <div key={thematique}>
                    <p className="text-[0.6875rem] font-bold uppercase tracking-wide text-on-surface-var mb-1">
                      {thematique}
                    </p>
                    {usages.map((usage, i) => (
                      <div key={i} className="mb-2">
                        <p className="text-[0.8125rem] font-medium text-on-surface">{usage.nom}</p>
                        {usage.description && (
                          <p className="text-[0.75rem] text-on-surface-var leading-relaxed whitespace-pre-line">
                            {usage.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function Segmented({ options, actif, onChange }) {
  return (
    <div className="inline-flex rounded-lg bg-surface-low p-1">
      {options.map((option) => (
        <button
          key={option.code}
          onClick={() => onChange(option.code)}
          className={[
            'px-3 py-1.5 text-[0.8125rem] font-medium rounded-md transition-colors',
            actif === option.code
              ? 'bg-surface-lowest text-primary shadow-sm'
              : 'text-on-surface-var hover:text-on-surface',
          ].join(' ')}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

function PdfLink({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-[0.8125rem] text-primary hover:underline"
    >
      <span>📄</span>
      {label}
    </a>
  );
}

function EmptyState({ message }) {
  return (
    <div className="bg-surface-low rounded-xl px-6 py-8 text-center">
      <p className="text-[0.875rem] text-on-surface-var">{message}</p>
    </div>
  );
}
