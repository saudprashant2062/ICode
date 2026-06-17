export default function Navbar({ title }) {
  return (
    <nav className="border-b p-4">
      <h1 className="text-2xl font-bold">
  {title}
</h1>
    </nav>
  );
}