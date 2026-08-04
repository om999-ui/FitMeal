import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

function NutritionChart({ meals }) {
  const totalCalories = meals.reduce(
    (sum, meal) => sum + Number(meal.calories),
    0
  );

  const totalProtein = meals.reduce(
    (sum, meal) => sum + Number(meal.protein),
    0
  );

  const totalCarbs = meals.reduce(
    (sum, meal) => sum + Number(meal.carbs),
    0
  );

  const totalFat = meals.reduce(
    (sum, meal) => sum + Number(meal.fat),
    0
  );

  const data = [
    { name: "Calories", value: totalCalories },
    { name: "Protein", value: totalProtein },
    { name: "Carbs", value: totalCarbs },
    { name: "Fat", value: totalFat },
  ];

  return (
    <div className="mt-8 rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Nutrition Overview
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar dataKey="value" fill="#16a34a" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default NutritionChart;