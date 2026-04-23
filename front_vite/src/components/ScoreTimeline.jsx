import {
  LineChart, Line, XAxis, YAxis,
  Tooltip, ResponsiveContainer,
} from 'recharts';

export default function ScoreTimeline({ data }) {
  const chartData = [
    {
      horizon: '2025',
      'Score croisé': Number(data.score_croise_2025?.toFixed(2)),
      'Score eau': Number(data.score_eau_2020_2025_norm?.toFixed(2)),
    },
    {
      horizon: '2030',
      'Score croisé': Number(data.score_croise_2030?.toFixed(2)),
      'Score eau': Number(data.score_eau_2030_2035_norm?.toFixed(2)),
    },
    {
      horizon: '2050',
      'Score croisé': Number(data.score_croise_2050?.toFixed(2)),
      'Score eau': Number(data.score_eau_2050_2055_norm?.toFixed(2)),
    },
  ];

  return (
    <div
      className="bg-surface-low rounded-2xl overflow-hidden"
      style={{ boxShadow: '0 0 48px rgba(0,10,67,0.04)' }}
    >
      <div className="px-6 pt-5 pb-1">
        <h3 className="text-[0.6875rem] font-semibold text-on-surface-var uppercase tracking-widest">
          Évolution par horizon temporel
        </h3>
      </div>

      {/* Bleed: chart touches the horizontal edges */}
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={chartData} margin={{ top: 12, right: 0, left: -20, bottom: 8 }}>
          <XAxis
            dataKey="horizon"
            tick={{ fontSize: 11, fill: '#44474f', fontFamily: 'Inter, sans-serif' }}
            axisLine={false}
            tickLine={false}
          />
          <YAxis
            domain={[0, 10]}
            tick={{ fontSize: 11, fill: '#44474f', fontFamily: 'Inter, sans-serif' }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
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
            cursor={{ stroke: 'rgba(0,10,67,0.08)', strokeWidth: 1 }}
          />
          <Line
            type="monotone"
            dataKey="Score croisé"
            stroke="#000a43"
            strokeWidth={2.5}
            dot={{ r: 5, fill: '#000a43', strokeWidth: 0 }}
            activeDot={{ r: 7, fill: '#051b71', strokeWidth: 0 }}
          />
          <Line
            type="monotone"
            dataKey="Score eau"
            stroke="#0097d6"
            strokeWidth={2.5}
            strokeDasharray="6 4"
            dot={{ r: 5, fill: '#0097d6', strokeWidth: 0 }}
            activeDot={{ r: 7, fill: '#0097d6', strokeWidth: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>

      {/* Custom legend */}
      <div className="px-6 pb-5 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-[2.5px] rounded-full bg-primary" />
          <span className="text-[0.6875rem] text-on-surface-var">Score croisé</span>
        </div>
        <div className="flex items-center gap-2">
          <svg width="24" height="3" viewBox="0 0 24 3">
            <line x1="0" y1="1.5" x2="24" y2="1.5" stroke="#0097d6" strokeWidth="2.5" strokeDasharray="6 4" strokeLinecap="round" />
          </svg>
          <span className="text-[0.6875rem] text-on-surface-var">Score eau</span>
        </div>
      </div>
    </div>
  );
}
