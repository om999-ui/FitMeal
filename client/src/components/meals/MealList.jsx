import { UtensilsCrossed } from "lucide-react";
import MealCard from "./MealCard";

function MealList({
  meals,
  onDelete,
  onEdit,
}) {
  return (
    <div className="mt-8 rounded-3xl bg-white p-5 shadow-sm md:p-8">

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">

        <h2 className="text-2xl font-bold text-slate-800">
          Today's Meals
        </h2>

        <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
          {meals.length} Meal{meals.length !== 1 ? "s" : ""}
        </span>

      </div>

      {meals.length === 0 ? (

        <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-200 py-16 text-center">

          <div className="rounded-full bg-green-100 p-5">

            <UtensilsCrossed
              size={42}
              className="text-green-600"
            />

          </div>

          <h3 className="mt-6 text-xl font-bold text-slate-800">
            No meals added yet
          </h3>

          <p className="mt-2 max-w-md text-slate-500">
            Start tracking your nutrition by adding
            your first meal.
          </p>

        </div>

      ) : (

        <div className="space-y-5">

          {meals.map((meal) => (
            <MealCard
              key={meal._id}
              meal={meal}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}

        </div>

      )}

    </div>
  );
}

export default MealList;