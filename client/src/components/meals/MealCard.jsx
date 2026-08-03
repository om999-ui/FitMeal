import { Flame, Beef, Wheat, Droplets } from "lucide-react";

function MealCard({ meal }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      <div className="flex items-center justify-between">

        <div>
          <h3 className="text-lg font-semibold text-slate-800">
            {meal.foodName}
          </h3>

          <p className="text-sm text-slate-500">
            {meal.mealType}
          </p>
        </div>

        <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
          {meal.calories} kcal
        </span>

      </div>

      <div className="mt-5 grid grid-cols-3 gap-3">

        <div className="rounded-xl bg-blue-50 p-3 text-center">
          <Beef className="mx-auto mb-2 text-blue-600" size={20} />
          <p className="text-sm font-medium">
            {meal.protein} g
          </p>
          <p className="text-xs text-slate-500">
            Protein
          </p>
        </div>

        <div className="rounded-xl bg-orange-50 p-3 text-center">
          <Wheat className="mx-auto mb-2 text-orange-600" size={20} />
          <p className="text-sm font-medium">
            {meal.carbs} g
          </p>
          <p className="text-xs text-slate-500">
            Carbs
          </p>
        </div>

        <div className="rounded-xl bg-red-50 p-3 text-center">
          <Droplets className="mx-auto mb-2 text-red-600" size={20} />
          <p className="text-sm font-medium">
            {meal.fat} g
          </p>
          <p className="text-xs text-slate-500">
            Fat
          </p>
        </div>

      </div>
    </div>
  );
}

export default MealCard;