import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-slate-100">
      <Sidebar />

      <main className="flex-1 p-8 overflow-y-auto">
        <Navbar />

        <div className="mt-8">
          {children}
        </div>
      </main>
    </div>
  );
}

export default DashboardLayout;