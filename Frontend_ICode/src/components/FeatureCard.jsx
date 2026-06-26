export default function FeatureCard({ title, description }) {
  return (
    <div className="border border-green-500/25 p-6 bg-black hover:bg-green-500/5 hover:border-green-500/50 transition-all duration-200">
      <h3 className="font-bold text-xl text-white">{title}</h3>
      <p className="text-gray-600 mt-2 leading-relaxed">{description}</p>
    </div>
  );
}
