export default function Section({ children, className = "" }) {
  return (
    <section className={`max-w-5xl mx-auto py-8 px-8 ${className}`}>
      {children}
    </section>
  );
}
