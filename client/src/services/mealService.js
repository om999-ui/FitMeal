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