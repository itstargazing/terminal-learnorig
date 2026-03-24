import { motion } from "motion/react";
import { 
  Library, 
  Search, 
  Filter, 
  Code2, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Zap, 
  ChevronRight, 
  Star, 
  Clock, 
  Layers 
} from "lucide-react";
import { cn } from "../lib/utils";

const categories = ["All", "Systems", "Graphics", "Networking", "Security", "Algorithms"];

const snippets = [
  {
    id: "rust-arc-mutex",
    title: "Arc<Mutex<T>> Pattern",
    description: "Thread-safe shared state in Rust using atomic reference counting and mutual exclusion.",
    category: "Systems",
    language: "Rust",
    stars: 128,
    updated: "2d ago",
    complexity: "Intermediate"
  },
  {
    id: "cpp-simd-intrinsics",
    title: "SIMD Intrinsics",
    description: "Vectorized operations using AVX-512 for high-performance data processing in C++.",
    category: "Systems",
    language: "C++",
    stars: 85,
    updated: "5d ago",
    complexity: "Advanced"
  },
  {
    id: "vulkan-pipeline",
    title: "Vulkan Pipeline State",
    description: "Configuring the graphics pipeline for efficient rendering in Vulkan.",
    category: "Graphics",
    language: "C++",
    stars: 210,
    updated: "1w ago",
    complexity: "Advanced"
  },
  {
    id: "go-worker-pool",
    title: "Go Worker Pool",
    description: "Implementing a scalable worker pool pattern using channels and goroutines.",
    category: "Networking",
    language: "Go",
    stars: 156,
    updated: "3d ago",
    complexity: "Intermediate"
  },
  {
    id: "asm-stack-frame",
    title: "x86-64 Stack Frame",
    description: "Understanding function calls, stack frames, and calling conventions in assembly.",
    category: "Systems",
    language: "ASM",
    stars: 92,
    updated: "2w ago",
    complexity: "Expert"
  },
  {
    id: "security-buffer-overflow",
    title: "Buffer Overflow Exploit",
    description: "Analyzing and mitigating buffer overflow vulnerabilities in C programs.",
    category: "Security",
    language: "C",
    stars: 142,
    updated: "1d ago",
    complexity: "Advanced"
  }
];

export default function LibraryPage() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-display font-bold tracking-tighter">CODE_LIBRARY</h1>
          <p className="text-muted font-mono text-sm uppercase tracking-widest">System Assets: 1,248 Snippets // 42 Categories</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
            <input 
              type="text" 
              placeholder="Search library..." 
              className="bg-surface border border-border rounded-none py-2 pl-10 pr-4 text-sm font-mono focus:outline-none focus:border-ink transition-colors w-64"
            />
          </div>
          <button className="flex items-center gap-2 border border-border px-4 py-2 text-sm font-mono hover:bg-surface transition-colors">
            <Filter size={16} />
            FILTER
          </button>
        </div>
      </header>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide border-b border-border">
        {categories.map((category, idx) => (
          <button 
            key={category} 
            className={cn(
              "px-6 py-3 text-xs font-mono font-bold uppercase tracking-widest transition-all",
              idx === 0 ? "border-b-2 border-ink bg-surface text-ink" : "text-muted hover:text-ink"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Snippets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {snippets.map((snippet, idx) => (
          <motion.div
            key={snippet.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className="group bg-surface border border-border p-8 flex flex-col hover:border-ink transition-all relative overflow-hidden"
          >
            {/* Background Icon Decor */}
            <div className="absolute -top-4 -right-4 opacity-5 group-hover:opacity-10 transition-opacity">
              <Code2 size={120} />
            </div>

            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-bg border border-border flex items-center justify-center">
                  {snippet.category === "Systems" && <Cpu size={20} />}
                  {snippet.category === "Graphics" && <Layers size={20} />}
                  {snippet.category === "Networking" && <Network size={20} />}
                  {snippet.category === "Security" && <Shield size={20} />}
                  {snippet.category === "Algorithms" && <Zap size={20} />}
                </div>
                <div>
                  <div className="text-[10px] font-mono text-muted uppercase tracking-widest">{snippet.language}</div>
                  <div className="text-[10px] font-mono text-ink uppercase tracking-widest">{snippet.category}</div>
                </div>
              </div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono text-muted">
                <Star size={12} className="fill-current text-white" />
                {snippet.stars}
              </div>
            </div>

            <h3 className="text-xl font-display font-bold mb-3 relative z-10 group-hover:text-shadow-glow transition-all">{snippet.title}</h3>
            <p className="text-sm text-muted leading-relaxed mb-8 flex-1 relative z-10">{snippet.description}</p>

            <div className="flex items-center justify-between pt-6 border-t border-border relative z-10">
              <div className="flex items-center gap-4 text-[10px] font-mono text-muted uppercase tracking-widest">
                <span className="flex items-center gap-1"><Clock size={12} /> {snippet.updated}</span>
                <span className={cn(
                  "px-2 py-0.5 border",
                  snippet.complexity === "Intermediate" ? "border-blue-500 text-blue-500" :
                  snippet.complexity === "Advanced" ? "border-yellow-500 text-yellow-500" : "border-red-500 text-red-500"
                )}>
                  {snippet.complexity}
                </span>
              </div>
              <button className="p-2 hover:bg-bg border border-border transition-colors">
                <ChevronRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Section */}
      <section className="bg-surface border border-border p-12 relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
          <Library size={240} />
        </div>
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-bg border border-border rounded-full text-[10px] font-mono text-muted mb-6">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
            FEATURED_COLLECTION
          </div>
          <h2 className="text-4xl font-display font-bold mb-4 tracking-tighter">The Kernel Architect's Handbook.</h2>
          <p className="text-muted mb-8 leading-relaxed">
            A curated collection of snippets and patterns for building your own operating system. 
            From bootloaders to memory management and process scheduling.
          </p>
          <button className="bg-ink text-bg px-8 py-4 text-sm font-mono hover:bg-white transition-colors flex items-center gap-3">
            INITIALIZE_COLLECTION
            <ChevronRight size={18} />
          </button>
        </div>
      </section>
    </div>
  );
}
