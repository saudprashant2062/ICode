export default function FeatureCard({ title, description }) {
  return (
    <div className="border p-4 rounded">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}