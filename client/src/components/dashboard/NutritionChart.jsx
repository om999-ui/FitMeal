import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { BarChart3 } from "lucide-react";

function NutritionChart({ nutrition = {} }) {
  const {
    calories = 0,
    protein = 0,
    carbs = 0,
    fat = 0,
  } = nutrition;

  const data = [
    {
      name: "Calories",
      value: calories,
    },
    {
      name: "Protein",
      value: protein,
    },
    {
      name: "Carbs",
      value: carbs,
    },
    {
      name: "Fat",
      value: fat,
    },
  ];

  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-lg md:p-8">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <div>
          <h2 className="text-2xl font-bold text-slate-800">
            Nutrition Overview
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Today's nutrition breakdown
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-100 text-green-600 md:h-14 md:w-14">
          <BarChart3 size={26} />
        </div>

      </div>

      {/* Chart */}
      <div className="h-72 md:h-80">

        <ResponsiveContainer width="100%" height="100%">

          <BarChart data={data}>

            <CartesianGrid strokeDasharray="4 4" />

            <XAxis
              dataKey="name"
              tick={{ fontSize: 12 }}
            />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              fill="#16a34a"
              radius={[10, 10, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default NutritionChart;