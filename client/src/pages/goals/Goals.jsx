import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout";
import {
  getGoal,
  updateGoal,
} from "../../services/goalService";
import GoalProgress from "../../components/goals/GoalProgress";
import { getMeals } from "../../services/mealService";

function Goals() {
  const [loading, setLoading] = useState(false);

  const [nutrition, setNutrition] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
  });

  const [goals, setGoals] = useState({
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  });

  const fetchGoals = async () => {
    try {
      const response = await getGoal();

      if (response.goal) {
        setGoals({
          calories: response.goal.calories,
          protein: response.goal.protein,
          carbs: response.goal.carbs,
          fat: response.goal.fat,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load goals");
    }
  };

  const fetchNutrition = async () => {
    try {
      const response = await getMeals();
      const meals = response.meals;

      setNutrition({
        calories: meals.reduce(
          (sum, meal) => sum + Number(meal.calories),
          0
        ),
        protein: meals.reduce(
          (sum, meal) => sum + Number(meal.protein),
          0
        ),
        carbs: meals.reduce(
          (sum, meal) => sum + Number(meal.carbs),
          0
        ),
        fat: meals.reduce(
          (sum, meal) => sum + Number(meal.fat),
          0
        ),
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGoals();
    fetchNutrition();
  }, []);

  const handleChange = (e) => {
    setGoals({
      ...goals,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await updateGoal(goals);

      toast.success("Goals updated successfully");

      fetchGoals();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update goals");
    } finally {
      setLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">

        {/* Goals Form */}
        <div className="rounded-3xl bg-white p-5 shadow-sm md:p-8">

          <h1 className="text-3xl font-bold text-slate-800">
            Nutrition Goals
          </h1>

          <p className="mt-2 text-slate-500">
            Set your daily nutrition targets.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8"
          >

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

              <input
                type="number"
                name="calories"
                placeholder="Daily Calories"
                value={goals.calories}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-green-500"
              />

              <input
                type="number"
                name="protein"
                placeholder="Protein (g)"
                value={goals.protein}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-green-500"
              />

              <input
                type="number"
                name="carbs"
                placeholder="Carbs (g)"
                value={goals.carbs}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-green-500"
              />

              <input
                type="number"
                name="fat"
                placeholder="Fat (g)"
                value={goals.fat}
                onChange={handleChange}
                className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:border-green-500"
              />

            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full rounded-xl bg-green-600 py-3 font-semibold text-white transition hover:bg-green-700 disabled:opacity-60 md:w-auto md:px-8"
            >
              {loading ? "Saving..." : "Save Goals"}
            </button>

          </form>

        </div>

        {/* Goal Progress */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

          <GoalProgress
            title="Calories"
            current={nutrition.calories}
            target={goals.calories}
            color="bg-green-600"
          />

          <GoalProgress
            title="Protein"
            current={nutrition.protein}
            target={goals.protein}
            color="bg-blue-600"
          />

          <GoalProgress
            title="Carbs"
            current={nutrition.carbs}
            target={goals.carbs}
            color="bg-orange-500"
          />

          <GoalProgress
            title="Fat"
            current={nutrition.fat}
            target={goals.fat}
            color="bg-red-500"
          />

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Goals;