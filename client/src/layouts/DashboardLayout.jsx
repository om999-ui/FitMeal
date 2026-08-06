import { useState } from "react";

import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

function DashboardLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-100">

      <div className="flex">

        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <main className="flex-1 overflow-y-auto">

          <Navbar
            setSidebarOpen={setSidebarOpen}
          />

          <div className="p-4 md:p-8">
            {children}
          </div>

        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;