import { Flame } from "lucide-react";

function ProgressCard({
  title,
  current,
  target,
  color = "green",
}) {
  const percentage =
    target > 0
      ? Math.min((current / target) * 100, 100)
      : 0;

  const remaining = Math.max(target - current, 0);

  const colors = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    orange: "bg-orange-500",
    red: "bg-red-500",
  };

  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-800">
            {current}
            <span className="ml-2 text-xl font-medium text-slate-500">
              / {target} kcal
            </span>
          </h2>
        </div>

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100 text-green-600">
          <Flame size={30} />
        </div>

      </div>

      {/* Progress Bar */}
      <div className="mt-8">

        <div className="mb-2 flex justify-between text-sm text-slate-500">
          <span>Progress</span>
          <span>{percentage.toFixed(0)}%</span>
        </div>

        <div className="h-4 w-full overflow-hidden rounded-full bg-slate-200">

          <div
            className={`h-4 rounded-full transition-all duration-700 ${colors[color]}`}
            style={{
              width: `${percentage}%`,
            }}
          />

        </div>

      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">

        <p className="text-sm text-slate-500">
          Remaining Today
        </p>

        <p className="text-lg font-bold text-slate-700">
          {remaining} kcal
        </p>

      </div>

    </div>
  );
}

export default ProgressCard;