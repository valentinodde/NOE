/* No border-b separators: rows use gap + background shifts per the No-Line rule */
function AlertRow({ label, days, valueColor, bg }) {
  return (
    <div className={`flex items-center justify-between px-4 py-3 rounded-xl ${bg}`}>
      <span className="text-[0.875rem] text-on-surface-var">{label}</span>
      <span
        className="text-[0.875rem] font-semibold"
        style={{ color: days > 0 ? valueColor : 'rgba(68,71,79,0.35)' }}
      >
        {days > 0 ? `${days} j/an` : 'Aucun'}
      </span>
    </div>
  );
}

export default function WaterAlertCard({ type, alerteRenforcee, crise }) {
  const isSou = type === 'SOU';
  const title = isSou ? 'Eaux souterraines' : 'Eaux superficielles';

  return (
    <div
      className="bg-surface-low rounded-2xl overflow-hidden flex-1"
      style={{ boxShadow: '0 0 48px rgba(0,10,67,0.04)' }}
    >
      <div className="bg-surface-highest px-5 py-3">
        <h3 className="text-[0.6875rem] font-semibold text-on-surface-var uppercase tracking-widest">
          {title}
        </h3>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <AlertRow
          label="Alerte renforcée"
          days={alerteRenforcee}
          valueColor="#fe851f"
          bg="bg-surface-high"
        />
        <AlertRow
          label="Crise"
          days={crise}
          valueColor="#964900"
          bg="bg-surface-highest"
        />
      </div>
    </div>
  );
}
