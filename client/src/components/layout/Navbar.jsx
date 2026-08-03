import { useAuth } from "../../context/AuthContext";

function Navbar() {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between rounded-2xl bg-white p-6 shadow">

      <div>

        <h1 className="text-3xl font-bold">

          Welcome Back,

          <span className="text-green-600">

            {" "}

            {user?.name}

          </span>

          👋

        </h1>

        <p className="text-gray-500">

          Track your nutrition every day.

        </p>

      </div>

    </header>
  );
}

export default Navbar;