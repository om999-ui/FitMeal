import { useEffect, useState } from "react";

import DashboardLayout from "../../layouts/DashboardLayout";
import AddMealForm from "../../components/meals/AddMealForm";
import MealList from "../../components/meals/MealList";

import { getMeals } from "../../services/mealService";

function Meals() {
  const [meals, setMeals] = useState([]);

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
  }, []);

  return (
    <DashboardLayout>
      <AddMealForm onMealAdded={fetchMeals} />

      <MealList
        meals={meals}
      />
    </DashboardLayout>
  );
}

export default Meals;