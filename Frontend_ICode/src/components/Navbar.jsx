import { Link, useLocation } from "react-router-dom";

export default function Navbar({ title }) {
  const location = useLocation();

  return (
    <nav className="border-b px-6 py-3 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-1">
        <span className="text-green-400 font-bold">{'{'}</span>
        <h1 className="text-2xl font-bold text-green-400 font-mono">{title}</h1>
        <span className="text-green-400 font-bold">{'}'}</span>
      </Link>
      <div className="flex gap-3">
        {location.pathname !== "/login" && (
          <Link
            to="/login"
            className="px-4 py-1.5 rounded bg-black text-white border-2 border-green-500 hover:bg-green-500 transition-all duration-200"
          >
            Login
          </Link>
        )}
        {location.pathname !== "/register" && (
          <Link
            to="/register"
            className="px-4 py-1.5 rounded bg-black text-white border-2 border-green-500 hover:bg-green-500 transition-all duration-200"
          >
            Register
          </Link>
        )}
      </div>
    </nav>
  );
}
