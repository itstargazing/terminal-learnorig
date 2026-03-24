import { useState, useEffect } from "react";
import { 
  Eye, 
  Play, 
  Pause, 
  RotateCcw, 
  ChevronRight, 
  ChevronLeft, 
  Cpu, 
  Database, 
  Layers, 
  Terminal as TerminalIcon, 
  Code2, 
  Settings, 
  MoreVertical, 
  Activity, 
  Zap, 
  Shield 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const codeSnippet = `fn main() {
    let mut s = String::from("hello");

    let r1 = &s;
    let r2 = &s;
    println!("{} and {}", r1, r2);

    let r3 = &mut s;
    println!("{}", r3);
}`;

const executionSteps = [
  { line: 1, stack: ["main"], heap: [], description: "Entering main function." },
  { line: 2, stack: ["main"], heap: [{ addr: "0x55A2...40", val: '"hello"', size: "5 bytes" }], description: "Allocating String 'hello' on the heap." },
  { line: 4, stack: ["main"], heap: [{ addr: "0x55A2...40", val: '"hello"', size: "5 bytes" }], description: "Creating immutable reference r1 to s." },
  { line: 5, stack: ["main"], heap: [{ addr: "0x55A2...40", val: '"hello"', size: "5 bytes" }], description: "Creating immutable reference r2 to s." },
  { line: 6, stack: ["main"], heap: [{ addr: "0x55A2...40", val: '"hello"', size: "5 bytes" }], description: "Printing r1 and r2. References are used." },
  { line: 9, stack: ["main"], heap: [{ addr: "0x55A2...40", val: '"hello"', size: "5 bytes" }], description: "Creating mutable reference r3 to s. r1 and r2 are out of scope." },
  { line: 10, stack: ["main"], heap: [{ addr: "0x55A2...40", val: '"hello"', size: "5 bytes" }], description: "Printing r3. Mutable borrow is active." },
  { line: 11, stack: [], heap: [], description: "Main function returned. Memory deallocated." },
];

export default function Visualizer() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [code, setCode] = useState(codeSnippet);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentStep((prev) => (prev < executionSteps.length - 1 ? prev + 1 : 0));
      }, 2000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const step = executionSteps[currentStep];

  return (
    <div className="h-[calc(100vh-128px)] flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold tracking-tighter mb-2">LIVE_VISUALIZER</h1>
          <p className="text-muted font-mono text-sm uppercase tracking-widest">System Utility: 0x2B8 // Execution Engine: Active</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-surface border border-border text-xs font-mono">
            <span className="text-muted">STEP:</span> {currentStep + 1} / {executionSteps.length}
          </div>
          <button className="bg-ink text-bg px-6 py-2 text-sm font-mono hover:bg-white transition-colors">
            EXPORT_TRACE
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex-1 flex gap-6 min-h-0">
        {/* Editor Section */}
        <div className="flex-1 flex flex-col bg-surface border border-border overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-bg/50">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-[10px] font-mono text-ink">
                <Code2 size={14} />
                source.rs
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
            <div className="flex-1 p-4 relative overflow-y-auto scrollbar-hide">
              {code.split("\n").map((line, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "h-6 leading-6 px-2 transition-colors relative",
                    step.line === i + 1 && "bg-white/10 text-white font-bold"
                  )}
                >
                  {step.line === i + 1 && (
                    <motion.div 
                      layoutId="line-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-white" 
                    />
                  )}
                  {line}
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="p-4 border-t border-border bg-surface flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 bg-white text-black px-6 py-2 text-xs font-mono font-bold uppercase hover:bg-gray-200 transition-colors"
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                {isPlaying ? "PAUSE_EXECUTION" : "RESUME_EXECUTION"}
              </button>
              <button 
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                className="flex items-center gap-2 border border-border px-4 py-2 text-xs font-mono font-bold uppercase hover:bg-bg transition-colors"
              >
                <ChevronLeft size={14} />
                STEP_BACK
              </button>
              <button 
                onClick={() => setCurrentStep(Math.min(executionSteps.length - 1, currentStep + 1))}
                className="flex items-center gap-2 border border-border px-4 py-2 text-xs font-mono font-bold uppercase hover:bg-bg transition-colors"
              >
                STEP_FORWARD
                <ChevronRight size={14} />
              </button>
              <button 
                onClick={() => { setCurrentStep(0); setIsPlaying(false); }}
                className="flex items-center gap-2 border border-border px-4 py-2 text-xs font-mono font-bold uppercase hover:bg-bg transition-colors"
              >
                <RotateCcw size={14} />
                RESET
              </button>
            </div>
            <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
              Execution Speed: 1.0x
            </div>
          </div>
        </div>

        {/* System State Panel */}
        <div className="w-[450px] flex flex-col gap-6 overflow-hidden">
          {/* Stack & Heap */}
          <div className="bg-surface border border-border flex flex-col overflow-hidden">
            <div className="p-4 border-b border-border flex items-center justify-between bg-bg/30">
              <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest flex items-center gap-2">
                <Database size={14} />
                Memory_State
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-[9px] font-mono text-muted uppercase">Live_Mapping</span>
              </div>
            </div>
            
            <div className="p-6 space-y-8 overflow-y-auto scrollbar-hide">
              <div className="space-y-4">
                <div className="text-[10px] font-mono text-muted uppercase tracking-widest flex items-center gap-2">
                  <Layers size={12} />
                  Call_Stack
                </div>
                <div className="space-y-2">
                  {step.stack.length > 0 ? step.stack.map((frame, idx) => (
                    <motion.div 
                      key={frame}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-bg border border-border p-3 flex justify-between items-center"
                    >
                      <span className="text-[11px] font-mono text-ink uppercase">{frame}</span>
                      <span className="text-[10px] font-mono text-muted">0x7FFD...{idx * 8}</span>
                    </motion.div>
                  )) : (
                    <div className="text-[10px] font-mono text-muted italic p-3 border border-dashed border-border text-center">
                      Stack_Empty
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-[10px] font-mono text-muted uppercase tracking-widest flex items-center gap-2">
                  <Cpu size={12} />
                  Heap_Allocation
                </div>
                <div className="space-y-2">
                  {step.heap.length > 0 ? step.heap.map((item) => (
                    <motion.div 
                      key={item.addr}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-bg border border-border p-3 space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] font-mono text-muted">{item.addr}</span>
                        <span className="text-[9px] font-mono text-muted uppercase">{item.size}</span>
                      </div>
                      <div className="text-sm font-mono text-ink font-bold">{item.val}</div>
                    </motion.div>
                  )) : (
                    <div className="text-[10px] font-mono text-muted italic p-3 border border-dashed border-border text-center">
                      Heap_Empty
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Execution Log */}
          <div className="flex-1 bg-surface border border-border flex flex-col overflow-hidden">
            <div className="p-4 border-b border-border flex items-center justify-between bg-bg/30">
              <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest flex items-center gap-2">
                <TerminalIcon size={14} />
                Execution_Log
              </h3>
              <Activity size={14} className="text-muted" />
            </div>
            
            <div className="p-6 overflow-y-auto scrollbar-hide space-y-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4"
                >
                  <div className="p-4 bg-bg border-l-2 border-ink text-xs font-mono leading-relaxed text-muted">
                    <span className="text-ink font-bold uppercase block mb-2">Step_{currentStep + 1}:</span>
                    {step.description}
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-[10px] font-mono text-muted uppercase tracking-widest">System_Status</div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-bg border border-border p-3 space-y-1">
                        <div className="text-[9px] font-mono text-muted uppercase">Registers</div>
                        <div className="text-[10px] font-mono text-ink">RAX: 0x1</div>
                      </div>
                      <div className="bg-bg border border-border p-3 space-y-1">
                        <div className="text-[9px] font-mono text-muted uppercase">Safety</div>
                        <div className="text-[10px] font-mono text-green-500 flex items-center gap-1">
                          <Shield size={10} />
                          SECURE
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="p-4 border-t border-border bg-bg/50">
              <div className="flex items-center gap-2 text-[10px] font-mono text-muted uppercase">
                <Zap size={12} />
                Trace ID: 0x8F2A...E4
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
