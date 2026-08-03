import DashboardLayout from "../../layouts/DashboardLayout";

function Profile() {
  return (
    <DashboardLayout>
      <div>
        <h2 className="text-3xl font-bold text-slate-800">
          Profile
        </h2>

        <p className="mt-2 text-slate-500">
          View and update your profile.
        </p>
      </div>
    </DashboardLayout>
  );
}

export default Profile;