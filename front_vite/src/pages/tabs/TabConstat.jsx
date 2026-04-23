import TerritorySection from '../../components/TerritorySection';
import VulnerabilitySection from '../../components/VulnerabilitySection';
import { getRiskColors, getRiskLabel } from '../../utils/riskHelpers';

export default function TabConstat({ territoire, entreprise }) {
  return (
    <div className="flex flex-col gap-10">
      <SectionCard>
        <SectionTitle>Projections hydro-climatiques du territoire</SectionTitle>
        <TerritorySection territoire={territoire} entreprise={entreprise} />
      </SectionCard>

      <SectionCard>
        <SectionTitle>Vulnérabilité de l'activité</SectionTitle>
        <VulnerabilitySection nafCode={entreprise?.activiteprincipaleetablissement} />
      </SectionCard>

      <SectionCard>
        <SectionTitle>Risques liés à l'eau</SectionTitle>
        <RisksContent risques={territoire?.risques} />
      </SectionCard>

      <SourcesSection sources={territoire?.sources} />
    </div>
  );
}

// ─── Risks ────────────────────────────────────────────────────────────────────

function RisksContent({ risques }) {
  if (!risques) {
    return <EmptyState message="Les données de risques ne sont pas disponibles pour ce territoire." />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {risques.secheresse && (
        <RiskCard
          icon="☀️"
          title="Sécheresse"
          niveau={risques.secheresse.niveau_actuel}
          niveauFutur={risques.secheresse.niveau_2050}
        >
          <RiskRow
            label="Fréquence actuelle"
            value={`1 épisode sévère / ${risques.secheresse.frequence_episode_severe_actuel_ans} ans`}
          />
          <RiskRow
            label="Fréquence 2050"
            value={`1 épisode / ${risques.secheresse.frequence_episode_severe_2050_ans} ans`}
          />
          {risques.secheresse.impact_operationnel && (
            <p className="text-[0.8125rem] text-on-surface-var mt-2 leading-relaxed">
              {risques.secheresse.impact_operationnel}
            </p>
          )}
        </RiskCard>
      )}

      {risques.inondation && (
        <RiskCard icon="🌊" title="Inondation" niveau={risques.inondation.niveau}>
          <RiskRow
            label="Zone PPRI"
            value={risques.inondation.en_zone_ppri ? risques.inondation.type_ppri || 'Oui' : 'Non'}
          />
          <RiskRow
            label="Aléa centennal"
            value={risques.inondation.frequence_centennale ? 'Oui' : 'Non'}
          />
          {risques.inondation.hauteur_potentielle_m != null && (
            <RiskRow label="Hauteur potentielle" value={`${risques.inondation.hauteur_potentielle_m} m`} />
          )}
          {risques.inondation.dernier_evenement_majeur && (
            <RiskRow
              label="Dernier événement majeur"
              value={new Date(risques.inondation.dernier_evenement_majeur).toLocaleDateString('fr-FR', {
                year: 'numeric', month: 'long',
              })}
            />
          )}
        </RiskCard>
      )}

      {risques.rga && (
        <RiskCard icon="🏔️" title="Retrait-gonflement argiles" niveau={risques.rga.niveau_alea}>
          <RiskRow label="Indice de retrait"       value={risques.rga.indice_retrait} />
          <RiskRow label="Surface communale"       value={`${risques.rga.pct_surface_communale} % concernée`} />
          <RiskRow label="Sinistralité historique" value={getRiskLabel(risques.rga.sinistralite_historique)} />
        </RiskCard>
      )}
    </div>
  );
}

// ─── Sources ──────────────────────────────────────────────────────────────────

function SourcesSection({ sources }) {
  if (!sources?.length) return null;

  return (
    <SectionCard>
      <SectionTitle>Pour aller plus loin</SectionTitle>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {sources.map((src, i) => (
          <a
            key={i}
            href={src.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-4 bg-surface-low rounded-xl p-4 hover:bg-surface-high transition-colors group"
            style={{ boxShadow: '0 0 16px rgba(0,10,67,0.03)' }}
          >
            <div className="w-10 h-10 rounded-lg bg-surface-high flex items-center justify-center shrink-0 text-lg group-hover:bg-surface-highest transition-colors">
              🔗
            </div>
            <div>
              <p className="text-[0.875rem] font-semibold text-primary">{src.nom}</p>
              <p className="text-[0.8125rem] text-on-surface-var leading-relaxed">{src.description}</p>
            </div>
          </a>
        ))}
      </div>
    </SectionCard>
  );
}

// ─── UI atoms ─────────────────────────────────────────────────────────────────

function SectionCard({ children }) {
  return (
    <section
      className="bg-surface-lowest rounded-2xl p-7"
      style={{ boxShadow: '0 0 40px rgba(0,10,67,0.06)' }}
    >
      {children}
    </section>
  );
}

function SectionTitle({ children }) {
  return (
    <div className="flex items-center gap-3 mb-5 pl-1">
      <span className="w-1 h-5 rounded-full bg-tertiary shrink-0" />
      <h2 className="text-[1rem] font-semibold text-primary" style={{ letterSpacing: '-0.01em' }}>
        {children}
      </h2>
    </div>
  );
}

function RiskCard({ icon, title, niveau, niveauFutur, children }) {
  const colors = getRiskColors(niveau);
  return (
    <div
      className="bg-surface-low rounded-xl overflow-hidden"
      style={{ boxShadow: '0 0 24px rgba(0,10,67,0.04)', borderLeft: `4px solid ${colors.bar}` }}
    >
      <div className="px-5 py-4 flex items-center justify-between" style={{ background: colors.bg }}>
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <p className="text-[0.875rem] font-semibold text-on-surface">{title}</p>
        </div>
        <span
          className="text-[0.75rem] font-bold px-2.5 py-1 rounded-full text-white shrink-0"
          style={{ background: colors.bar }}
        >
          {getRiskLabel(niveau)}
        </span>
      </div>
      <div className="px-5 py-4 flex flex-col gap-2">
        {children}
        {niveauFutur && niveauFutur !== niveau && (
          <div className="mt-2 pt-2 border-t border-surface-high flex items-center gap-2">
            <span className="text-[0.75rem] text-on-surface-var">Niveau 2050 :</span>
            <span
              className="text-[0.75rem] font-bold px-2 py-0.5 rounded-full text-white"
              style={{ background: getRiskColors(niveauFutur).bar }}
            >
              {getRiskLabel(niveauFutur)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function RiskRow({ label, value }) {
  return (
    <div className="flex items-start justify-between gap-2">
      <span className="text-[0.8125rem] text-on-surface-var">{label}</span>
      <span className="text-[0.8125rem] font-semibold text-on-surface text-right">{value ?? '—'}</span>
    </div>
  );
}

function EmptyState({ message }) {
  return (
    <div className="bg-surface-low rounded-xl px-6 py-8 text-center">
      <p className="text-[0.875rem] text-on-surface-var">{message}</p>
    </div>
  );
}
