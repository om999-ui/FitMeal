import {
  LayoutDashboard,
  UtensilsCrossed,
  Target,
  User,
  Settings,
  LogOut,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Sidebar() {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navClass = ({ isActive }) =>
    `flex w-full items-center gap-3 rounded-xl p-4 transition-all duration-200 ${
      isActive
        ? "bg-green-600 text-white shadow-md"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <aside className="flex h-screen w-72 flex-col bg-white shadow-xl">

      {/* Logo */}
      <div className="border-b p-8">
        <h1 className="text-3xl font-bold text-green-600">
          FitMeal
        </h1>

        <p className="text-gray-500">
          Nutrition Tracker
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-3 p-6">

        <NavLink to="/dashboard" className={navClass}>
          <LayoutDashboard size={22} />
          <span>Dashboard</span>
        </NavLink>

        <NavLink to="/meals" className={navClass}>
          <UtensilsCrossed size={22} />
          <span>Meals</span>
        </NavLink>

        <NavLink to="/goals" className={navClass}>
          <Target size={22} />
          <span>Goals</span>
        </NavLink>

        <NavLink to="/profile" className={navClass}>
          <User size={22} />
          <span>Profile</span>
        </NavLink>

        <NavLink to="/settings" className={navClass}>
          <Settings size={22} />
          <span>Settings</span>
        </NavLink>

      </nav>

      {/* Logout */}
      <div className="border-t p-6">
        <button
          onClick={handleLogout}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-500 py-3 font-medium text-white transition hover:bg-red-600"
        >
          <LogOut size={20} />
          Logout
        </button>
      </div>

    </aside>
  );
}

export default Sidebar;