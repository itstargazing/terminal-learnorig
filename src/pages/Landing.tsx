import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { 
  Terminal as TerminalIcon, 
  ChevronRight, 
  Cpu, 
  Code, 
  Zap, 
  Layers, 
  Shield, 
  Globe,
  ArrowRight
} from "lucide-react";
import { cn } from "../lib/utils";

const features = [
  {
    title: "System-Level Learning",
    description: "Understand the underlying architecture, memory management, and execution flow of your code.",
    icon: Cpu,
    color: "bg-white text-black"
  },
  {
    title: "Real-Time Execution",
    description: "Visualize the call stack, heap, and registers as your code runs in our sandboxed environment.",
    icon: Zap,
    color: "bg-surface border border-border"
  },
  {
    title: "Interactive Tutorials",
    description: "Step-by-step guides that challenge you to write, debug, and optimize code in real-time.",
    icon: Code,
    color: "bg-surface border border-border"
  },
  {
    title: "AI-Powered Explainer",
    description: "Get instant, deep-dive explanations for complex snippets using our custom LLM models.",
    icon: Layers,
    color: "bg-surface border border-border"
  }
];

export default function Landing() {
  return (
    <div className="min-h-screen bg-bg text-ink selection:bg-white selection:text-black overflow-x-hidden">
      <div className="grain" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-ink text-bg flex items-center justify-center font-bold">T</div>
            <span className="font-display font-bold tracking-tighter text-xl">TERMINAL_LEARN</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-mono text-muted">
            <Link to="/tutorials" className="hover:text-ink transition-colors">TUTORIALS</Link>
            <Link to="/library" className="hover:text-ink transition-colors">LIBRARY</Link>
            <Link to="/docs" className="hover:text-ink transition-colors">DOCS</Link>
            <Link to="/changelog" className="hover:text-ink transition-colors">CHANGELOG</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/dashboard" className="text-sm font-mono hover:text-ink transition-colors">LOGIN</Link>
            <Link to="/dashboard" className="bg-ink text-bg px-4 py-2 text-sm font-mono hover:bg-white transition-colors">GET_STARTED</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface border border-border rounded-full text-[10px] font-mono text-muted mb-6">
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                SYSTEM_STATUS: OPERATIONAL
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-bold tracking-tighter leading-[0.9] mb-8">
                CODE, <br />
                <span className="text-muted italic">DECODED.</span>
              </h1>
              <p className="text-lg text-muted max-w-md mb-10 leading-relaxed">
                A high-density technical learning platform designed for the modern engineer. 
                Master the machine, from syntax to system architecture.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/dashboard" 
                  className="group flex items-center gap-2 bg-ink text-bg px-8 py-4 text-sm font-mono hover:bg-white transition-all"
                >
                  INITIALIZE_SESSION
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/docs" 
                  className="flex items-center gap-2 border border-border px-8 py-4 text-sm font-mono hover:bg-surface transition-all"
                >
                  VIEW_DOCUMENTATION
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-white/5 blur-3xl rounded-full" />
              <div className="relative bg-surface border border-border p-1 shadow-2xl">
                <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-bg/50">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                    <div className="w-2.5 h-2.5 rounded-full bg-border" />
                  </div>
                  <div className="text-[10px] font-mono text-muted uppercase tracking-widest">main.rs — 128kb</div>
                  <div className="w-10" />
                </div>
                <div className="p-6 font-mono text-sm leading-relaxed overflow-hidden">
                  <div className="flex gap-4">
                    <div className="text-muted select-none text-right w-8">01</div>
                    <div className="text-ink"><span className="text-muted">use</span> std::io;</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-muted select-none text-right w-8">02</div>
                    <div className="text-ink"><span className="text-muted">use</span> std::process;</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-muted select-none text-right w-8">03</div>
                    <div className="text-ink"></div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-muted select-none text-right w-8">04</div>
                    <div className="text-ink"><span className="text-muted">fn</span> <span className="text-white font-bold">main</span>() {"{"}</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-muted select-none text-right w-8">05</div>
                    <div className="text-ink pl-4">  <span className="text-muted">let</span> mut buffer = String::<span className="text-muted">new</span>();</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-muted select-none text-right w-8">06</div>
                    <div className="text-ink pl-4">  io::stdin().read_line(&mut buffer).<span className="text-muted">unwrap</span>();</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-muted select-none text-right w-8">07</div>
                    <div className="text-ink pl-4">  <span className="text-muted">println!</span>(<span className="text-muted">"Executing: {"{}"}"</span>, buffer);</div>
                  </div>
                  <div className="flex gap-4">
                    <div className="text-muted select-none text-right w-8">08</div>
                    <div className="text-ink">{"}"}</div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center gap-2 text-[10px] text-muted mb-2">
                      <TerminalIcon size={12} />
                      CONSOLE_OUTPUT
                    </div>
                    <div className="text-xs text-muted">
                      <span className="text-white">$</span> cargo run --release<br />
                      <span className="text-white">Compiling</span> terminal_learn v0.1.0<br />
                      <span className="text-white">Finished</span> release [optimized] target(s) in 0.42s<br />
                      <span className="text-white">Running</span> `target/release/main`<br />
                      <span className="text-white italic">_</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
            {features.map((feature, idx) => (
              <div key={idx} className={cn("p-8 bg-bg group hover:bg-surface transition-colors", feature.color)}>
                <feature.icon size={24} className="mb-6" />
                <h3 className="text-lg font-display font-bold mb-3">{feature.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-24 px-6 border-t border-border bg-surface/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-bg border border-border p-10 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Globe size={200} />
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl font-display font-bold mb-4">Global Network of Engineers.</h2>
                <p className="text-muted max-w-md mb-8">
                  Join a community of 50,000+ developers mastering the stack. 
                  Share snippets, solve challenges, and build the future.
                </p>
                <div className="flex items-center gap-12">
                  <div>
                    <div className="text-3xl font-display font-bold">50K+</div>
                    <div className="text-[10px] font-mono text-muted uppercase">Active Users</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold">1.2M</div>
                    <div className="text-[10px] font-mono text-muted uppercase">Commits</div>
                  </div>
                  <div>
                    <div className="text-3xl font-display font-bold">99.9%</div>
                    <div className="text-[10px] font-mono text-muted uppercase">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-bg border border-border p-10 flex flex-col justify-between">
              <div>
                <Shield size={32} className="mb-6" />
                <h2 className="text-2xl font-display font-bold mb-4">Secure Sandbox.</h2>
                <p className="text-sm text-muted leading-relaxed">
                  Run untrusted code in a completely isolated environment. 
                  No risk, all reward.
                </p>
              </div>
              <Link to="/docs" className="text-xs font-mono text-ink flex items-center gap-2 hover:translate-x-1 transition-transform">
                LEARN_MORE <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 border-t border-border text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-8">
            READY TO <span className="italic text-muted">COMPILE?</span>
          </h2>
          <p className="text-lg text-muted mb-12">
            Start your journey into the depths of computer science today. 
            Free to start, impossible to master.
          </p>
          <Link 
            to="/dashboard" 
            className="inline-flex items-center gap-3 bg-ink text-bg px-12 py-5 text-lg font-mono hover:bg-white transition-all"
          >
            INITIALIZE_ACCOUNT
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-ink text-bg flex items-center justify-center font-bold text-xs">T</div>
            <span className="font-display font-bold tracking-tighter">TERMINAL_LEARN</span>
          </div>
          <div className="flex gap-8 text-[10px] font-mono text-muted uppercase tracking-widest">
            <a href="#" className="hover:text-ink transition-colors">Twitter</a>
            <a href="#" className="hover:text-ink transition-colors">GitHub</a>
            <a href="#" className="hover:text-ink transition-colors">Discord</a>
            <a href="#" className="hover:text-ink transition-colors">Privacy</a>
          </div>
          <div className="text-[10px] font-mono text-muted">
            © 2026 TERMINAL_SYSTEMS_INC. ALL_RIGHTS_RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
