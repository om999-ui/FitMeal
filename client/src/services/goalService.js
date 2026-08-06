import api from "./api";

// Get User Goals
export const getGoal = async () => {
  const token = localStorage.getItem("token");

  const response = await api.get("/goals", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

// Update User Goals
export const updateGoal = async (goalData) => {
  const token = localStorage.getItem("token");

  const response = await api.put("/goals", goalData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};