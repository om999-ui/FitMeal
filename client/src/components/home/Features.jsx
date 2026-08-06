import {
  UtensilsCrossed,
  Target,
  BarChart3,
  Smartphone,
} from "lucide-react";

function Features() {
  const features = [
    {
      icon: <UtensilsCrossed size={34} />,
      title: "Meal Tracking",
      description:
        "Easily add, edit and manage your daily meals with detailed nutrition information.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Target size={34} />,
      title: "Nutrition Goals",
      description:
        "Set calorie, protein, carbs and fat targets and monitor your daily progress.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <BarChart3 size={34} />,
      title: "Analytics Dashboard",
      description:
        "Visualize your nutrition with interactive charts, summaries and progress cards.",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: <Smartphone size={34} />,
      title: "Responsive Design",
      description:
        "Enjoy a seamless experience across desktop, tablet and mobile devices.",
      color: "bg-red-100 text-red-600",
    },
  ];

  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            Features
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Everything You Need
            <br />
            To Stay Healthy
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600">
            FitMeal combines meal tracking, nutrition goals,
            beautiful analytics and responsive design into one
            modern web application.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${feature.color}`}
              >
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-800">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-500">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;