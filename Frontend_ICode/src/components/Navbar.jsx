import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ title }) {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { to: "/login", label: "Login" },
    { to: "/register", label: "Register" },
  ];

  return (
    <nav className="border-b px-6 py-3 flex justify-between items-center relative z-50">
      <Link to="/" className="flex items-center gap-2 group">
        <span className="text-green-400 text-xl font-bold group-hover:shadow-[0_0_10px_rgba(0,255,65,0.3)] transition-all duration-300">
          {'{'}
        </span>
        <h1 className="text-2xl font-bold text-green-400 font-mono tracking-tight">{title}</h1>
        <span className="text-green-400 text-xl font-bold group-hover:shadow-[0_0_10px_rgba(0,255,65,0.3)] transition-all duration-300">
          {'}'}
        </span>
      </Link>

      <button
        className="md:hidden text-green-400 text-2xl focus:outline-none"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? '✕' : '☰'}
      </button>

      <div className="hidden md:flex gap-3">
        {links.map((link) =>
          location.pathname !== link.to && (
            <Link
              key={link.to}
              to={link.to}
              className="px-4 py-1.5 rounded-2xl bg-black text-white border-2 border-green-500 hover:shadow-[0_0_12px_rgba(0,255,65,0.3)] hover:bg-green-500 transition-all duration-300"
            >
              {link.label}
            </Link>
          )
        )}
      </div>

      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-800 border-b border-green-500/20 md:hidden flex flex-col items-center gap-3 py-4 px-6 animate-fade-in-up">
          {links.map((link) =>
            location.pathname !== link.to && (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="w-full text-center px-4 py-2 rounded-2xl bg-black text-white border-2 border-green-500 hover:shadow-[0_0_12px_rgba(0,255,65,0.3)] hover:bg-green-500 transition-all duration-300"
              >
                {link.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
}
