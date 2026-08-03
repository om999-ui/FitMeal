const colors = {
  green: "text-green-600",
  blue: "text-blue-600",
  orange: "text-orange-500",
  red: "text-red-500",
};

function StatCard({
  title,
  value,
  unit,
  color = "green",
}) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm font-medium text-slate-500">
        {title}
      </p>

      <div className="mt-4 flex items-end gap-2">
        <h2 className={`text-4xl font-bold ${colors[color]}`}>
          {value}
        </h2>

        <span className="pb-1 text-slate-500">
          {unit}
        </span>
      </div>
    </div>
  );
}

export default StatCard;