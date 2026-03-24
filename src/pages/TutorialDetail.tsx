import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Play, 
  Save, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Terminal as TerminalIcon, 
  Cpu, 
  Layers, 
  MessageSquare, 
  Eye, 
  Zap, 
  Settings,
  MoreVertical,
  Code2,
  FileText
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const lessons = [
  { id: 1, title: "Introduction to Ownership", completed: true },
  { id: 2, title: "Borrowing and References", completed: true },
  { id: 3, title: "Mutable Borrowing", completed: false, active: true },
  { id: 4, title: "Slices and Memory Layout", completed: false },
  { id: 5, title: "Lifetimes and Scopes", completed: false },
  { id: 6, title: "Smart Pointers", completed: false },
  { id: 7, title: "Interior Mutability", completed: false },
  { id: 8, title: "Reference Counting", completed: false },
];

const codeSnippet = `fn main() {
    let mut s = String::from("hello");

    let r1 = &s; // no problem
    let r2 = &s; // no problem
    println!("{} and {}", r1, r2);
    // variables r1 and r2 will not be used after this point

    let r3 = &mut s; // no problem
    println!("{}", r3);
}`;

export default function TutorialDetail() {
  const { id } = useParams();
  const [code, setCode] = useState(codeSnippet);
  const [activeTab, setActiveTab] = useState("explanation");
  const [isExecuting, setIsExecuting] = useState(false);
  const [output, setOutput] = useState<string[]>([]);

  const handleRun = () => {
    setIsExecuting(true);
    setOutput(["Compiling...", "Running...", "hello and hello", "hello", "Process finished with exit code 0"]);
    setTimeout(() => setIsExecuting(false), 1500);
  };

  return (
    <div className="h-[calc(100vh-128px)] flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/tutorials" className="p-2 hover:bg-surface border border-border transition-colors">
            <ChevronLeft size={20} />
          </Link>
          <div>
            <div className="text-[10px] font-mono text-muted uppercase tracking-widest mb-1">
              Module: Rust Memory Safety // Lesson 03
            </div>
            <h1 className="text-2xl font-display font-bold tracking-tighter">MUTABLE_BORROWING</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 bg-surface border border-border text-xs font-mono">
            <span className="text-muted">PROGRESS:</span> 37.5%
          </div>
          <button className="flex items-center gap-2 bg-ink text-bg px-6 py-2 text-sm font-mono hover:bg-white transition-colors">
            NEXT_LESSON
            <ChevronRight size={16} />
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex-1 flex gap-6 min-h-0">
        {/* Sidebar: Course Index */}
        <aside className="w-64 bg-surface border border-border flex flex-col overflow-hidden">
          <div className="p-4 border-b border-border flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold uppercase tracking-widest">Course_Index</span>
            <Layers size={14} className="text-muted" />
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-hide">
            {lessons.map((lesson) => (
              <button
                key={lesson.id}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 text-xs font-mono transition-all group",
                  lesson.active ? "bg-ink text-bg" : "text-muted hover:text-ink hover:bg-bg/50"
                )}
              >
                <div className={cn(
                  "w-5 h-5 flex items-center justify-center border",
                  lesson.completed ? "bg-white text-black border-white" : "border-border group-hover:border-ink"
                )}>
                  {lesson.completed ? <CheckCircle2 size={12} /> : lesson.id}
                </div>
                <span className="truncate">{lesson.title}</span>
              </button>
            ))}
          </div>
          <div className="p-4 border-t border-border bg-bg/30">
            <div className="text-[10px] font-mono text-muted uppercase mb-2">Completion Status</div>
            <div className="w-full h-1.5 bg-border">
              <div className="h-full bg-ink w-[37.5%]" />
            </div>
          </div>
        </aside>

        {/* Editor Section */}
        <div className="flex-1 flex flex-col bg-surface border border-border overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-bg/50">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-[10px] font-mono text-ink">
                <Code2 size={14} />
                main.rs
              </div>
              <div className="text-[10px] font-mono text-muted uppercase tracking-widest">UTF-8 // Rust v1.75</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1.5 hover:bg-bg/50 text-muted hover:text-ink transition-colors"><Settings size={14} /></button>
              <button className="p-1.5 hover:bg-bg/50 text-muted hover:text-ink transition-colors"><MoreVertical size={14} /></button>
            </div>
          </div>
          
          <div className="flex-1 relative font-mono text-sm overflow-hidden flex">
            <div className="w-12 bg-bg/30 border-r border-border flex flex-col items-center py-4 text-muted select-none">
              {code.split("\n").map((_, i) => (
                <div key={i} className="h-6 leading-6 text-[10px]">{i + 1}</div>
              ))}
            </div>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="flex-1 bg-transparent p-4 focus:outline-none resize-none leading-6 scrollbar-hide"
              spellCheck={false}
            />
          </div>

          {/* Console Output */}
          <div className="h-40 border-t border-border bg-bg/80 flex flex-col">
            <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-surface">
              <div className="flex items-center gap-2 text-[10px] font-mono text-muted uppercase tracking-widest">
                <TerminalIcon size={12} />
                Console_Output
              </div>
              <button 
                onClick={() => setOutput([])}
                className="text-[10px] font-mono text-muted hover:text-ink uppercase"
              >
                Clear
              </button>
            </div>
            <div className="flex-1 p-4 font-mono text-xs overflow-y-auto scrollbar-hide space-y-1">
              {output.map((line, i) => (
                <div key={i} className={cn(
                  "flex gap-4",
                  line.includes("error") ? "text-red-500" : 
                  line.includes("Compiling") ? "text-blue-500" : "text-muted"
                )}>
                  <span className="text-muted/30 select-none">{i + 1}</span>
                  <span>{line}</span>
                </div>
              ))}
              {isExecuting && (
                <div className="flex gap-4 text-ink">
                  <span className="text-muted/30 select-none">{output.length + 1}</span>
                  <span className="animate-pulse">_</span>
                </div>
              )}
            </div>
          </div>

          {/* Editor Actions */}
          <div className="p-4 border-t border-border bg-surface flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button 
                onClick={handleRun}
                disabled={isExecuting}
                className="flex items-center gap-2 bg-white text-black px-6 py-2 text-xs font-mono font-bold uppercase hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                <Play size={14} />
                EXECUTE_CODE
              </button>
              <button className="flex items-center gap-2 border border-border px-4 py-2 text-xs font-mono font-bold uppercase hover:bg-bg transition-colors">
                <Save size={14} />
                SAVE
              </button>
              <button className="flex items-center gap-2 border border-border px-4 py-2 text-xs font-mono font-bold uppercase hover:bg-bg transition-colors">
                <RotateCcw size={14} />
                RESET
              </button>
            </div>
            <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
              Last saved: 13:36:50
            </div>
          </div>
        </div>

        {/* Info Panel */}
        <div className="w-96 flex flex-col bg-surface border border-border overflow-hidden">
          <div className="flex border-b border-border">
            {[
              { id: "explanation", label: "Explanation", icon: FileText },
              { id: "visualizer", label: "Visualizer", icon: Eye },
              { id: "chat", label: "AI Chat", icon: MessageSquare },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "flex-1 flex items-center justify-center gap-2 py-3 text-[10px] font-mono font-bold uppercase tracking-widest transition-all",
                  activeTab === tab.id ? "bg-ink text-bg" : "text-muted hover:text-ink hover:bg-bg/50"
                )}
              >
                <tab.icon size={14} />
                {tab.label}
              </button>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto p-6 scrollbar-hide">
            <AnimatePresence mode="wait">
              {activeTab === "explanation" && (
                <motion.div
                  key="explanation"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-6"
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-display font-bold">Understanding Mutable Borrowing</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      In Rust, you can have either one mutable reference or any number of immutable references 
                      to a particular piece of data in a particular scope.
                    </p>
                    <div className="p-4 bg-bg border-l-2 border-ink text-xs font-mono leading-relaxed">
                      <span className="text-ink font-bold">RULE:</span> You cannot have a mutable reference while 
                      you have an immutable one to the same value.
                    </div>
                    <p className="text-sm text-muted leading-relaxed">
                      This restriction allows for mutation but in a very controlled fashion. It's something that 
                      new Rustaceans struggle with, but it's the core of how Rust prevents data races at compile time.
                    </p>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-border">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-widest">Challenge</h4>
                    <p className="text-sm text-muted leading-relaxed">
                      Modify the code to create a mutable reference <code className="bg-bg px-1 text-ink">r3</code> 
                      after the immutable references <code className="bg-bg px-1 text-ink">r1</code> and 
                      <code className="bg-bg px-1 text-ink">r2</code> have finished their work.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] font-mono text-green-500">
                      <Zap size={12} />
                      TIP: References' scope starts from where they are introduced and continues through the last time they are used.
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "visualizer" && (
                <motion.div
                  key="visualizer"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="space-y-8"
                >
                  <div className="space-y-4">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-2">
                      <Cpu size={14} />
                      Memory_Layout
                    </h3>
                    <div className="space-y-2">
                      <div className="text-[10px] font-mono text-muted uppercase">Stack (main)</div>
                      <div className="border border-border p-4 bg-bg/50 space-y-3">
                        <div className="flex justify-between items-center text-[11px] font-mono">
                          <span className="text-muted">0x7FFD...01</span>
                          <span className="text-ink">s: String</span>
                          <span className="text-muted italic">Owner</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px] font-mono">
                          <span className="text-muted">0x7FFD...08</span>
                          <span className="text-ink">r1: &String</span>
                          <span className="text-blue-500 italic">Borrow</span>
                        </div>
                        <div className="flex justify-between items-center text-[11px] font-mono">
                          <span className="text-muted">0x7FFD...10</span>
                          <span className="text-ink">r2: &String</span>
                          <span className="text-blue-500 italic">Borrow</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-[10px] font-mono text-muted uppercase">Heap</div>
                      <div className="border border-border p-4 bg-bg/50">
                        <div className="flex justify-between items-center text-[11px] font-mono">
                          <span className="text-muted">0x55A2...40</span>
                          <span className="text-ink">"hello"</span>
                          <span className="text-muted italic">5 bytes</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-bg border border-border text-[10px] font-mono text-muted leading-relaxed">
                    <div className="flex items-center gap-2 text-ink mb-2">
                      <Eye size={12} />
                      LIFETIME_ANALYSIS
                    </div>
                    r1 and r2 are valid from creation until the println! call. 
                    r3 is created after their last use, satisfying the borrow checker.
                  </div>
                </motion.div>
              )}

              {activeTab === "chat" && (
                <motion.div
                  key="chat"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="flex flex-col h-full"
                >
                  <div className="flex-1 space-y-4 mb-4">
                    <div className="bg-bg border border-border p-3 text-xs leading-relaxed">
                      <div className="text-[9px] font-mono text-muted uppercase mb-1">System_AI</div>
                      How can I help you understand mutable borrowing in this lesson?
                    </div>
                    <div className="bg-surface border border-border p-3 text-xs leading-relaxed self-end ml-8">
                      <div className="text-[9px] font-mono text-muted uppercase mb-1">User_0x1A4</div>
                      Why can't I have r1 and r3 at the same time?
                    </div>
                    <div className="bg-bg border border-border p-3 text-xs leading-relaxed">
                      <div className="text-[9px] font-mono text-muted uppercase mb-1">System_AI</div>
                      If you had an immutable reference (r1) and a mutable one (r3) simultaneously, 
                      r1 could be reading data that r3 is currently changing. This leads to 
                      unpredictable behavior and data races.
                    </div>
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Ask a question..." 
                      className="w-full bg-bg border border-border px-4 py-3 text-xs font-mono focus:outline-none focus:border-ink"
                    />
                    <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-surface text-muted hover:text-ink transition-colors">
                      <ChevronRight size={16} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
