import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <h1 className="text-3xl font-bold text-green-600">
          FitMeal
        </h1>

        <div className="flex items-center gap-4">

          <Link
            to="/login"
            className="font-medium text-slate-600 hover:text-green-600"
          >
            Login
          </Link>

          <Link
            to="/register"
            className="rounded-xl bg-green-600 px-5 py-3 font-semibold text-white transition hover:bg-green-700"
          >
            Get Started
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;
