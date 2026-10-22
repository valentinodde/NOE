import VulnerabilityBadge from './VulnerabilityBadge';
import { formatScore } from '../utils/riskHelpers';

const HORIZONS = [
  { year: '2025', scoreKey: 'score_croise_2025', vulnKey: 'vulnerability_2025' },
  { year: '2030', scoreKey: 'score_croise_2030', vulnKey: 'vulnerability_2030' },
  { year: '2050', scoreKey: 'score_croise_2050', vulnKey: 'vulnerability_2050' },
];

export default function ScoreCards({ data }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {HORIZONS.map(({ year, scoreKey, vulnKey }) => (
        <div
          key={year}
          className="bg-surface-low rounded-2xl overflow-hidden"
          style={{ boxShadow: '0 0 48px rgba(0,10,67,0.04)' }}
        >
          {/* Header band: surface-highest separates label from metrics */}
          <div className="bg-surface-highest px-5 py-3">
            <div className="text-[0.6875rem] font-semibold text-on-surface-var uppercase tracking-widest">
              Horizon {year}
            </div>
          </div>

          {/* Body */}
          <div className="px-5 py-5 flex flex-col gap-3">
            {/* display-lg: 3.5rem for high-impact data point */}
            <div>
              <div
                className="text-primary font-bold leading-none"
                style={{ fontSize: '3.5rem', letterSpacing: '-0.03em' }}
              >
                {formatScore(data[scoreKey])}
              </div>
              <div className="text-[0.6875rem] text-on-surface-var mt-1.5">Score risque eau croisé</div>
            </div>
            <VulnerabilityBadge level={data[vulnKey]} size="lg" />
          </div>
        </div>
      ))}
    </div>
  );
}
