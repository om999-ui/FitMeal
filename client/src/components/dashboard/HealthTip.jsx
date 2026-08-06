import { Lightbulb } from "lucide-react";

function HealthTip() {
  const tips = [
    "Drink at least 2–3 liters of water today 💧",
    "Include protein in every meal for better recovery 🥩",
    "Eat at least one fruit today 🍎",
    "Take a 10-minute walk after lunch 🚶",
    "Don't skip breakfast ☀️",
    "Aim for 7–8 hours of sleep 😴",
    "Limit sugary drinks 🥤",
    "Choose whole grains over refined grains 🌾",
    "Add vegetables to every meal 🥦",
    "Healthy habits beat motivation 💪",
    "Consistency is more important than perfection ⭐",
    "Track your meals honestly for better results 📖",
    "Stretch for 5 minutes today 🧘",
    "Avoid late-night snacking 🌙",
    "Small improvements every day lead to big results 🚀",
  ];

  const tip = tips[new Date().getDate() % tips.length];

  return (
    <div className="mt-8 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-600 p-8 text-white shadow-lg">

      <div className="flex items-center gap-4">

        <div className="rounded-2xl bg-white/20 p-4">
          <Lightbulb size={30} />
        </div>

        <div>

          <p className="text-sm uppercase tracking-widest text-green-100">
            Today's Health Tip
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {tip}
          </h2>

        </div>

      </div>

    </div>
  );
}

export default HealthTip;