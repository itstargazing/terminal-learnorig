import { useState } from "react";
import { 
  Cpu, 
  ChevronRight, 
  Terminal as TerminalIcon, 
  Code2, 
  Zap, 
  Layers, 
  MessageSquare, 
  Settings, 
  MoreVertical, 
  Play, 
  Save, 
  RotateCcw, 
  Sparkles, 
  Brain, 
  Target, 
  Flame 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

const modes = [
  { id: "eli5", label: "ELI5", icon: Zap, description: "Explain like I'm five. Simple analogies." },
  { id: "exam", label: "EXAM", icon: Target, description: "Focus on key concepts for technical interviews." },
  { id: "dev", label: "DEV", icon: Brain, description: "Deep dive into implementation and memory." },
  { id: "roast", label: "ROAST", icon: Flame, description: "Brutally honest feedback on your code quality." },
];

const codeSnippet = `fn main() {
    let mut s = String::from("hello");

    let r1 = &s;
    let r2 = &s;
    println!("{} and {}", r1, r2);

    let r3 = &mut s;
    println!("{}", r3);
}`;

export default function Explainer() {
  const [code, setCode] = useState(codeSnippet);
  const [activeMode, setActiveMode] = useState("dev");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [explanation, setExplanation] = useState<string | null>(null);

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setExplanation(null);
    setTimeout(() => {
      setIsAnalyzing(false);
      setExplanation(`
### Analysis Result: ${activeMode.toUpperCase()} Mode

The provided Rust snippet demonstrates the core principles of **Borrowing and Ownership**.

1. **Immutable Borrowing**: \`r1\` and \`r2\` are immutable references to \`s\`. Rust allows multiple immutable references simultaneously because they don't change the data.
2. **Reference Scope**: The scope of \`r1\` and \`r2\` ends after the first \`println!\` call because they are no longer used.
3. **Mutable Borrowing**: \`r3\` is a mutable reference. Rust only allows one mutable reference at a time, and it cannot coexist with immutable references. Since \`r1\` and \`r2\` are out of scope, \`r3\` is valid.

**System Impact**: Memory is allocated on the heap for the String "hello". The stack stores the pointer, length, and capacity.
      `);
    }, 2000);
  };

  return (
    <div className="h-[calc(100vh-128px)] flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold tracking-tighter mb-2">AI_EXPLAINER</h1>
          <p className="text-muted font-mono text-sm uppercase tracking-widest">System Utility: 0x8F2A // Neural Engine: Active</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-surface border border-border text-xs font-mono">
            <span className="text-muted">TOKENS:</span> 1,248 / 5,000
          </div>
          <button className="bg-ink text-bg px-6 py-2 text-sm font-mono hover:bg-white transition-colors">
            UPGRADE_PLAN
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
                input_snippet.rs
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
              placeholder="Paste your code here..."
            />
          </div>

          <div className="p-4 border-t border-border bg-surface flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button 
                onClick={handleAnalyze}
                disabled={isAnalyzing}
                className="flex items-center gap-2 bg-white text-black px-8 py-3 text-xs font-mono font-bold uppercase hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                <Sparkles size={16} />
                INITIALIZE_ANALYSIS
              </button>
              <button className="flex items-center gap-2 border border-border px-4 py-3 text-xs font-mono font-bold uppercase hover:bg-bg transition-colors">
                <Save size={16} />
                SAVE_SNIPPET
              </button>
              <button className="flex items-center gap-2 border border-border px-4 py-3 text-xs font-mono font-bold uppercase hover:bg-bg transition-colors">
                <RotateCcw size={16} />
                RESET
              </button>
            </div>
            <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
              Ready for processing
            </div>
          </div>
        </div>

        {/* Control & Result Panel */}
        <div className="w-[450px] flex flex-col gap-6 overflow-hidden">
          {/* Mode Selection */}
          <div className="bg-surface border border-border p-6 space-y-6">
            <h3 className="text-xs font-mono font-bold uppercase tracking-widest flex items-center gap-2">
              <Layers size={14} />
              Analysis_Mode
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {modes.map((mode) => (
                <button
                  key={mode.id}
                  onClick={() => setActiveMode(mode.id)}
                  className={cn(
                    "flex flex-col items-start gap-3 p-4 border transition-all text-left group relative overflow-hidden",
                    activeMode === mode.id ? "bg-ink text-bg border-ink" : "bg-bg border-border hover:border-ink"
                  )}
                >
                  <mode.icon size={20} className={cn(activeMode === mode.id ? "text-bg" : "text-muted group-hover:text-ink")} />
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest mb-1">{mode.label}</div>
                    <div className={cn("text-[9px] font-mono leading-tight", activeMode === mode.id ? "text-bg/70" : "text-muted")}>
                      {mode.description}
                    </div>
                  </div>
                  {activeMode === mode.id && (
                    <div className="absolute top-2 right-2">
                      <div className="w-1.5 h-1.5 bg-bg rounded-full animate-pulse" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Result Panel */}
          <div className="flex-1 bg-surface border border-border flex flex-col overflow-hidden">
            <div className="p-4 border-b border-border flex items-center justify-between bg-bg/30">
              <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest flex items-center gap-2">
                <MessageSquare size={14} />
                Analysis_Result
              </h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                <span className="text-[9px] font-mono text-muted uppercase">Engine_Active</span>
              </div>
            </div>
            
            <div className="flex-1 p-8 overflow-y-auto scrollbar-hide">
              <AnimatePresence mode="wait">
                {isAnalyzing ? (
                  <motion.div
                    key="analyzing"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full flex flex-col items-center justify-center gap-6 text-center"
                  >
                    <div className="relative">
                      <div className="w-16 h-16 border-2 border-border border-t-ink rounded-full animate-spin" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Cpu size={24} className="text-ink" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="text-xs font-mono font-bold uppercase tracking-widest animate-pulse">Processing_Snippet...</div>
                      <div className="text-[10px] font-mono text-muted uppercase tracking-widest">Allocating neural resources</div>
                    </div>
                  </motion.div>
                ) : explanation ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="prose prose-invert prose-sm max-w-none space-y-6"
                  >
                    <div className="whitespace-pre-wrap font-sans text-sm text-muted leading-relaxed">
                      {explanation}
                    </div>
                    <div className="pt-6 border-t border-border flex items-center justify-between">
                      <div className="flex gap-4">
                        <button className="text-[10px] font-mono text-muted hover:text-ink transition-colors uppercase">Copy_Text</button>
                        <button className="text-[10px] font-mono text-muted hover:text-ink transition-colors uppercase">Export_PDF</button>
                      </div>
                      <button className="text-[10px] font-mono text-ink hover:underline uppercase">Feedback</button>
                    </div>
                  </motion.div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center gap-4 text-center text-muted">
                    <TerminalIcon size={48} className="opacity-20" />
                    <div className="space-y-1">
                      <div className="text-xs font-mono font-bold uppercase tracking-widest">Waiting_For_Input</div>
                      <div className="text-[10px] font-mono uppercase tracking-widest">Initialize analysis to begin</div>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
