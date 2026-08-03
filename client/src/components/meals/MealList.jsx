import MealCard from "./MealCard";
function MealList({ meals }) {

  return (
    <div className="mt-8 rounded-2xl bg-white p-6 shadow">
      <h2 className="mb-4 text-xl font-bold">
        Today's Meals
      </h2>

      {meals.length === 0 ? (
        <p className="text-gray-500">
          No meals added yet.
        </p>
      ) : (
        <div className="space-y-4">
          {meals.map((meal) => (
           <MealCard
  key={meal._id}
  meal={meal}
/>
          ))}
        </div>
      )}
    </div>
  );
}

export default MealList;