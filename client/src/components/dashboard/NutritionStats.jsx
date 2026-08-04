function NutritionStats({ meals }) {
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

  const stats = [
    {
      title: "Calories",
      value: `${totalCalories} kcal`,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Protein",
      value: `${totalProtein} g`,
      color: "bg-blue-100 text-blue-700",
    },
    {
      title: "Carbs",
      value: `${totalCarbs} g`,
      color: "bg-orange-100 text-orange-700",
    },
    {
      title: "Fat",
      value: `${totalFat} g`,
      color: "bg-red-100 text-red-700",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className={`rounded-2xl p-6 shadow ${stat.color}`}
        >
          <h3 className="text-lg font-semibold">
            {stat.title}
          </h3>

          <p className="mt-3 text-3xl font-bold">
            {stat.value}
          </p>
        </div>
      ))}
    </div>
  );
}

export default NutritionStats;