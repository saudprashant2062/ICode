import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Editor from "./pages/Editor";

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="text-center space-y-4">
        <div className="text-6xl text-green-400 font-bold">404</div>
        <h1 className="text-2xl text-white">Page Not Found</h1>
        <p className="text-gray-600">The page you&apos;re looking for doesn&apos;t exist.</p>
        <Link
          to="/"
          className="inline-block px-6 py-2.5 bg-black text-white border border-green-500 font-semibold hover:bg-green-500/15 hover:text-green-400 transition-all duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/editor" element={<Editor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
