import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import {
  addMeal,
  updateMeal,
} from "../../services/mealService";

function AddMealForm({
  editingMeal,
  setEditingMeal,
  fetchMeals,
}) {
  const [form, setForm] = useState({
    mealType: "Breakfast",
    foodName: "",
    calories: "",
    protein: "",
    carbs: "",
    fat: "",
  });

  useEffect(() => {
  if (editingMeal) {
    setForm({
      mealType: editingMeal.mealType,
      foodName: editingMeal.foodName,
      calories: editingMeal.calories,
      protein: editingMeal.protein,
      carbs: editingMeal.carbs,
      fat: editingMeal.fat,
    });
  }
}, [editingMeal]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    if (editingMeal) {
      await updateMeal(editingMeal._id, form);

      toast.success("Meal updated!");

      setEditingMeal(null);
    } else {
      await addMeal(form);

      toast.success("Meal added!");
    }

    setForm({
      mealType: "Breakfast",
      foodName: "",
      calories: "",
      protein: "",
      carbs: "",
      fat: "",
    });

    fetchMeals();
  } catch (error) {
    toast.error("Something went wrong");
  }
};

  return (
    <div className="rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-6 text-2xl font-bold">
        Add Meal
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid gap-4"
      >

        <select
          name="mealType"
          value={form.mealType}
          onChange={handleChange}
          className="rounded-lg border p-3"
        >
          <option>Breakfast</option>
          <option>Lunch</option>
          <option>Dinner</option>
          <option>Snack</option>
        </select>

        <input
          name="foodName"
          placeholder="Food Name"
          value={form.foodName}
          onChange={handleChange}
          className="rounded-lg border p-3"
        />

        <input
          name="calories"
          type="number"
          placeholder="Calories"
          value={form.calories}
          onChange={handleChange}
          className="rounded-lg border p-3"
        />

        <input
          name="protein"
          type="number"
          placeholder="Protein"
          value={form.protein}
          onChange={handleChange}
          className="rounded-lg border p-3"
        />

        <input
          name="carbs"
          type="number"
          placeholder="Carbs"
          value={form.carbs}
          onChange={handleChange}
          className="rounded-lg border p-3"
        />

        <input
          name="fat"
          type="number"
          placeholder="Fat"
          value={form.fat}
          onChange={handleChange}
          className="rounded-lg border p-3"
        />

        <button
          className="rounded-lg bg-green-600 py-3 text-white hover:bg-green-700"
        >
          {editingMeal ? "Update Meal" : "Add Meal"}
        </button>

      </form>
    </div>
  );
}

export default AddMealForm;