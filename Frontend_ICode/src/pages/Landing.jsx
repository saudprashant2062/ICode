import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import FeatureCard from "../components/FeatureCard";

export default function Landing() {
  const features = [
    {
      title: "Write Code",
      description: "Write code directly in your browser without any setup.",
    },
    {
      title: "Run Code",
      description: "Run your code instantly without any configuration.",
    },
    {
      title: "Save Projects",
      description: "Save your code projects and access them from anywhere.",
    },
    {
      title: "Multiple Languages",
      description: "Supports JavaScript, Python, Java, C++, and more.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-800 bg-[radial-gradient(ellipse_at_center,rgba(61,220,132,0.03)_0%,transparent_60%)]">
        <Navbar title="ICode" />

        <main className="max-w-5xl mx-auto px-8 pt-14 pb-8 border-b border-green-500/10">
          <div className="space-y-5 max-w-4xl">
            <div className="inline-block px-5 py-1.5 border border-green-500/50 text-sm text-green-400 bg-green-500/5 rounded-sm">
              Browser-Based IDE
            </div>
            <h1 className="text-5xl font-bold text-white leading-tight tracking-tight">
              Code <span className="text-green-400">Anywhere</span>, Run <span className="text-green-400">Anywhere</span>
            </h1>
            <p className="text-lg max-w-2xl border-l-2 border-green-500/20 pl-4">
              Write, run, and save code directly from your browser no setup, no config, just pure coding.
            </p>
            <div className="flex gap-4">
              <Link
                to="/register"
                className="px-8 py-3 bg-green-500 text-black font-semibold hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-200"
              >
                Start Coding
              </Link>
              <Link
                to="/login"
                className="px-8 py-3 bg-black text-green-400 border border-green-500 font-semibold hover:bg-green-500/15 transition-all duration-200"
              >
                Sign In
              </Link>
            </div>
          </div>
        </main>

        <Section>
          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-green-400 border-b border-green-500/20 pb-2 inline-block">Why ICode?</h2>
            <p className="text-base max-w-2xl">
              ICode allows developers to write, run, and manage code projects
              directly from the browser without any setup
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </Section>

        <footer className="border-t border-green-500/15 py-5 px-8">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-1">
              <span className="text-green-400 font-bold">{'{'}</span>
              <span className="text-white font-mono font-bold">ICode</span>
              <span className="text-green-400 font-bold">{'}'}</span>
            </div>
            <p className="text-sm text-gray-600">&copy; {new Date().getFullYear()} ICode. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
