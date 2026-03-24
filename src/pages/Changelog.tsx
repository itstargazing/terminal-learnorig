import { motion } from "motion/react";
import { 
  History, 
  ChevronRight, 
  Terminal as TerminalIcon, 
  Cpu, 
  Shield, 
  Zap, 
  Layers, 
  Globe, 
  Star, 
  Tag, 
  User, 
  GitCommit, 
  GitPullRequest, 
  GitMerge 
} from "lucide-react";
import { cn } from "../lib/utils";

const updates = [
  {
    version: "v2.4.0",
    date: "2026.03.15",
    title: "The Memory Safety Update",
    description: "Major overhaul of the Rust learning modules and introduction of the live memory visualizer.",
    type: "MAJOR",
    author: "0x1A4",
    changes: [
      { type: "added", text: "Interactive memory visualizer for Rust and C++." },
      { type: "added", text: "New module: 'Advanced Lifetime Patterns'." },
      { type: "improved", text: "Sandbox execution speed increased by 40%." },
      { type: "fixed", text: "Resolved memory leak in the Vulkan rendering backend." }
    ]
  },
  {
    version: "v2.3.5",
    date: "2026.02.28",
    title: "Security Patch & Optimization",
    description: "Critical security updates for the sandbox environment and minor UI improvements.",
    type: "PATCH",
    author: "0x2B8",
    changes: [
      { type: "fixed", text: "Patched potential sandbox escape vulnerability." },
      { type: "improved", text: "Optimized documentation search indexing." },
      { type: "added", text: "Support for dark mode in the code editor." }
    ]
  },
  {
    version: "v2.3.0",
    date: "2026.02.10",
    title: "Graphics API Expansion",
    description: "Introduction of the Vulkan and DirectX 12 documentation and tutorials.",
    type: "MINOR",
    author: "0x1A4",
    changes: [
      { type: "added", text: "Vulkan API reference and interactive examples." },
      { type: "added", text: "DirectX 12 pipeline visualization tool." },
      { type: "improved", text: "Enhanced code snippet library with categories." }
    ]
  },
  {
    version: "v2.2.0",
    date: "2026.01.20",
    title: "Distributed Systems Core",
    description: "New learning path for distributed systems and networking fundamentals.",
    type: "MINOR",
    author: "0x3C9",
    changes: [
      { type: "added", text: "Go Distributed Systems learning path." },
      { type: "added", text: "Network protocol visualizer (TCP/UDP/HTTP)." },
      { type: "fixed", text: "Minor bug fixes in the forum notification system." }
    ]
  }
];

export default function Changelog() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-display font-bold tracking-tighter">CHANGELOG</h1>
          <p className="text-muted font-mono text-sm uppercase tracking-widest">System History: 128 Releases // 1,248 Commits</p>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 border border-border px-4 py-2 text-sm font-mono hover:bg-surface transition-colors">
            <GitPullRequest size={16} />
            PULL_REQUESTS
          </button>
          <button className="flex items-center gap-2 bg-ink text-bg px-6 py-2 text-sm font-mono hover:bg-white transition-colors">
            SUBSCRIBE_UPDATES
          </button>
        </div>
      </header>

      {/* Timeline */}
      <div className="relative space-y-16 before:absolute before:left-8 before:top-4 before:bottom-4 before:w-px before:bg-border">
        {updates.map((update, idx) => (
          <motion.div
            key={update.version}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="relative pl-24 group"
          >
            {/* Timeline Dot */}
            <div className="absolute left-8 top-4 -translate-x-1/2 w-4 h-4 bg-bg border-2 border-border group-hover:border-ink transition-colors z-10 flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-ink opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Version Badge */}
            <div className="absolute left-0 top-3 text-[10px] font-mono font-bold text-muted uppercase tracking-widest -rotate-90 origin-left translate-x-4">
              {update.version}
            </div>

            {/* Content Card */}
            <div className="bg-surface border border-border p-8 hover:border-ink transition-all">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-4">
                  <span className={cn(
                    "px-2 py-0.5 text-[9px] font-mono font-bold uppercase tracking-widest",
                    update.type === "MAJOR" ? "bg-white text-black" :
                    update.type === "MINOR" ? "bg-blue-500 text-white" : "bg-border text-muted"
                  )}>
                    {update.type}
                  </span>
                  <h2 className="text-2xl font-display font-bold tracking-tighter">{update.title}</h2>
                </div>
                <div className="flex items-center gap-6 text-[10px] font-mono text-muted uppercase tracking-widest">
                  <span className="flex items-center gap-2"><History size={12} /> {update.date}</span>
                  <span className="flex items-center gap-2"><User size={12} /> {update.author}</span>
                </div>
              </div>

              <p className="text-sm text-muted leading-relaxed mb-8 max-w-2xl">{update.description}</p>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-ink flex items-center gap-2">
                    <GitCommit size={12} />
                    Changeset
                  </h3>
                  <div className="space-y-2">
                    {update.changes.map((change, cIdx) => (
                      <div key={cIdx} className="flex items-start gap-3 text-xs font-mono">
                        <span className={cn(
                          "uppercase text-[8px] px-1.5 py-0.5 flex-shrink-0 mt-0.5",
                          change.type === "added" ? "bg-green-500/20 text-green-500" :
                          change.type === "improved" ? "bg-blue-500/20 text-blue-500" :
                          change.type === "fixed" ? "bg-red-500/20 text-red-500" : "bg-border text-muted"
                        )}>
                          {change.type}
                        </span>
                        <span className="text-muted leading-relaxed">{change.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-ink flex items-center gap-2">
                    <Tag size={12} />
                    Metadata
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-bg border border-border p-3 space-y-1">
                      <div className="text-[9px] font-mono text-muted uppercase">Commits</div>
                      <div className="text-xs font-mono text-ink">42</div>
                    </div>
                    <div className="bg-bg border border-border p-3 space-y-1">
                      <div className="text-[9px] font-mono text-muted uppercase">Files</div>
                      <div className="text-xs font-mono text-ink">128</div>
                    </div>
                    <div className="bg-bg border border-border p-3 space-y-1">
                      <div className="text-[9px] font-mono text-muted uppercase">Tests</div>
                      <div className="text-xs font-mono text-green-500">PASSED</div>
                    </div>
                    <div className="bg-bg border border-border p-3 space-y-1">
                      <div className="text-[9px] font-mono text-muted uppercase">Size</div>
                      <div className="text-xs font-mono text-ink">+12.4MB</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <button className="text-[10px] font-mono text-muted hover:text-ink transition-colors flex items-center gap-2">
                    <GitMerge size={12} />
                    VIEW_COMMIT_HISTORY
                  </button>
                  <button className="text-[10px] font-mono text-muted hover:text-ink transition-colors flex items-center gap-2">
                    <Globe size={12} />
                    RELEASE_NOTES
                  </button>
                </div>
                <button className="p-2 hover:bg-bg border border-border transition-colors group-hover:border-ink">
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center pt-8">
        <button className="flex items-center gap-3 border border-border px-12 py-4 text-sm font-mono hover:bg-surface transition-all group">
          LOAD_OLDER_RELEASES
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
