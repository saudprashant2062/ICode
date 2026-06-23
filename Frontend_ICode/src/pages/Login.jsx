import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!form.email) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  };

  return (
    <>
      <Navbar title="ICode" />
      <Section>
        <div className="max-w-md mx-auto mt-10">
          <div className="border border-green-500/30 rounded-2xl bg-black p-8 hover:shadow-[0_0_30px_rgba(0,255,65,0.1)] transition-all duration-300">
            <div className="text-center mb-8">
              <div className="w-14 h-14 rounded-xl border border-green-500/30 flex items-center justify-center text-green-400 text-2xl mx-auto mb-4">
                {'</>'}
              </div>
              <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
              <p className="text-gray-600 mt-1">Sign in to your ICode account</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 bg-gray-800 border border-green-500/20 rounded-xl text-white placeholder-gray-600 focus:border-green-500 focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,65,0.1)] transition-all duration-300"
                />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 bg-gray-800 border border-green-500/20 rounded-xl text-white placeholder-gray-600 focus:border-green-500 focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,65,0.1)] transition-all duration-300"
                />
                {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all duration-300"
              >
                Sign In
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
              Don&apos;t have an account?{' '}
              <Link to="/register" className="text-green-400 hover:underline">
                Register
              </Link>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
