import NutritionStats from "../../components/dashboard/NutritionStats";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout";
import AddMealForm from "../../components/meals/AddMealForm";
import MealList from "../../components/meals/MealList";

import {
  getMeals,
  deleteMeal,
} from "../../services/mealService";
import NutritionChart from "../../components/dashboard/NutritionChart";

function Meals() {
  const [meals, setMeals] = useState([]);
  const [editingMeal, setEditingMeal] = useState(null);

  const fetchMeals = async () => {
    try {
      const response = await getMeals();
      setMeals(response.meals);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMeals();
    const handleDelete = async (mealId) => {
  try {
    await deleteMeal(mealId);
    fetchMeals();
  } catch (error) {
    console.error(error);
  }
};
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this meal?"
    );

    if (!confirmDelete) return;

    try {
      await deleteMeal(id);

      toast.success("Meal deleted successfully");

      fetchMeals();
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete meal");
    }
  };

  return (
    <DashboardLayout>
      <NutritionStats meals={meals} />

<div className="mt-8">
      <AddMealForm
        editingMeal={editingMeal}
        setEditingMeal={setEditingMeal}
        fetchMeals={fetchMeals}
      />

      <MealList
        meals={meals}
        onDelete={handleDelete}
        onEdit={setEditingMeal} 
      />
      <NutritionChart meals={meals} />
      </div>
    </DashboardLayout>
  );
}

export default Meals;