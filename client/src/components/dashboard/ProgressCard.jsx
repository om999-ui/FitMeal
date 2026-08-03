function ProgressCard({
  title,
  current,
  target,
  color = "green",
}) {
  const percentage = Math.min(
    (current / target) * 100,
    100
  );

  const colors = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    red: "bg-red-500",
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm">
      <div className="flex justify-between">
        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        <span className="text-sm text-slate-500">
          {current}/{target}
        </span>
      </div>

      <div className="mt-5 h-3 w-full rounded-full bg-slate-200">
        <div
          className={`h-3 rounded-full ${colors[color]}`}
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <p className="mt-4 text-sm text-slate-500">
        {target - current} remaining
      </p>
    </div>
  );
}

export default ProgressCard;