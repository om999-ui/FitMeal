import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";

import Greeting from "../../components/dashboard/widgets/Greeting";
import StatCard from "../../components/dashboard/cards/StatCard";
import ProgressCard from "../../components/dashboard/ProgressCard";
import SummaryCard from "../../components/dashboard/cards/SummaryCard";
import NutritionChart from "../../components/dashboard/NutritionChart";
import HealthTip from "../../components/dashboard/HealthTip";

import { getMeals } from "../../services/mealService";
import { getGoal } from "../../services/goalService";
import DashboardSkeleton from "../../components/common/DashboardSkeleton";

function Dashboard() {
  const [nutrition, setNutrition] = useState({
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
  });

  const [goal, setGoal] = useState({
    calories: 2000,
    protein: 120,
    carbs: 250,
    fat: 60,
  });

  const [mealCount, setMealCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const mealsResponse = await getMeals();
      const meals = mealsResponse.meals;

      setMealCount(meals.length);

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

      const goalResponse = await getGoal();

      if (goalResponse.goal) {
        setGoal(goalResponse.goal);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const remainingCalories = Math.max(
    goal.calories - nutrition.calories,
    0
  );

  const remainingProtein = Math.max(
    (goal.protein || 0) - nutrition.protein,
    0
  );

  const remainingCarbs = Math.max(
    (goal.carbs || 0) - nutrition.carbs,
    0
  );

  return (
   <DashboardLayout>
  {loading ? (
    <DashboardSkeleton />
  ) : (
    <div className="space-y-8">

        <Greeting />

        {/* Nutrition Stats */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

          <StatCard
            title="Calories"
            value={nutrition.calories}
            unit="kcal"
            color="green"
          />

          <StatCard
            title="Protein"
            value={nutrition.protein}
            unit="g"
            color="blue"
          />

          <StatCard
            title="Carbs"
            value={nutrition.carbs}
            unit="g"
            color="orange"
          />

          <StatCard
            title="Fat"
            value={nutrition.fat}
            unit="g"
            color="red"
          />

        </div>

        {/* Progress + Chart */}
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">

          <ProgressCard
            title="Calories Progress"
            current={nutrition.calories}
            target={goal.calories}
            color="green"
          />

          <NutritionChart
            nutrition={nutrition}
          />

        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">

          <SummaryCard
            title="Total Meals"
            value={mealCount}
            color="green"
          />

          <SummaryCard
            title="Remaining Calories"
            value={remainingCalories}
            unit="kcal"
            color="red"
          />

          <SummaryCard
            title="Remaining Protein"
            value={remainingProtein}
            unit="g"
            color="blue"
          />

          <SummaryCard
            title="Remaining Carbs"
            value={remainingCarbs}
            unit="g"
            color="orange"
          />

        </div>

        {/* Health Tip */}
        <HealthTip />

          </div>
    )
  }
</DashboardLayout>
  );
}

export default Dashboard;