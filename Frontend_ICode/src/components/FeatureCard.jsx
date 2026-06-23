export default function FeatureCard({ title, description }) {
  return (
    <div className="border p-4 rounded hover:shadow-lg  transition-shadow">
      <h3 className="font-bold text-xl mt-2">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}