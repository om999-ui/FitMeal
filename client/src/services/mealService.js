import api from "./api";

// Add Meal
export const addMeal = async (mealData) => {
  const token = localStorage.getItem("token");

  const response = await api.post("/meals", mealData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Get All Meals
export const getMeals = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/meals", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Update Meal
export const updateMeal = async (mealId, mealData) => {
  const token = localStorage.getItem("token");

  const response = await api.put(`/meals/${mealId}`, mealData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Delete Meal
export const deleteMeal = async (mealId) => {
  const token = localStorage.getItem("token");

  const response = await api.delete(`/meals/${mealId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};