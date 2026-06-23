import { Link, useLocation } from "react-router-dom";

export default function Navbar({ title }) {
  const location = useLocation();
  return (
    <nav className="border-b px-6 py-3 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-green-400 font-mono tracking-tight">{title}</h1>
      <div className="flex gap-3">
        {location.pathname !== "/login" && (
          <Link
            to="/login"
            className="px-4 py-1.5 rounded-2xl bg-black text-white border-2 border-green-500 hover:shadow-[0_0_12px_rgba(0,255,65,0.3)] hover:bg-green-500 transition-all duration-300"
          >
            Login
          </Link>
        )}
        {location.pathname !== "/register" && (
          <Link
            to="/register"
            className="px-4 py-1.5 rounded-2xl bg-black text-white border-2 border-green-500 hover:shadow-[0_0_12px_rgba(0,255,65,0.3)] hover:bg-green-500 transition-all duration-300"
          >
            Register
          </Link>
        )}
      </div>
    </nav>
  );
}
