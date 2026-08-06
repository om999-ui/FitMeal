import {
  Trash2,
  Pencil,
  Beef,
  Wheat,
  Droplets,
} from "lucide-react";

function MealCard({
  meal,
  onDelete,
  onEdit,
}) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

        {/* Meal Info */}
        <div>
          <h3 className="text-xl font-bold text-slate-800">
            {meal.foodName}
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            {meal.mealType}
          </p>
        </div>

        {/* Calories + Actions */}
        <div className="flex flex-wrap items-center gap-2">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            {meal.calories} kcal
          </span>

          <button
            onClick={() => onEdit(meal)}
            className="rounded-xl bg-blue-50 p-2 text-blue-600 transition hover:bg-blue-100"
            title="Edit Meal"
          >
            <Pencil size={18} />
          </button>

          <button
            onClick={() => onDelete(meal)}
            className="rounded-xl bg-red-50 p-2 text-red-600 transition hover:bg-red-100"
            title="Delete Meal"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </div>

      {/* Nutrition */}
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">

        <div className="rounded-2xl bg-blue-50 p-4 text-center">

          <Beef
            className="mx-auto mb-2 text-blue-600"
            size={22}
          />

          <p className="text-lg font-bold">
            {meal.protein} g
          </p>

          <p className="text-sm text-slate-500">
            Protein
          </p>

        </div>

        <div className="rounded-2xl bg-orange-50 p-4 text-center">

          <Wheat
            className="mx-auto mb-2 text-orange-600"
            size={22}
          />

          <p className="text-lg font-bold">
            {meal.carbs} g
          </p>

          <p className="text-sm text-slate-500">
            Carbs
          </p>

        </div>

        <div className="rounded-2xl bg-red-50 p-4 text-center">

          <Droplets
            className="mx-auto mb-2 text-red-600"
            size={22}
          />

          <p className="text-lg font-bold">
            {meal.fat} g
          </p>

          <p className="text-sm text-slate-500">
            Fat
          </p>

        </div>

      </div>

    </div>
  );
}

export default MealCard;