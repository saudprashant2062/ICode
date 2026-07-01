export default function FeatureCard({ title, description }) {
  return (
    <div className="border-2 border-[var(--clr-card-border)] p-5 bg-card shadow-[var(--clr-card-shadow)] hover:bg-green-500/5 hover:border-[var(--clr-card-border-hover)] transition-all duration-200">
      <h3 className="font-bold text-xl text-white">{title}</h3>
      <p className="text-gray-600 mt-1">{description}</p>
    </div>
  );
}
