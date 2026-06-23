import { Link } from "react-router-dom";
import { useState } from "react";

export default function Editor() {
  const [files] = useState([
    { name: "index.html", icon: "🌐" },
    { name: "style.css", icon: "🎨" },
    { name: "app.js", icon: "⚡" },
  ]);
  const [activeFile, setActiveFile] = useState("app.js");
  const [output, setOutput] = useState("> Console ready...\n");

  const runCode = () => {
    setOutput("> Running code...\n> Hello, World!\n> Process finished.\n");
  };

  return (
    <div className="h-screen flex flex-col bg-gray-800">
      <nav className="border-b border-green-500/15 px-4 py-2 flex items-center justify-between bg-gray-800/95 shrink-0">
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-green-400 hover:text-green-500 transition-colors">
            ← Dashboard
          </Link>
          <div className="flex items-center gap-2">
            <span className="text-green-400 font-bold">{'{'}</span>
            <h1 className="text-lg font-bold text-green-400 font-mono">ICode</h1>
            <span className="text-green-400 font-bold">{'}'}</span>
          </div>
        </div>
        <button
          onClick={runCode}
          className="px-5 py-1.5 bg-green-500 text-black font-bold rounded-xl text-sm hover:bg-green-400 hover:shadow-[0_0_15px_rgba(0,255,65,0.3)] transition-all duration-300"
        >
          ▶ Run
        </button>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        <aside className="w-56 border-r border-green-500/15 bg-black/30 flex flex-col shrink-0">
          <div className="px-4 py-3 border-b border-green-500/10 text-xs text-gray-600 uppercase tracking-wider font-bold">
            Files
          </div>
          {files.map((file) => (
            <button
              key={file.name}
              onClick={() => setActiveFile(file.name)}
              className={`flex items-center gap-2 px-4 py-2 text-sm text-left transition-all duration-200 ${
                activeFile === file.name
                  ? "bg-green-500/10 text-green-400 border-l-2 border-green-400"
                  : "text-gray-600 hover:text-gray-700 hover:bg-green-500/5"
              }`}
            >
              <span>{file.icon}</span>
              <span>{file.name}</span>
            </button>
          ))}
        </aside>

        <div className="flex-1 flex flex-col">
          <div className="flex-1 p-4 font-mono text-sm text-gray-700 leading-relaxed overflow-auto">
            <span className="text-green-400">const</span> <span className="text-white">greeting</span>{" "}
            <span className="text-gray-600">=</span> <span className="text-green-400/80">"Hello, World!"</span>
            <span className="text-gray-600">;</span>
            <br />
            <span className="text-gray-600">console</span>
            <span className="text-gray-600">.</span>
            <span className="text-green-400">log</span>
            <span className="text-gray-600">(</span>
            <span className="text-white">greeting</span>
            <span className="text-gray-600">);</span>
            <br />
            <span className="text-gray-600 mt-2 block border-t border-green-500/10 pt-2 text-xs">
              Line 3, Col 1
            </span>
          </div>

          <div className="h-40 border-t border-green-500/15 bg-black/50 flex flex-col">
            <div className="flex items-center justify-between px-4 py-1.5 border-b border-green-500/10">
              <span className="text-xs text-gray-600">Console</span>
              <button
                onClick={() => setOutput("> Console ready...\n")}
                className="text-xs text-gray-600 hover:text-gray-700 transition-colors"
              >
                Clear
              </button>
            </div>
            <pre className="flex-1 p-4 text-sm text-gray-700 overflow-auto font-mono">{output}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
