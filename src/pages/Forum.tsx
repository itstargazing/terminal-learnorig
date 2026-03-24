import { motion } from "motion/react";
import { 
  MessageSquare, 
  Search, 
  Filter, 
  Plus, 
  ChevronUp, 
  ChevronDown, 
  MessageCircle, 
  Eye, 
  Clock, 
  User, 
  Tag, 
  CheckCircle2, 
  MoreVertical, 
  Star, 
  TrendingUp 
} from "lucide-react";
import { cn } from "../lib/utils";

const categories = ["All", "General", "Rust", "C++", "Assembly", "Graphics", "Networking", "Security"];

const discussions = [
  {
    id: "1",
    title: "Why does Rust's borrow checker complain about this mutable reference?",
    description: "I'm trying to create a mutable reference inside a loop, but I'm getting a lifetime error. Here's my code...",
    author: "0x1A4",
    category: "Rust",
    votes: 42,
    replies: 12,
    views: 128,
    time: "2h ago",
    solved: true,
    tags: ["ownership", "lifetimes", "borrowing"]
  },
  {
    id: "2",
    title: "Best practices for Vulkan pipeline state management?",
    description: "I'm seeing some performance issues when creating new pipelines. Should I be using a pipeline cache?",
    author: "0x2B8",
    category: "Graphics",
    votes: 28,
    replies: 8,
    views: 85,
    time: "5h ago",
    solved: false,
    tags: ["vulkan", "performance", "rendering"]
  },
  {
    id: "3",
    title: "Understanding x86-64 calling conventions on Linux vs Windows.",
    description: "I'm confused about which registers are used for arguments and which are callee-saved. Can someone clarify?",
    author: "0x3C9",
    category: "Assembly",
    votes: 56,
    replies: 24,
    views: 210,
    time: "1d ago",
    solved: true,
    tags: ["asm", "abi", "linux", "windows"]
  },
  {
    id: "4",
    title: "How to implement a lock-free queue in C++20?",
    description: "I'm looking for a robust implementation of a lock-free queue using atomic operations and memory barriers.",
    author: "0x4D1",
    category: "C++",
    votes: 15,
    replies: 5,
    views: 42,
    time: "3h ago",
    solved: false,
    tags: ["concurrency", "lock-free", "atomics"]
  }
];

export default function Forum() {
  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div className="space-y-2">
          <h1 className="text-4xl font-display font-bold tracking-tighter">FORUM</h1>
          <p className="text-muted font-mono text-sm uppercase tracking-widest">System Discussions: 1,248 Threads // 42 Active</p>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
            <input 
              type="text" 
              placeholder="Search forum..." 
              className="bg-surface border border-border rounded-none py-2 pl-10 pr-4 text-sm font-mono focus:outline-none focus:border-ink transition-colors w-64"
            />
          </div>
          <button className="flex items-center gap-2 bg-ink text-bg px-6 py-2 text-sm font-mono hover:bg-white transition-colors">
            <Plus size={16} />
            NEW_THREAD
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar: Categories & Stats */}
        <aside className="space-y-8">
          <div className="bg-surface border border-border p-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <Filter size={14} />
              Categories
            </h3>
            <div className="space-y-1">
              {categories.map((category, idx) => (
                <button 
                  key={category} 
                  className={cn(
                    "w-full flex items-center justify-between px-3 py-2 text-xs font-mono transition-all group",
                    idx === 0 ? "bg-ink text-bg" : "text-muted hover:text-ink hover:bg-bg/50"
                  )}
                >
                  {category}
                  <span className="text-[10px] opacity-50">{Math.floor(Math.random() * 100)}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-surface border border-border p-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <TrendingUp size={14} />
              Trending_Tags
            </h3>
            <div className="flex flex-wrap gap-2">
              {["rust", "memory", "concurrency", "vulkan", "asm", "security", "performance", "linux"].map((tag) => (
                <button key={tag} className="px-2 py-1 bg-bg border border-border text-[9px] font-mono text-muted uppercase hover:text-ink hover:border-ink transition-colors">
                  #{tag}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-surface border border-border p-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
              <Star size={14} />
              Top_Contributors
            </h3>
            <div className="space-y-4">
              {[
                { name: "0x1A4", points: 1248 },
                { name: "0x2B8", points: 856 },
                { name: "0x3C9", points: 420 },
              ].map((user, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-bg border border-border flex items-center justify-center text-[10px] font-mono">
                      {user.name[2]}
                    </div>
                    <div className="text-[10px] font-mono text-ink uppercase">{user.name}</div>
                  </div>
                  <div className="text-[10px] font-mono text-muted">{user.points} pts</div>
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Discussions List */}
        <div className="lg:col-span-3 space-y-6">
          {discussions.map((discussion, idx) => (
            <motion.div
              key={discussion.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-surface border border-border p-8 hover:border-ink transition-all group relative overflow-hidden"
            >
              <div className="flex gap-8">
                {/* Vote Controls */}
                <div className="flex flex-col items-center gap-2 pt-1">
                  <button className="p-1 hover:bg-bg border border-border text-muted hover:text-ink transition-colors">
                    <ChevronUp size={16} />
                  </button>
                  <span className="text-sm font-mono font-bold">{discussion.votes}</span>
                  <button className="p-1 hover:bg-bg border border-border text-muted hover:text-ink transition-colors">
                    <ChevronDown size={16} />
                  </button>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-[10px] font-mono text-muted uppercase tracking-widest">
                      <span className="text-ink font-bold">{discussion.category}</span>
                      <span className="flex items-center gap-1"><User size={12} /> {discussion.author}</span>
                      <span className="flex items-center gap-1"><Clock size={12} /> {discussion.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {discussion.solved && (
                        <div className="flex items-center gap-1 text-[9px] font-mono text-green-500 uppercase tracking-widest">
                          <CheckCircle2 size={12} />
                          SOLVED
                        </div>
                      )}
                      <button className="p-1.5 hover:bg-bg border border-border text-muted hover:text-ink transition-colors">
                        <MoreVertical size={14} />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-xl font-display font-bold group-hover:text-shadow-glow transition-all leading-tight">
                    {discussion.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed line-clamp-2">
                    {discussion.description}
                  </p>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex gap-2">
                      {discussion.tags.map((tag) => (
                        <span key={tag} className="px-2 py-0.5 bg-bg border border-border text-[9px] font-mono text-muted uppercase">
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-6 text-[10px] font-mono text-muted uppercase tracking-widest">
                      <span className="flex items-center gap-1.5"><MessageCircle size={14} /> {discussion.replies} REPLIES</span>
                      <span className="flex items-center gap-1.5"><Eye size={14} /> {discussion.views} VIEWS</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Pagination */}
          <div className="flex justify-center pt-8">
            <button className="flex items-center gap-3 border border-border px-12 py-4 text-sm font-mono hover:bg-surface transition-all group">
              LOAD_MORE_THREADS
              <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
