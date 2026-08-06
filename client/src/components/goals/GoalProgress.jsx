function GoalProgress({
  title,
  current,
  target,
  color = "bg-green-600",
}) {
  const percentage =
    target > 0
      ? Math.min((current / target) * 100, 100)
      : 0;

  return (
    <div className="rounded-2xl bg-white p-6 shadow">

      <div className="mb-3 flex items-center justify-between">

        <h3 className="font-semibold text-slate-700">
          {title}
        </h3>

        <span className="text-sm text-slate-500">
          {current} / {target}
        </span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-slate-200">

        <div
          className={`${color} h-full transition-all duration-500`}
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <p className="mt-2 text-right text-sm font-medium text-slate-600">
        {percentage.toFixed(0)}%
      </p>

    </div>
  );
}

export default GoalProgress;