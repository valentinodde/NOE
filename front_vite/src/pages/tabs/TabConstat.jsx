// Onglet Constat : la carte du bassin, puis le récit offre, demande, stress
// hydrique et restrictions, les enjeux économiques, et enfin l'activité de
// l'établissement. L'ancienne version est archivée dans constat_v1/.

import { useMemo, useRef } from 'react';
import CarteBassin from '../../components/constat/CarteBassin';
import OffreSection from '../../components/constat/OffreSection';
import DemandeSection from '../../components/constat/DemandeSection';
import StressSection from '../../components/constat/StressSection';
import EconomieSection from '../../components/constat/EconomieSection';
import { Chapitre, Vide } from '../../components/constat/ConstatUI';
import ActiviteSection from '../../components/constat/ActiviteSection';
import SommaireConstat from '../../components/constat/SommaireConstat';
import { analyseNeige } from '../../utils/constatMessages';

// Chapitres et parties du sommaire : chaque `id` est celui de l'élément visé
const CHAPITRES = [
  { id: 'chapitre-bassin', label: 'Votre bassin', parties: [] },
  {
    id: 'chapitre-offre', numero: '01', label: "L'offre en eau",
    parties: [
      { id: 'offre-pluie', label: "Les pluies d'été" },
      { id: 'offre-sols', label: "L'humidité des sols" },
      { id: 'offre-debits', label: "Les débits des cours d'eau" },
      { id: 'offre-nappes', label: 'Les nappes' },
      { id: 'offre-neige', label: 'La neige et les glaciers' },
    ],
  },
  {
    id: 'chapitre-demande', numero: '02', label: 'La demande en eau',
    parties: [
      { id: 'demande-aujourdhui', label: "Aujourd'hui" },
      { id: 'demande-demain', label: 'Et demain ?' },
    ],
  },
  {
    id: 'chapitre-stress', numero: '03', label: 'Le stress hydrique',
    parties: [
      { id: 'stress-indicateur', label: 'Le niveau du bassin' },
      { id: 'stress-annee', label: 'Une année type' },
      { id: 'stress-restrictions', label: "Les restrictions d'eau" },
    ],
  },
  {
    id: 'chapitre-economie', numero: '04', label: "L'économie de l'eau",
    parties: [
      { id: 'economie-cout', label: "Le coût de l'eau" },
      { id: 'economie-manque', label: "Le coût du manque d'eau" },
    ],
  },
  {
    id: 'chapitre-activite', numero: '05', label: 'Votre activité',
    parties: [
      { id: 'activite-exposition', label: 'Votre exposition' },
      { id: 'activite-usages', label: "Les usages de l'eau" },
      { id: 'activite-chaine', label: 'La chaîne de valeur' },
    ],
  },
  { id: 'chapitre-risques', label: "Risques liés à l'eau", parties: [] },
];

export default function TabConstat({ territoire, entreprise, secteur, onAllerMaturite }) {
  const conteneur = useRef(null);
  // La partie neige n'existe que pour les bassins concernés
  const avecNeige = !!analyseNeige(territoire);
  const chapitres = useMemo(
    () => (avecNeige ? CHAPITRES : CHAPITRES.map((c) => ({ ...c, parties: c.parties.filter((p) => p.id !== 'offre-neige') }))),
    [avecNeige],
  );

  if (!territoire) {
    return <Vide message="Les données territoriales ne sont pas disponibles pour cet établissement." />;
  }

  return (
    <div ref={conteneur} className="relative flex flex-col gap-8">
      <SommaireConstat chapitres={chapitres} conteneur={conteneur} />
      <CarteBassin territoire={territoire} entreprise={entreprise} />
      <OffreSection territoire={territoire} entreprise={entreprise} />
      <DemandeSection territoire={territoire} />
      <StressSection territoire={territoire} entreprise={entreprise} />
      <EconomieSection territoire={territoire} entreprise={entreprise} />

      <ActiviteSection territoire={territoire} secteur={secteur} onAllerMaturite={onAllerMaturite} />

      <Chapitre id="chapitre-risques" surtitre="Risques liés à l'eau" titre="Inondation, retrait-gonflement des argiles">
        <Vide message="Section en préparation." />
      </Chapitre>
    </div>
  );
}
