import { Menu } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

function Navbar({ setSidebarOpen }) {
  const { user } = useAuth();

  const hour = new Date().getHours();

  let greeting = "Good Evening";

  if (hour < 12) {
    greeting = "Good Morning";
  } else if (hour < 18) {
    greeting = "Good Afternoon";
  }

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="flex items-center justify-between rounded-b-3xl bg-white p-4 shadow-sm md:p-8">

      {/* Left */}
      <div className="flex items-center gap-4">

        {/* Mobile Menu Button */}
        <button
          onClick={() => setSidebarOpen(true)}
          className="rounded-xl p-2 hover:bg-slate-100 lg:hidden"
        >
          <Menu size={28} />
        </button>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-green-600 md:text-sm">
            {greeting}
          </p>

          <h1 className="mt-1 text-2xl font-bold text-slate-800 md:text-4xl">
            Welcome back,
            <span className="ml-2 text-green-600">
              {user?.name}
            </span>
            👋
          </h1>

          <p className="mt-1 text-sm text-slate-500 md:text-base">
            Track your nutrition and achieve your daily goals.
          </p>
        </div>

      </div>

      {/* Right */}
      <div className="hidden rounded-2xl bg-slate-50 px-6 py-4 text-center shadow-inner md:block">

        <p className="text-sm font-medium text-slate-500">
          Today
        </p>

        <h2 className="mt-1 text-lg font-bold text-slate-800">
          {today}
        </h2>

      </div>

    </header>
  );
}

export default Navbar;