import Navbar from "../components/Navbar";

export default function Login() {
  return (
    <>
      <Navbar title="ICode" />
      <main className="min-h-screen flex items-center justify-center bg-gray-800 px-4">
        <div className="w-full max-w-sm border border-green-500/15 bg-black p-8">
          <h1 className="text-3xl font-bold text-white mb-1">Welcome back</h1>
          <p className="text-gray-600 mb-6">Sign in to your account</p>
          <form className="flex flex-col gap-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-gray-800 border border-green-500/20 px-4 py-2.5 text-gray-700 placeholder-gray-600 focus:outline-none focus:border-green-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full bg-gray-800 border border-green-500/20 px-4 py-2.5 text-gray-700 placeholder-gray-600 focus:outline-none focus:border-green-400"
            />
            <button className="w-full bg-green-500 text-black font-bold py-2.5 hover:bg-green-400 transition-colors duration-200">
              Sign In
            </button>
          </form>
          <p className="text-center text-gray-600 mt-6 text-sm">
            Don't have an account?{" "}
            <a href="/register" className="text-green-400 hover:text-green-300 transition-colors">
              Register
            </a>
          </p>
        </div>
      </main>
    </>
  );
}
