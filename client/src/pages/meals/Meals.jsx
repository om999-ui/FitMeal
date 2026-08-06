import { useEffect, useState } from "react";
import toast from "react-hot-toast";

import DashboardLayout from "../../layouts/DashboardLayout";

import NutritionStats from "../../components/dashboard/NutritionStats";
import NutritionChart from "../../components/dashboard/NutritionChart";

import AddMealForm from "../../components/meals/AddMealForm";
import MealList from "../../components/meals/MealList";

import DeleteModal from "../../components/common/DeleteModal";
import MealsSkeleton from "../../components/common/MealsSkeleton";

import {
  getMeals,
  deleteMeal,
} from "../../services/mealService";

function Meals() {
  const [meals, setMeals] = useState([]);
  const [editingMeal, setEditingMeal] = useState(null);

  const [loading, setLoading] = useState(true);

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);

  useEffect(() => {
    fetchMeals();
  }, []);

  const fetchMeals = async () => {
    try {
      // Remove this after testing
      // await new Promise((resolve) =>
      //   setTimeout(resolve, 1500)
      // );

      const response = await getMeals();

      setMeals(response.meals);

      setLoading(false);
    } catch (error) {
      console.error(error);

      toast.error("Failed to load meals");

      setLoading(false);
    }
  };

  const handleDeleteClick = (meal) => {
    setSelectedMeal(meal);
    setDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (!selectedMeal) return;

    try {
      await deleteMeal(selectedMeal._id);

      toast.success("Meal deleted successfully");

      fetchMeals();

      setDeleteModalOpen(false);
      setSelectedMeal(null);
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete meal");
    }
  };

  const nutrition = {
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
  };

  return (
    <DashboardLayout>

      {loading ? (

        <MealsSkeleton />

      ) : (

        <div className="space-y-8">

          <NutritionStats meals={meals} />

          <AddMealForm
            editingMeal={editingMeal}
            setEditingMeal={setEditingMeal}
            fetchMeals={fetchMeals}
          />

          <MealList
            meals={meals}
            onDelete={handleDeleteClick}
            onEdit={setEditingMeal}
          />

          <NutritionChart
            nutrition={nutrition}
          />

          <DeleteModal
            isOpen={deleteModalOpen}
            title="Delete Meal"
            message={
              selectedMeal
                ? `Are you sure you want to delete "${selectedMeal.foodName}"? This action cannot be undone.`
                : ""
            }
            onCancel={() => {
              setDeleteModalOpen(false);
              setSelectedMeal(null);
            }}
            onConfirm={confirmDelete}
          />

        </div>

      )}

    </DashboardLayout>
  );
}

export default Meals;