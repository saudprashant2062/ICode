export default function FeatureCard({ title, description }) {
  return (
    <div className="border border-green-500/30 p-5 rounded-2xl bg-black hover:shadow-[0_0_20px_rgba(0,255,65,0.12)] hover:border-green-500 transition-all duration-300">
      <div className="w-10 h-10 rounded-lg border border-green-500/30 flex items-center justify-center text-green-400 text-lg mb-3">
        &lt;/&gt;
      </div>
      <h3 className="font-bold text-xl text-white">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  );
}