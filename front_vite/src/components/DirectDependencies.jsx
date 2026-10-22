/* No border-b separators: rows use gap + background shifts per the No-Line rule */
function DependencyRow({ label, value }) {
  const isTrue = value === 1 || value === true;

  return (
    <div
      className={`flex items-center justify-between px-4 py-3.5 rounded-xl ${
        isTrue ? 'bg-surface-high' : 'bg-surface-low'
      }`}
    >
      <span className="text-[0.875rem] text-on-surface-var pr-6 leading-snug">{label}</span>
      <span
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold shrink-0"
        style={
          isTrue
            ? { background: 'rgba(150,73,0,0.10)', color: '#964900' }
            : { background: 'rgba(0,151,214,0.10)', color: '#001421' }
        }
      >
        <span
          className="w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: isTrue ? '#fe851f' : '#0097d6' }}
        />
        {isTrue ? 'Oui' : 'Non'}
      </span>
    </div>
  );
}

export default function DirectDependencies({ data }) {
  return (
    <div
      className="bg-surface-low rounded-2xl overflow-hidden"
      style={{ boxShadow: '0 0 48px rgba(0,10,67,0.04)' }}
    >
      <div className="bg-surface-highest px-5 py-3">
        <h3 className="text-[0.6875rem] font-semibold text-on-surface-var uppercase tracking-widest">
          Dépendances directes à l'eau
        </h3>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <DependencyRow
          label="Dépendance forte au prélèvement / consommation d'eau"
          value={data['Direct - High volume withdrawal/ consumption dependence']}
        />
        <DependencyRow
          label="Potentiel de pollution ou dégradation de l'eau"
          value={data['Direct - Water pollution/ degradation potential']}
        />
      </div>
    </div>
  );
}
