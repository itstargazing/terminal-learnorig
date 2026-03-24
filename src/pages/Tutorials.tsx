import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  ChevronRight, 
  Clock, 
  Star, 
  Layers, 
  Lock, 
  CheckCircle2, 
  PlayCircle, 
  Search,
  Filter
} from "lucide-react";
import { cn } from "../lib/utils";

const levels = ["Beginner", "Intermediate", "Advanced", "Expert"];

const tutorials = [
  {
    id: "rust-memory",
    title: "Rust Memory Safety",
    description: "Master ownership, borrowing, and lifetimes in the Rust programming language.",
    level: "Intermediate",
    duration: "4.5h",
    rating: 4.9,
    lessons: 12,
    completed: true,
    image: "https://picsum.photos/seed/rust/800/400"
  },
  {
    id: "cpp-concurrency",
    title: "C++ Concurrency",
    description: "Deep dive into threads, mutexes, and atomic operations for high-performance systems.",
    level: "Advanced",
    duration: "6.2h",
    rating: 4.8,
    lessons: 15,
    completed: false,
    image: "https://picsum.photos/seed/cpp/800/400"
  },
  {
    id: "asm-x86",
    title: "x86-64 Assembly",
    description: "Learn to write and debug low-level code directly for the CPU architecture.",
    level: "Expert",
    duration: "10h",
    rating: 5.0,
    lessons: 24,
    completed: false,
    locked: true,
    image: "https://picsum.photos/seed/asm/800/400"
  },
  {
    id: "os-kernel",
    title: "OS Kernel Design",
    description: "Build a minimal operating system kernel from scratch using Rust.",
    level: "Expert",
    duration: "15h",
    rating: 4.9,
    lessons: 30,
    completed: false,
    locked: true,
    image: "https://picsum.photos/seed/os/800/400"
  },
  {
    id: "go-distributed",
    title: "Go Distributed Systems",
    description: "Architect scalable and resilient distributed systems using Go and gRPC.",
    level: "Intermediate",
    duration: "5.5h",
    rating: 4.7,
    lessons: 14,
    completed: false,
    image: "https://picsum.photos/seed/go/800/400"
  },
  {
    id: "vulkan-graphics",
    title: "Vulkan Graphics API",
    description: "Master the next-generation graphics API for high-performance rendering.",
    level: "Advanced",
    duration: "8.5h",
    rating: 4.8,
    lessons: 20,
    completed: false,
    image: "https://picsum.photos/seed/vulkan/800/400"
  }
];

export default function Tutorials() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-display font-bold tracking-tighter">TUTORIALS</h1>
          <p className="text-muted font-mono text-sm uppercase tracking-widest">System Modules: 42 Active // 128 Total</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
            <input 
              type="text" 
              placeholder="Filter modules..." 
              className="bg-surface border border-border rounded-none py-2 pl-10 pr-4 text-sm font-mono focus:outline-none focus:border-ink transition-colors w-64"
            />
          </div>
          <button className="flex items-center gap-2 border border-border px-4 py-2 text-sm font-mono hover:bg-surface transition-colors">
            <Filter size={16} />
            FILTER
          </button>
        </div>
      </header>

      {/* Levels Filter */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide border-b border-border">
        <button className="px-6 py-3 text-xs font-mono font-bold uppercase tracking-widest border-b-2 border-ink bg-surface">
          All_Modules
        </button>
        {levels.map((level) => (
          <button key={level} className="px-6 py-3 text-xs font-mono font-bold uppercase tracking-widest text-muted hover:text-ink transition-colors">
            {level}
          </button>
        ))}
      </div>

      {/* Tutorials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {tutorials.map((tutorial, idx) => (
          <motion.div
            key={tutorial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            className={cn(
              "group relative bg-surface border border-border flex flex-col overflow-hidden",
              tutorial.locked && "opacity-60"
            )}
          >
            {/* Image Header */}
            <div className="aspect-video relative overflow-hidden bg-bg">
              <img 
                src={tutorial.image} 
                alt={tutorial.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent opacity-60" />
              
              <div className="absolute top-4 left-4 flex gap-2">
                <span className={cn(
                  "px-2 py-1 text-[9px] font-mono font-bold uppercase tracking-widest",
                  tutorial.level === "Beginner" ? "bg-green-500 text-black" :
                  tutorial.level === "Intermediate" ? "bg-blue-500 text-white" :
                  tutorial.level === "Advanced" ? "bg-yellow-500 text-black" : "bg-red-500 text-white"
                )}>
                  {tutorial.level}
                </span>
                {tutorial.completed && (
                  <span className="bg-white text-black px-2 py-1 text-[9px] font-mono font-bold uppercase tracking-widest flex items-center gap-1">
                    <CheckCircle2 size={10} />
                    COMPLETED
                  </span>
                )}
              </div>

              {tutorial.locked && (
                <div className="absolute inset-0 flex items-center justify-center bg-bg/80 backdrop-blur-sm">
                  <div className="flex flex-col items-center gap-2 text-muted">
                    <Lock size={32} />
                    <span className="text-[10px] font-mono uppercase tracking-widest">Module_Locked</span>
                  </div>
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4 text-[10px] font-mono text-muted uppercase tracking-widest">
                  <span className="flex items-center gap-1"><Clock size={12} /> {tutorial.duration}</span>
                  <span className="flex items-center gap-1"><Layers size={12} /> {tutorial.lessons} Lessons</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-ink">
                  <Star size={12} className="fill-current" />
                  {tutorial.rating}
                </div>
              </div>

              <h3 className="text-xl font-display font-bold mb-3 group-hover:text-shadow-glow transition-all">{tutorial.title}</h3>
              <p className="text-sm text-muted leading-relaxed mb-8 flex-1">{tutorial.description}</p>

              <Link
                to={tutorial.locked ? "#" : `/tutorials/${tutorial.id}`}
                className={cn(
                  "flex items-center justify-between px-6 py-3 text-xs font-mono font-bold uppercase tracking-widest transition-all",
                  tutorial.locked 
                    ? "bg-border text-muted cursor-not-allowed" 
                    : "bg-ink text-bg hover:bg-white"
                )}
              >
                {tutorial.completed ? "REVISIT_MODULE" : tutorial.locked ? "PREREQUISITE_REQUIRED" : "INITIALIZE_LEARNING"}
                {!tutorial.locked && (tutorial.completed ? <CheckCircle2 size={16} /> : <PlayCircle size={16} />)}
              </Link>
            </div>

            {/* Hover Border Effect */}
            <div className="absolute inset-0 border-2 border-ink opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity" />
          </motion.div>
        ))}
      </div>

      {/* Pagination / Load More */}
      <div className="flex justify-center pt-8">
        <button className="flex items-center gap-3 border border-border px-12 py-4 text-sm font-mono hover:bg-surface transition-all group">
          LOAD_MORE_MODULES
          <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
}
