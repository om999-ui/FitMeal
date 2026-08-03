import DashboardLayout from "../../layouts/DashboardLayout";

function Settings() {
  return (
    <DashboardLayout>
      <div>
        <h2 className="text-3xl font-bold text-slate-800">
          Settings
        </h2>

        <p className="mt-2 text-slate-500">
          Manage your application settings.
        </p>
      </div>
    </DashboardLayout>
  );
}

export default Settings;