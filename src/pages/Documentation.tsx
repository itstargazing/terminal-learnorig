import { motion } from "motion/react";
import { 
  FileText, 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Book, 
  Terminal as TerminalIcon, 
  Cpu, 
  Database, 
  Network, 
  Shield, 
  Zap, 
  Globe, 
  Layers, 
  Settings, 
  ExternalLink, 
  Info, 
  AlertTriangle 
} from "lucide-react";
import { cn } from "../lib/utils";

const sidebarItems = [
  {
    title: "Getting Started",
    icon: Book,
    children: ["Introduction", "Quick Start", "Installation", "System Requirements"]
  },
  {
    title: "Core Concepts",
    icon: Cpu,
    children: ["Memory Management", "Concurrency", "Execution Flow", "Data Structures"]
  },
  {
    title: "API Reference",
    icon: Database,
    children: ["Standard Library", "System Calls", "Networking", "Graphics API"]
  },
  {
    title: "Security",
    icon: Shield,
    children: ["Sandboxing", "Encryption", "Authentication", "Vulnerability Analysis"]
  },
  {
    title: "Advanced Topics",
    icon: Zap,
    children: ["Kernel Design", "Compiler Theory", "Distributed Systems", "Performance Tuning"]
  }
];

export default function Documentation() {
  return (
    <div className="h-[calc(100vh-128px)] flex gap-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Sidebar: System Map */}
      <aside className="w-72 bg-surface border border-border flex flex-col overflow-hidden">
        <div className="p-6 border-b border-border">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest flex items-center gap-2">
              <Layers size={16} />
              System_Map
            </h3>
            <Settings size={14} className="text-muted" />
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={14} />
            <input 
              type="text" 
              placeholder="Search docs..." 
              className="w-full bg-bg border border-border rounded-none py-1.5 pl-9 pr-4 text-xs font-mono focus:outline-none focus:border-ink transition-colors"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-2 scrollbar-hide">
          {sidebarItems.map((item, idx) => (
            <div key={idx} className="space-y-1">
              <button className="w-full flex items-center justify-between px-3 py-2 text-xs font-mono font-bold uppercase tracking-widest text-muted hover:text-ink hover:bg-bg/50 transition-all group">
                <div className="flex items-center gap-3">
                  <item.icon size={14} className="group-hover:text-ink transition-colors" />
                  {item.title}
                </div>
                <ChevronDown size={14} />
              </button>
              <div className="pl-9 space-y-1">
                {item.children.map((child, cIdx) => (
                  <button 
                    key={cIdx} 
                    className={cn(
                      "w-full text-left px-3 py-1.5 text-xs font-mono text-muted hover:text-ink transition-colors relative",
                      child === "Memory Management" && "text-ink font-bold before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-1 before:bg-white"
                    )}
                  >
                    {child}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-border bg-bg/30">
          <div className="flex items-center justify-between text-[10px] font-mono text-muted uppercase tracking-widest mb-4">
            <span>Version</span>
            <span className="text-ink">v2.4.0-stable</span>
          </div>
          <button className="w-full flex items-center justify-center gap-2 border border-border px-4 py-2 text-[10px] font-mono font-bold uppercase hover:bg-bg transition-colors">
            <ExternalLink size={12} />
            OPEN_PDF_SPEC
          </button>
        </div>
      </aside>

      {/* Main Documentation Content */}
      <main className="flex-1 bg-surface border border-border overflow-y-auto scrollbar-hide">
        <div className="max-w-4xl mx-auto p-12 space-y-12">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-[10px] font-mono text-muted uppercase tracking-widest">
            <Globe size={12} />
            DOCS
            <ChevronRight size={12} />
            CORE_CONCEPTS
            <ChevronRight size={12} />
            <span className="text-ink">MEMORY_MANAGEMENT</span>
          </div>

          {/* Article Header */}
          <header className="space-y-6">
            <h1 className="text-5xl font-display font-bold tracking-tighter leading-none">Memory Management in Systems Programming.</h1>
            <div className="flex flex-wrap items-center gap-6 text-[10px] font-mono text-muted uppercase tracking-widest">
              <span className="flex items-center gap-2"><FileText size={12} /> 128kb Content</span>
              <span className="flex items-center gap-2"><Globe size={12} /> Public Access</span>
              <span className="flex items-center gap-2"><Settings size={12} /> Last Updated: 2026.03.15</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-invert max-w-none space-y-8">
            <p className="text-lg text-muted leading-relaxed">
              Memory management is the process of controlling and coordinating computer memory, 
              assigning portions called blocks to various running programs to optimize overall system performance. 
              It is one of the most critical aspects of systems programming.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-bg border border-border p-6 space-y-4">
                <h3 className="text-sm font-mono font-bold uppercase tracking-widest flex items-center gap-2 text-ink">
                  <Database size={16} />
                  Stack_Memory
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  The stack is a region of memory that stores temporary variables created by each function. 
                  It is managed automatically by the CPU and follows a Last-In-First-Out (LIFO) structure.
                </p>
                <ul className="text-[10px] font-mono text-muted space-y-1 list-disc pl-4">
                  <li>Automatic allocation/deallocation</li>
                  <li>Fast access speed</li>
                  <li>Fixed size (limited)</li>
                  <li>Local variable scope</li>
                </ul>
              </div>
              <div className="bg-bg border border-border p-6 space-y-4">
                <h3 className="text-sm font-mono font-bold uppercase tracking-widest flex items-center gap-2 text-ink">
                  <Layers size={16} />
                  Heap_Memory
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  The heap is a region of memory used for dynamic allocation. Unlike the stack, 
                  the heap is managed manually by the programmer or by a garbage collector.
                </p>
                <ul className="text-[10px] font-mono text-muted space-y-1 list-disc pl-4">
                  <li>Manual allocation/deallocation</li>
                  <li>Slower access speed</li>
                  <li>Dynamic size (flexible)</li>
                  <li>Global variable scope</li>
                </ul>
              </div>
            </div>

            <div className="bg-surface border border-border p-8 space-y-6">
              <div className="flex items-center gap-3 text-yellow-500">
                <AlertTriangle size={20} />
                <h4 className="text-xs font-mono font-bold uppercase tracking-widest">Security_Warning</h4>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Improper memory management can lead to severe security vulnerabilities, including 
                buffer overflows, use-after-free errors, and memory leaks. Always use safe 
                abstractions when possible.
              </p>
              <div className="flex gap-4">
                <button className="bg-white text-black px-6 py-2 text-[10px] font-mono font-bold uppercase hover:bg-gray-200 transition-colors">
                  VIEW_SECURITY_GUIDE
                </button>
                <button className="border border-border px-6 py-2 text-[10px] font-mono font-bold uppercase hover:bg-bg transition-colors">
                  DISMISS
                </button>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold tracking-tighter">The Ownership Model.</h3>
              <p className="text-sm text-muted leading-relaxed">
                Rust uses a unique ownership model to manage memory without a garbage collector. 
                This model is built on three main rules:
              </p>
              <div className="space-y-4">
                {[
                  "Each value in Rust has a variable that's called its owner.",
                  "There can only be one owner at a time.",
                  "When the owner goes out of scope, the value will be dropped."
                ].map((rule, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 border border-border bg-bg/50">
                    <div className="w-6 h-6 bg-surface border border-border flex items-center justify-center text-[10px] font-mono text-ink">
                      0{idx + 1}
                    </div>
                    <p className="text-xs text-muted leading-relaxed pt-1">{rule}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-bg border border-border p-6 font-mono text-sm leading-relaxed">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-border">
                <div className="flex items-center gap-2 text-muted">
                  <TerminalIcon size={14} />
                  EXAMPLE_CODE
                </div>
                <div className="text-[10px] text-muted uppercase">main.rs</div>
              </div>
              <div className="space-y-1">
                <div className="flex gap-4">
                  <span className="text-muted/30 select-none">01</span>
                  <span className="text-ink"><span className="text-muted">fn</span> <span className="text-white font-bold">main</span>() {"{"}</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted/30 select-none">02</span>
                  <span className="text-ink pl-4">  <span className="text-muted">let</span> s1 = String::<span className="text-muted">from</span>(<span className="text-muted">"hello"</span>);</span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted/30 select-none">03</span>
                  <span className="text-ink pl-4">  <span className="text-muted">let</span> s2 = s1; <span className="text-muted">// s1 is moved to s2</span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted/30 select-none">04</span>
                  <span className="text-ink pl-4">  <span className="text-muted">// println!("{}", s1); // This would cause a compile error</span></span>
                </div>
                <div className="flex gap-4">
                  <span className="text-muted/30 select-none">05</span>
                  <span className="text-ink">{"}"}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Article Footer */}
          <footer className="pt-12 border-t border-border flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-surface border border-border flex items-center justify-center">
                <Info size={18} className="text-muted" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-muted uppercase tracking-widest">Was this helpful?</div>
                <div className="flex gap-4 mt-1">
                  <button className="text-[10px] font-mono text-ink hover:underline">YES</button>
                  <button className="text-[10px] font-mono text-ink hover:underline">NO</button>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-[10px] font-mono text-muted hover:text-ink transition-colors">
                EDIT_ON_GITHUB <ExternalLink size={12} />
              </button>
              <button className="flex items-center gap-2 text-[10px] font-mono text-muted hover:text-ink transition-colors">
                SHARE_LINK <Globe size={12} />
              </button>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
