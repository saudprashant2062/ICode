import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import FeatureCard from "../components/FeatureCard";

const features = [
  { title: "Write Code", description: "Write code directly in your browser without any setup." },
  { title: "Run Code", description: "Run your code instantly without any configuration." },
  { title: "Save Projects", description: "Save your code projects and access them from anywhere." },
  { title: "Multiple Languages", description: "Supports JavaScript, Python, Java, C++, and more." },
];

const steps = [
  { step: "01", title: "Open Your Browser", description: "No downloads, no installs. Just open ICode and start coding instantly from any device." },
  { step: "02", title: "Write & Run Code", description: "Use our powerful editor with syntax highlighting, auto-complete, and instant execution." },
  { step: "03", title: "Save & Share", description: "Save your projects to the cloud and share them with anyone via a unique link." },
];

const languages = [
  "JavaScript", "TypeScript", "Python", "Java", "C++", "C#",
  "Go", "Rust", "Ruby", "PHP", "Swift", "Kotlin",
];

const stats = [
  { value: "10K+", label: "Active Users" },
  { value: "50K+", label: "Projects Created" },
  { value: "15+", label: "Languages" },
  { value: "99.9%", label: "Uptime" },
];

const year = new Date().getFullYear();

export default function Landing() {
  return (
    <div className="min-h-screen bg-gray-800 bg-[radial-gradient(ellipse_at_center,rgba(61,220,132,0.03)_0%,transparent_60%)]">
      <Navbar title="ICode" />

      <main className="max-w-5xl mx-auto px-8 pt-16 pb-10 border-b border-green-500/10">
        <div className="space-y-6 max-w-4xl">
          <div className="inline-block px-5 py-1.5 border border-green-500/50 text-sm text-green-400 bg-green-500/5 rounded-sm">
            Browser-Based IDE
          </div>
          <h1 className="text-6xl font-bold text-white leading-tight tracking-tight">
            Code <span className="text-green-400">Anywhere</span>, Run <span className="text-green-400">Anywhere</span>
          </h1>
          <p className="text-xl max-w-2xl border-l-2 border-green-500/20 pl-4">
            Write, run, and save code directly from your browser no setup, no config, just pure coding.
          </p>
          <div className="flex gap-5">
            <Link
              to="/register"
              className="px-10 py-4 bg-green-500 text-black font-semibold hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-200"
            >
              Start Coding
            </Link>
            <Link
              to="/login"
              className="px-10 py-4 bg-black text-green-400 border border-green-500 font-semibold hover:bg-green-500/15 transition-all duration-200"
            >
              Sign In
            </Link>
          </div>
        </div>
      </main>

      <Section>
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-green-400 border-b border-green-500/20 pb-2 inline-block">Why ICode?</h2>
          <p className="text-lg max-w-2xl">
            ICode allows developers to write, run, and manage code projects
            directly from the browser without any setup
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          {features.map(({ title, description }) => (
            <FeatureCard key={title} title={title} description={description} />
          ))}
        </div>
      </Section>

      <Section className="border-t border-green-500/10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-green-400 border-b border-green-500/20 pb-2 inline-block">How It Works</h2>
          <p className="text-lg max-w-2xl">
            Get started in three simple steps
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {steps.map(({ step, title, description }) => (
            <div key={step} className="relative pl-14">
              <span className="absolute left-0 top-0 text-5xl font-bold text-green-500/20 select-none">
                {step}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
              <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-green-500/10">
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-green-400 border-b border-green-500/20 pb-2 inline-block">Supported Languages</h2>
          <p className="text-lg max-w-2xl">
            Run code in your language of choice
          </p>
        </div>
        <div className="flex flex-wrap gap-3 mt-8">
          {languages.map((lang) => (
            <span
              key={lang}
              className="px-4 py-2 text-sm border border-green-500/20 text-green-400/80 bg-green-500/5 hover:bg-green-500/10 hover:border-green-500/40 transition-all duration-200"
            >
              {lang}
            </span>
          ))}
        </div>
      </Section>

      <Section className="border-t border-green-500/10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label }) => (
            <div key={label} className="text-center">
              <div className="text-4xl font-bold text-green-400">{value}</div>
              <div className="text-sm text-gray-600 mt-1">{label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="border-t border-green-500/10">
        <div className="border border-green-500/20 bg-green-500/5 p-10 text-center">
          <h2 className="text-3xl font-bold text-white mb-3">Ready to Start Coding?</h2>
          <p className="text-gray-600 mb-6 max-w-lg mx-auto">
            Join thousands of developers already using ICode. No credit card required.
          </p>
          <Link
            to="/register"
            className="inline-block px-10 py-4 bg-green-500 text-black font-semibold hover:bg-green-400 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-200"
          >
            Get Started Free
          </Link>
        </div>
      </Section>

      <footer className="border-t border-green-500/15 py-5 px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="text-green-400 font-bold">{'{'}</span>
            <span className="text-white font-mono font-bold">ICode</span>
            <span className="text-green-400 font-bold">{'}'}</span>
          </div>
          <p className="text-sm text-gray-600">&copy; {year} ICode. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
