import { Link, useLocation } from "react-router-dom";

export default function Navbar({ title }) {
    const location = useLocation();
  return (
    <nav className="border-b p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">
        {title}
      </h1>
<div className="flex gap-4">
  {location.pathname !== "/login" && (
    <Link
  to="/login"
  className={`px-4 py-2 border rounded ${
  location.pathname === "/login"
    ? "font-bold"
    : ""
}`}
>
  Login
</Link>
  )}

  {location.pathname !== "/register" && (
    <Link
  to="/register"
  className={`px-4 py-2 border rounded ${
  location.pathname === "/register"
    ? "font-bold"
    : ""
}`}
>
    Register
</Link>
  )}
</div>
    </nav>
  );
}