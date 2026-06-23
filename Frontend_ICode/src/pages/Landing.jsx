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
  ];
  return (
    <>
      <div className="min-h-screen bg-gray-800">
        <Navbar title="ICode" />
        <main className="max-w-5xl mx-auto px-8 pt-10 pb-0">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-block px-4 py-1 border border-green-500 rounded-full text-sm text-green-400 hover:shadow-[0_0_10px_rgba(0,255,65,0.2)] transition-all duration-300">
              Browser-Based IDE
            </div>
            <h1 className="text-4xl font-bold border border-green-500/30 text-white bg-black p-5 rounded-2xl hover:shadow-[0_0_20px_rgba(0,255,65,0.15)] hover:border-green-500 transition-all duration-300">
              Code Anywhere, Run Anywhere
            </h1>
            <p className="text-lg text-gray-600">
              Write, run, and save code directly from your browser
            </p>
            <Link
              to="/register"
              className="inline-block px-8 py-3 bg-black text-white border border-green-500 rounded-2xl font-semibold hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] hover:bg-green-500 transition-all duration-300"
            >
              Start Coding →
            </Link>
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
          <div className="grid grid-cols-3 gap-5 mt-6">
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}
