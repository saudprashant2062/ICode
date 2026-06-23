export default function FeatureCard({ title, description, icon = "</>", delay = 0 }) {
  return (
    <div
      className="group border border-green-500/30 p-5 rounded-2xl bg-black hover:shadow-[0_0_30px_rgba(0,255,65,0.15)] hover:border-green-500 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-10 h-10 rounded-lg border border-green-500/30 flex items-center justify-center text-green-400 text-lg mb-3 group-hover:border-green-400 group-hover:shadow-[0_0_10px_rgba(0,255,65,0.2)] transition-all duration-300">
        {icon}
      </div>
      <h3 className="font-bold text-xl text-white group-hover:text-green-400 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-300">{description}</p>
    </div>
  );
}
