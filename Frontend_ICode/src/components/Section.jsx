export default function Section({ children, className = "", dark = false }) {
  return (
    <section className={`max-w-5xl mx-auto py-12 px-8 ${dark ? 'bg-black/30 rounded-2xl my-8' : ''} ${className}`}>
      {children}
    </section>
  );
}
