import {
  LayoutDashboard,
  UtensilsCrossed,
  Target,
  User,
  Settings,
  LogOut,
  X,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
    setSidebarOpen(false);
  };

  const handleClose = () => {
    setSidebarOpen(false);
  };

  const navClass = ({ isActive }) =>
    `flex w-full items-center gap-3 rounded-xl p-4 transition-all duration-200 ${
      isActive
        ? "bg-green-600 text-white shadow-md"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={handleClose}
        />
      )}

      <aside
        className={`
          fixed left-0 top-0 z-50 flex h-screen w-72 flex-col
          bg-white shadow-xl transition-transform duration-300
          lg:static lg:translate-x-0
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b p-8">

          <div>
            <h1 className="text-3xl font-bold text-green-600">
              FitMeal
            </h1>

            <p className="text-gray-500">
              Nutrition Tracker
            </p>
          </div>

          {/* Close Button (Mobile Only) */}
          <button
            onClick={handleClose}
            className="rounded-lg p-2 hover:bg-slate-100 lg:hidden"
          >
            <X size={24} />
          </button>

        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-3 p-6">

          <NavLink
            to="/dashboard"
            className={navClass}
            onClick={handleClose}
          >
            <LayoutDashboard size={22} />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/meals"
            className={navClass}
            onClick={handleClose}
          >
            <UtensilsCrossed size={22} />
            <span>Meals</span>
          </NavLink>

          <NavLink
            to="/goals"
            className={navClass}
            onClick={handleClose}
          >
            <Target size={22} />
            <span>Goals</span>
          </NavLink>

          <NavLink
            to="/profile"
            className={navClass}
            onClick={handleClose}
          >
            <User size={22} />
            <span>Profile</span>
          </NavLink>

          <NavLink
            to="/settings"
            className={navClass}
            onClick={handleClose}
          >
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
    </>
  );
}

export default Sidebar;