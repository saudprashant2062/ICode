import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <Navbar title="ICode" />
      <main className="h-screen overflow-hidden flex items-center justify-center bg-gray-800 bg-[radial-gradient(ellipse_at_center,rgba(61,220,132,0.03)_0%,transparent_60%)] px-4">
        <div className="w-full max-w-sm border border-green-500/25 bg-black p-12 shadow-[0_0_20px_rgba(61,220,132,0.03)]">
          <h1 className="text-4xl font-bold text-white border-b border-green-500/20 pb-3">Create an account</h1>
          <p className="text-gray-400 mt-4 mb-8 border-l-2 border-green-500/15 pl-3">Get started with ICode</p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-gray-800 border border-green-500/25 px-4 py-3.5 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-800 border border-green-500/25 px-4 py-3.5 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-gray-800 border border-green-500/25 px-4 py-3.5 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-green-400 focus:ring-1 focus:ring-green-400"
            />
            <button className="w-full bg-green-500 text-black font-bold py-3.5 hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-200">
              Create Account
            </button>
          </form>
          <p className="text-center text-gray-400 mt-6 text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              Sign in
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}
