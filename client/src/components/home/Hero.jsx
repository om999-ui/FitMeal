import { ArrowRight, Activity } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-green-50 via-white to-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 py-20 lg:flex-row">

        {/* Left Side */}
        <div className="flex-1">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            🥗 Healthy Lifestyle Starts Here
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-slate-900 lg:text-6xl">
            Track Your
            <span className="text-green-600">
              {" "}Nutrition{" "}
            </span>
            Smarter.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            FitMeal helps you track calories, protein,
            carbs and fat while visualizing your
            nutrition progress through beautiful
            dashboards and analytics.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/register"
              className="flex items-center gap-2 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700"
            >
              Get Started
              <ArrowRight size={20} />
            </Link>

            <Link
              to="/login"
              className="rounded-xl border border-slate-300 px-8 py-4 font-semibold transition hover:bg-slate-100"
            >
              Login
            </Link>

          </div>

        </div>

        {/* Right Side */}
        <div className="mt-16 flex flex-1 justify-center lg:mt-0">

          <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl">

            <div className="flex items-center gap-3">

              <div className="rounded-xl bg-green-100 p-3">
                <Activity
                  className="text-green-600"
                  size={28}
                />
              </div>

              <div>
                <h3 className="font-bold text-slate-800">
                  Today's Progress
                </h3>

                <p className="text-sm text-slate-500">
                  Nutrition Summary
                </p>
              </div>

            </div>

            <div className="mt-8 space-y-5">

              <div>
                <div className="mb-2 flex justify-between">
                  <span>Calories</span>
                  <span>1850 / 2500</span>
                </div>

                <div className="h-3 rounded-full bg-slate-200">
                  <div className="h-3 w-3/4 rounded-full bg-green-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between">
                  <span>Protein</span>
                  <span>120 g</span>
                </div>

                <div className="h-3 rounded-full bg-slate-200">
                  <div className="h-3 w-2/3 rounded-full bg-blue-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between">
                  <span>Carbs</span>
                  <span>210 g</span>
                </div>

                <div className="h-3 rounded-full bg-slate-200">
                  <div className="h-3 w-4/5 rounded-full bg-orange-500" />
                </div>
              </div>

              <div>
                <div className="mb-2 flex justify-between">
                  <span>Fat</span>
                  <span>65 g</span>
                </div>

                <div className="h-3 rounded-full bg-slate-200">
                  <div className="h-3 w-1/2 rounded-full bg-red-500" />
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>

      </section>
  );
}

export default Hero;