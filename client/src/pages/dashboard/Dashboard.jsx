import DashboardLayout from "../../layouts/DashboardLayout";
import StatCard from "../../components/dashboard/cards/StatCard";
import ProgressCard from "../../components/dashboard/ProgressCard";
import Greeting from "../../components/dashboard/widgets/Greeting";

function Dashboard() {
  return (
    <DashboardLayout>
      <div>
        <h2 className="text-2xl font-bold text-slate-800">
          Dashboard
        </h2>

        <p className="mt-2 text-slate-500">
          Here's today's nutrition summary.
        </p>

        <Greeting />

        {/* Nutrition Stats */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          <StatCard
            title="Calories"
            value="1850"
            unit="kcal"
            color="green"
          />

          <StatCard
            title="Protein"
            value="120"
            unit="g"
            color="blue"
          />

          <StatCard
            title="Carbs"
            value="210"
            unit="g"
            color="orange"
          />

          <StatCard
            title="Fat"
            value="65"
            unit="g"
            color="red"
          />
        </div>

        {/* Calories Progress */}
        <div className="mt-8">
          <ProgressCard
            title="Calories Progress"
            current={1850}
            target={2500}
            color="green"
          />
        </div>
      </div>
    </DashboardLayout>
  );
}

export default Dashboard;