import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      <Navbar title="ICode" />
      <main className="min-h-screen flex items-center justify-center bg-gray-800 px-4">
        <div className="w-full max-w-sm border border-green-500/15 bg-black p-8">
          <h1 className="text-3xl font-bold text-white mb-1">Create an account</h1>
          <p className="text-gray-400 mb-6 text-sm">Get started with ICode</p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="w-full bg-gray-800 border border-green-500/20 px-4 py-2.5 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-green-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-800 border border-green-500/20 px-4 py-2.5 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-green-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-gray-800 border border-green-500/20 px-4 py-2.5 text-gray-300 placeholder-gray-500 focus:outline-none focus:border-green-400"
            />
            <button className="w-full bg-green-500 text-black font-bold py-2.5 hover:bg-green-400 transition-colors duration-200">
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
