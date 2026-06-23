import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import FeatureCard from "../components/FeatureCard";

export default function Landing() {
  const features = [
    {
      title: "Write Code",
      description: "Write code directly in your browser without any setup.",
      icon: "✍",
    },
    {
      title: "Run Code",
      description: "Run your code instantly without any configuration.",
      icon: "▶",
    },
    {
      title: "Save Projects",
      description: "Save your code projects and access them from anywhere.",
      icon: "💾",
    },
    {
      title: "Multiple Languages",
      description: "Supports JavaScript, Python, Java, C++, and more.",
      icon: "🔤",
    },
    {
      title: "Real-time Collaboration",
      description: "Collaborate with your team in real-time on the same code.",
      icon: "👥",
    },
    {
      title: "Version Control",
      description: "Built-in git integration for version control.",
      icon: "🔀",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-800">
        <Navbar title="ICode" />

        <main className="max-w-5xl mx-auto px-8 pt-16 pb-0">
          <div className="space-y-6 max-w-3xl">
            <div className="inline-block px-4 py-1 border border-green-500 rounded-full text-sm text-green-400 hover:shadow-[0_0_10px_rgba(0,255,65,0.2)] transition-all duration-300 animate-fade-in-up">
              Browser-Based IDE
            </div>
            <h1 className="text-5xl font-bold text-white leading-tight animate-fade-in-up delay-100">
              Code <span className="text-green-400">Anywhere</span>,<br />
              Run <span className="text-green-400">Anywhere</span>
              <span className="text-green-400 animate-blink">_</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-xl animate-fade-in-up delay-200">
              Write, run, and save code directly from your browser — no setup, no config, just pure coding.
            </p>
            <div className="flex gap-4 animate-fade-in-up delay-300">
              <Link
                to="/register"
                className="px-8 py-3 bg-black text-white border border-green-500 rounded-2xl font-semibold hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] hover:bg-green-500 transition-all duration-300"
              >
                Start Coding →
              </Link>
              <Link
                to="/login"
                className="px-8 py-3 bg-transparent text-green-400 border border-green-500/50 rounded-2xl font-semibold hover:border-green-500 hover:shadow-[0_0_12px_rgba(0,255,65,0.2)] transition-all duration-300"
              >
                Sign In
              </Link>
            </div>
          </div>
        </main>

        <Section>
          <div className="space-y-3">
            <h2 className="text-3xl font-bold text-green-400">Why ICode?</h2>
            <p className="text-lg max-w-2xl">
              ICode allows developers to write, run, and manage code projects
              directly from the browser without any setup
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
            {features.map((feature, i) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                delay={0.1 * i}
              />
            ))}
          </div>
        </Section>

        <Section dark>
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-green-400">Ready to Start Coding?</h2>
            <p className="text-lg max-w-xl mx-auto">
              Join thousands of developers who use ICode every day
            </p>
            <Link
              to="/register"
              className="inline-block px-10 py-4 bg-black text-white border border-green-500 rounded-2xl font-semibold text-lg hover:shadow-[0_0_25px_rgba(0,255,65,0.4)] hover:bg-green-500 transition-all duration-300 animate-pulse-glow"
            >
              Get Started Free →
            </Link>
          </div>
        </Section>

        <footer className="border-t border-green-500/10 py-8 px-8">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
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
