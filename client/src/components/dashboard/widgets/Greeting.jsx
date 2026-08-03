import TodayDate from "./TodayDate";
function Greeting() {
  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) greeting = "Good Morning";
  else if (hour < 17) greeting = "Good Afternoon";

  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold text-slate-800">
        {greeting} 👋
      </h1>
        <TodayDate />

      <p className="mt-2 text-slate-500">
        Stay consistent. Every healthy choice counts.
      </p>
    </div>
  );
}

export default Greeting;