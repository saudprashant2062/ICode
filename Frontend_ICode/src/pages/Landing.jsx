import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
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
<section className="max-w-4xl mx-auto p-8">
  <h2 className="text-3xl font-bold">
    Why ICode?
  </h2>
</section>
    </>
  );
}