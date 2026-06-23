import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
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
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.password) newErrors.password = "Password is required";
    else if (form.password.length < 6) newErrors.password = "Password must be at least 6 characters";
    if (form.password !== form.confirmPassword) newErrors.confirmPassword = "Passwords do not match";
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
          <div className="border border-green-500/30 bg-black p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white">Create Account</h2>
              <p className="text-gray-600 mt-1">Join the ICode community</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-2.5 bg-gray-800 border border-green-500/20 text-white placeholder-gray-600 focus:border-green-500 focus:outline-none transition-all duration-200"
                />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 bg-gray-800 border border-green-500/20 text-white placeholder-gray-600 focus:border-green-500 focus:outline-none transition-all duration-200"
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
                  placeholder="********"
                  className="w-full px-4 py-2.5 bg-gray-800 border border-green-500/20 text-white placeholder-gray-600 focus:border-green-500 focus:outline-none transition-all duration-200"
                />
                {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  placeholder="********"
                  className="w-full px-4 py-2.5 bg-gray-800 border border-green-500/20 text-white placeholder-gray-600 focus:border-green-500 focus:outline-none transition-all duration-200"
                />
                {errors.confirmPassword && <p className="text-red-400 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-green-500 text-black font-bold hover:bg-green-400 transition-all duration-200"
              >
                Create Account
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
              Already have an account?{' '}
              <Link to="/login" className="text-green-400 hover:underline">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
