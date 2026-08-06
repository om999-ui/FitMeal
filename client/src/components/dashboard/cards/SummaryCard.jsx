import {
  UtensilsCrossed,
  Flame,
  Beef,
  Wheat,
} from "lucide-react";

function SummaryCard({
  title,
  value,
  unit = "",
  color = "green",
}) {
  const colors = {
    green: "bg-green-100 text-green-700",
    blue: "bg-blue-100 text-blue-700",
    orange: "bg-orange-100 text-orange-700",
    red: "bg-red-100 text-red-700",
  };

  const icons = {
    "Total Meals": <UtensilsCrossed size={26} />,
    "Remaining Calories": <Flame size={26} />,
    "Remaining Protein": <Beef size={26} />,
    "Remaining Carbs": <Wheat size={26} />,
  };

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-slate-500">
          {title}
        </h3>

        <div className={colors[color]}>
          {icons[title]}
        </div>
      </div>

      <div className="mt-6">
        <p className="text-3xl font-bold text-slate-800">
          {value}
          <span className="ml-1 text-lg font-medium text-slate-500">
            {unit}
          </span>
        </p>
      </div>

    </div>
  );
}

export default SummaryCard;