export default function Section({ children, className = "" }) {
  return (
    <section className={`max-w-5xl mx-auto py-10 px-8 ${className}`}>
      {children}
    </section>
  );
}
