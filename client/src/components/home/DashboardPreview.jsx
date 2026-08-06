import dashboardImage from "../../assets/images/dashboard-preview.png";

function DashboardPreview() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Dashboard Preview
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Beautiful Analytics
            <br />
            At Your Fingertips
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Monitor your calories, protein, carbs and fat with an
            elegant dashboard designed to keep your health goals on track.
          </p>

        </div>

        <div className="mt-16">

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl transition duration-500 hover:-translate-y-2 hover:shadow-green-200">

            <img
              src={dashboardImage}
              alt="FitMeal Dashboard"
              className="w-full"
            />

          </div>

        </div>

      </div>

    </section>
  );
}

export default DashboardPreview;