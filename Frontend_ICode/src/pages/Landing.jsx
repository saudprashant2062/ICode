import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Section from "../components/Section";
export default function Landing() {
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
<div className="border p-4 rounded">
  <h3 className="font-bold text-xl">
    Write Code
  </h3>

  <p className="mt-2">
    Write code directly in your browser without any setup.
  </p>
</div>

    <div className="border p-4 rounded">
      Run Code
    </div>

    <div className="border p-4 rounded">
      Save Projects
    </div>
  </div>
</Section>
    </>
  );
}