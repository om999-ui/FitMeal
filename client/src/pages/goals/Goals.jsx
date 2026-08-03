import DashboardLayout from "../../layouts/DashboardLayout";

function Goals() {
  return (
    <DashboardLayout>
      <div>
        <h2 className="text-3xl font-bold text-slate-800">
          Goals
        </h2>

        <p className="mt-2 text-slate-500">
          Manage your fitness goals here.
        </p>
      </div>
    </DashboardLayout>
  );
}

export default Goals;