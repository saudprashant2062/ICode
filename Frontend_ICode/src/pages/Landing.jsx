import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
import FeatureCard from "../components/FeatureCard";
export default function Landing() {
  
  const features = [
    {
      title: "Write Code",
      description: "Write code directly in your browser without any setup."
    },
    {
      title: "Run Code",
      description: "Run your code instantly without any configuration."
    },
    {
      title: "Save Projects",
      description: "Save your code projects and access them from anywhere."
    }
  ] 
  return (
    <>
      <Navbar title="ICode" />
      <main className="max-w-4xl mx-auto p-8 mt-32">

  <div className="space-y-6 max-w-2xl">
  <h1 className="text-5xl font-bold">
    Code Anywhere. Run Anywhere.
  </h1>
  <p className="text-lg">
  Write, run, and save code directly from your browser.
</p>
<Link
  to="/register"
  className="inline-block px-6 py-3 bg-black text-white rounded"
>
  Start Coding
</Link>
</div>
</main>
<Section>
  <h2 className="text-3xl font-bold">
    Why ICode?
  </h2>

  <p className="text-lg">
    ICode allows developers to write, run, and manage code projects directly from the browser without any setup.
  </p>

  <div className="grid grid-cols-3 gap-6 mt-8">
    {features.map((feature) => (
        <FeatureCard
        key={feature.title} 
        title={feature.title}
         description={feature.description} />

    ))}

  </div>
</Section>
    </>
  );
}

