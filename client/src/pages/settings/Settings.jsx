import DashboardLayout from "../../layouts/DashboardLayout";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import {
  Lock,
  Info,
  LogOut,
  ChevronRight,
} from "lucide-react";

function Settings() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();

    toast.success("Logged out successfully");

    navigate("/login");
  };

  return (
    <DashboardLayout>
      <div className="rounded-3xl bg-white p-5 shadow-sm md:p-8">

        {/* Heading */}
        <h1 className="text-3xl font-bold text-slate-800">
          Settings
        </h1>

        <p className="mt-2 text-slate-500">
          Manage your account settings.
        </p>

        {/* Settings Options */}
        <div className="mt-8 space-y-4">

          <button
            className="flex w-full items-center justify-between rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50"
          >
            <div className="flex items-center gap-3">
              <Lock className="text-green-600" size={22} />
              <span className="font-medium">
                Change Password
              </span>
            </div>

            <ChevronRight size={20} />
          </button>

          <button
            className="flex w-full items-center justify-between rounded-2xl border border-slate-200 p-4 transition hover:bg-slate-50"
          >
            <div className="flex items-center gap-3">
              <Info className="text-blue-600" size={22} />
              <span className="font-medium">
                About FitMeal
              </span>
            </div>

            <ChevronRight size={20} />
          </button>

          <button
            onClick={handleLogout}
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-red-500 p-4 font-semibold text-white transition hover:bg-red-600"
          >
            <LogOut size={20} />
            Logout
          </button>

        </div>

      </div>
    </DashboardLayout>
  );
}

export default Settings;