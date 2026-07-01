import { Link } from "react-router-dom";

const projects = [
  { id: 1, name: "my-app", language: "JavaScript", lastModified: "2 hours ago" },
  { id: 2, name: "api-server", language: "Python", lastModified: "1 day ago" },
  { id: 3, name: "landing-page", language: "HTML/CSS", lastModified: "3 days ago" },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-800">
      <div className="border-b px-6 py-3 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <span className="text-green-400 font-bold">{'{'}</span>
          <h1 className="text-2xl font-bold text-green-400 font-mono">ICode</h1>
          <span className="text-green-400 font-bold">{'}'}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">admin@icode.dev</span>
          <div className="w-8 h-8 bg-green-500/10 border border-green-500/30 flex items-center justify-center text-green-400 text-sm font-bold">
            A
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Dashboard</h2>
            <p className="text-gray-600 mt-1">Manage your projects</p>
          </div>
          <Link
            to="/editor"
            className="px-6 py-2.5 bg-green-500 text-black font-bold hover:bg-green-400 transition-all duration-200"
          >
            New Project
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map(({ id, name, language, lastModified }) => (
            <Link
              key={id}
              to="/editor"
              className="border border-[var(--clr-border-faint)] bg-card p-5 shadow-[var(--clr-card-shadow)] hover:bg-green-500/5 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-xs px-2 py-0.5 border border-green-500/20 text-green-400/80">
                  {language}
                </span>
              </div>
              <h3 className="font-bold text-lg text-white">{name}</h3>
              <p className="text-xs text-gray-600 mt-2">Modified {lastModified}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
