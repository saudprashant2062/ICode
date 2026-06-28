import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/useTheme";

export default function Navbar({ title }) {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="border-b px-8 py-4 flex justify-between items-center">
      <Link to="/" className="flex items-center gap-1">
        <span className="text-green-400 font-bold">{'{'}</span>
        <h1 className="text-2xl font-bold text-green-400 font-mono">{title}</h1>
        <span className="text-green-400 font-bold">{'}'}</span>
      </Link>
      <div className="flex gap-3 items-center">
        <button
          onClick={toggleTheme}
          className="px-3 py-1.5 rounded bg-black text-white border border-green-500 hover:bg-green-500/15 hover:text-green-400 transition-all duration-200 text-sm"
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? "☀" : "☾"}
        </button>
        {location.pathname !== "/login" && (
          <Link
            to="/login"
            className="px-4 py-1.5 rounded bg-black text-white border border-green-500 hover:bg-green-500/15 hover:text-green-400 transition-all duration-200"
          >
            Login
          </Link>
        )}
        {location.pathname !== "/register" && (
          <Link
            to="/register"
            className="px-4 py-1.5 rounded bg-black text-white border border-green-500 hover:bg-green-500/15 hover:text-green-400 transition-all duration-200"
          >
            Register
          </Link>
        )}
      </div>
    </nav>
  );
}
