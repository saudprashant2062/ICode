import { Link } from "react-router-dom";
import { useState } from "react";

const initialProjects = [
  { id: 1, name: "my-app", language: "JavaScript", lastModified: "2 hours ago" },
  { id: 2, name: "api-server", language: "Python", lastModified: "1 day ago" },
  { id: 3, name: "landing-page", language: "HTML/CSS", lastModified: "3 days ago" },
];

export default function Dashboard() {
  const [projects] = useState(initialProjects);

  return (
    <div className="min-h-screen bg-gray-800">
      <nav className="border-b border-green-500/15 px-6 py-3 flex justify-between items-center bg-gray-800/95 backdrop-blur-4">
        <div className="flex items-center gap-2">
          <span className="text-green-400 font-bold text-xl">{'{'}</span>
          <h1 className="text-2xl font-bold text-green-400 font-mono">ICode</h1>
          <span className="text-green-400 font-bold text-xl">{'}'}</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">admin@icode.dev</span>
          <div className="w-8 h-8 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center text-green-400 text-sm font-bold">
            A
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-white">Dashboard</h2>
            <p className="text-gray-600 mt-1">Manage your projects</p>
          </div>
          <Link
            to="/editor"
            className="px-6 py-2.5 bg-green-500 text-black font-bold rounded-xl hover:bg-green-400 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all duration-300"
          >
            + New Project
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <Link
              key={project.id}
              to="/editor"
              className="group border border-green-500/20 rounded-2xl bg-black p-5 hover:border-green-500 hover:shadow-[0_0_20px_rgba(0,255,65,0.1)] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-10 h-10 rounded-lg border border-green-500/30 flex items-center justify-center text-green-400 group-hover:border-green-400 group-hover:shadow-[0_0_10px_rgba(0,255,65,0.2)] transition-all duration-300">
                  {'</>'}
                </div>
                <span className="text-xs px-2 py-0.5 rounded-full border border-green-500/20 text-green-400">
                  {project.language}
                </span>
              </div>
              <h3 className="font-bold text-lg text-white group-hover:text-green-400 transition-colors">{project.name}</h3>
              <p className="text-xs text-gray-600 mt-2">Modified {project.lastModified}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
