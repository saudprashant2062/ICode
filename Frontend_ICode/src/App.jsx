import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeProvider";

const Landing = lazy(() => import("./pages/Landing"));
const Login = lazy(() => import("./pages/Login"));
const Register = lazy(() => import("./pages/Register"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Editor = lazy(() => import("./pages/Editor"));

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-800">
      <div className="text-center space-y-4">
        <div className="text-6xl text-green-400 font-bold">404</div>
        <h1 className="text-2xl text-white">Page Not Found</h1>
        <p className="text-gray-600">The page you're looking for doesn't exist.</p>
        <Link
          to="/"
          className="inline-block px-6 py-2.5 bg-black text-gray-100 border border-green-500 font-semibold hover:bg-green-500/15 hover:text-green-400 transition-all duration-200"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Suspense fallback={<div className="min-h-screen bg-gray-800" />}>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/editor" element={<Editor />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
