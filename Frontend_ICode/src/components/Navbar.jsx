import { Link, useLocation } from "react-router-dom";

export default function Navbar({ title }) {
  const location = useLocation();
  return (
    <nav className="border-b p-4 flex justify-between items-center">
      <h1 className="text-3xl font-bold text-green-400 font-mono">{title}</h1>
      <div className="flex gap-4">
        {location.pathname !== "/login" && (
          <Link
            to="/login"
            className="px-3 py-1.5 rounded bg-green-400 text-gray-100 hover:bg-green-500 border-2 border-none"
          >
            Login
          </Link>
        )}

        {location.pathname !== "/register" && (
          <Link
            to="/register"
            className="px-3 py-1.5 rounded bg-green-400 text-gray-100 hover:bg-green-500 border-2 border-none"
          >
            Register
          </Link>
        )}
      </div>
    </nav>
  );
}
