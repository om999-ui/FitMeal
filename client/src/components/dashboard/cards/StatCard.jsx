import {
  Flame,
  Beef,
  Wheat,
  Droplets,
} from "lucide-react";

function StatCard({
  title,
  value,
  unit,
  color,
}) {
  const styles = {
    green: {
      bg: "bg-green-100",
      text: "text-green-700",
      icon: <Flame size={28} />,
    },
    blue: {
      bg: "bg-blue-100",
      text: "text-blue-700",
      icon: <Beef size={28} />,
    },
    orange: {
      bg: "bg-orange-100",
      text: "text-orange-700",
      icon: <Wheat size={28} />,
    },
    red: {
      bg: "bg-red-100",
      text: "text-red-700",
      icon: <Droplets size={28} />,
    },
  };

  const style = styles[color];

  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div>
          <p className="text-sm font-semibold text-slate-500">
            {title}
          </p>

          <h2 className={`mt-3 text-4xl font-bold ${style.text}`}>
            {value}

            <span className="ml-1 text-lg font-medium text-slate-500">
              {unit}
            </span>
          </h2>
        </div>

        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl ${style.bg} ${style.text}`}
        >
          {style.icon}
        </div>

      </div>

    </div>
  );
}

export default StatCard;