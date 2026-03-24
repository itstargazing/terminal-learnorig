import { motion } from "motion/react";
import { 
  TrendingUp, 
  Clock, 
  Award, 
  Zap, 
  Terminal as TerminalIcon, 
  ChevronRight, 
  Activity, 
  Cpu, 
  Database, 
  Network 
} from "lucide-react";
import { cn } from "../lib/utils";

const stats = [
  { label: "Completion Rate", value: "84%", icon: TrendingUp, color: "text-white" },
  { label: "Learning Hours", value: "128.5", icon: Clock, color: "text-muted" },
  { label: "Achievements", value: "42", icon: Award, color: "text-muted" },
  { label: "Current Streak", value: "12 Days", icon: Zap, color: "text-white" },
];

const logs = [
  { time: "13:36:50", type: "INFO", message: "System initialized. Session 0x1A4 active." },
  { time: "13:34:12", type: "WARN", message: "Memory usage exceeding 80% in sandbox_02." },
  { time: "13:30:05", type: "SUCCESS", message: "Module 'Rust Memory Safety' completed with 98% score." },
  { time: "12:45:22", type: "INFO", message: "New documentation update available for 'Vulkan API'." },
  { time: "11:20:15", type: "ERROR", message: "Failed to compile 'main.cpp'. Syntax error at line 42." },
  { time: "10:05:00", type: "INFO", message: "Daily challenge 'Recursive Descent' unlocked." },
];

const learningMatrix = Array.from({ length: 52 }, (_, i) => 
  Array.from({ length: 7 }, (_, j) => Math.random() > 0.7 ? Math.floor(Math.random() * 4) + 1 : 0)
);

export default function Dashboard() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl font-display font-bold tracking-tighter mb-2">OVERVIEW</h1>
          <p className="text-muted font-mono text-sm uppercase tracking-widest">System Status: Optimal // User: dilara.caliskan615</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-surface border border-border text-xs font-mono">
            <span className="text-muted">UPTIME:</span> 12:42:05
          </div>
          <button className="bg-ink text-bg px-6 py-2 text-sm font-mono hover:bg-white transition-colors">
            RESUME_SESSION
          </button>
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-surface border border-border p-6 group hover:border-ink transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <stat.icon size={20} className="text-muted group-hover:text-ink transition-colors" />
              <div className="text-[10px] font-mono text-muted uppercase tracking-widest">Live_Data</div>
            </div>
            <div className={cn("text-3xl font-display font-bold mb-1", stat.color)}>{stat.value}</div>
            <div className="text-xs font-mono text-muted uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Learning Matrix */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-surface border border-border p-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest flex items-center gap-2">
                <Activity size={16} />
                Learning_Matrix
              </h3>
              <div className="flex items-center gap-4 text-[10px] font-mono text-muted uppercase">
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-border" /> Less
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 bg-white" /> More
                </div>
              </div>
            </div>
            
            <div className="flex gap-1.5 overflow-x-auto pb-4 scrollbar-hide">
              {learningMatrix.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5 flex-shrink-0">
                  {week.map((day, dIdx) => (
                    <div 
                      key={dIdx} 
                      className={cn(
                        "w-3 h-3 transition-colors",
                        day === 0 ? "bg-border/30" : 
                        day === 1 ? "bg-white/20" :
                        day === 2 ? "bg-white/40" :
                        day === 3 ? "bg-white/70" : "bg-white"
                      )}
                      title={`Activity Level: ${day}`}
                    />
                  ))}
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex justify-between text-[10px] font-mono text-muted uppercase tracking-widest">
              <span>Jan</span>
              <span>Mar</span>
              <span>May</span>
              <span>Jul</span>
              <span>Sep</span>
              <span>Nov</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface border border-border p-6">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                <Cpu size={14} />
                Resource_Allocation
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Rust", value: 75 },
                  { label: "C++", value: 42 },
                  { label: "Assembly", value: 18 },
                  { label: "Go", value: 30 },
                ].map((item, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between text-[10px] font-mono uppercase">
                      <span className="text-muted">{item.label}</span>
                      <span className="text-ink">{item.value}%</span>
                    </div>
                    <div className="w-full h-1 bg-border">
                      <div className="h-full bg-ink transition-all duration-1000" style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-surface border border-border p-6">
              <h3 className="text-xs font-mono font-bold uppercase tracking-widest mb-6 flex items-center gap-2">
                <Database size={14} />
                System_Milestones
              </h3>
              <div className="space-y-4">
                {[
                  { label: "Memory Master", date: "2026.03.15", status: "COMPLETED" },
                  { label: "Kernel Architect", date: "2026.04.01", status: "IN_PROGRESS" },
                  { label: "Network Ninja", date: "---", status: "LOCKED" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 border border-border bg-bg/50">
                    <div>
                      <div className="text-[10px] font-mono text-ink uppercase">{item.label}</div>
                      <div className="text-[9px] font-mono text-muted">{item.date}</div>
                    </div>
                    <div className={cn(
                      "text-[9px] font-mono px-2 py-0.5",
                      item.status === "COMPLETED" ? "bg-white text-black" : "text-muted border border-border"
                    )}>
                      {item.status}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* System Logs */}
        <div className="bg-surface border border-border flex flex-col h-full">
          <div className="p-6 border-b border-border flex items-center justify-between">
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest flex items-center gap-2">
              <TerminalIcon size={16} />
              System_Log
            </h3>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </div>
          <div className="p-6 font-mono text-[11px] space-y-4 overflow-y-auto max-h-[600px] flex-1 scrollbar-hide">
            {logs.map((log, idx) => (
              <div key={idx} className="flex gap-4 group">
                <span className="text-muted flex-shrink-0">[{log.time}]</span>
                <span className={cn(
                  "font-bold flex-shrink-0 w-12",
                  log.type === "ERROR" ? "text-red-500" :
                  log.type === "WARN" ? "text-yellow-500" :
                  log.type === "SUCCESS" ? "text-green-500" : "text-blue-500"
                )}>
                  {log.type}
                </span>
                <span className="text-muted group-hover:text-ink transition-colors">{log.message}</span>
              </div>
            ))}
            <div className="flex gap-4">
              <span className="text-muted">[{new Date().toLocaleTimeString()}]</span>
              <span className="text-ink animate-pulse">_</span>
            </div>
          </div>
          <div className="p-4 border-t border-border bg-bg/50">
            <div className="flex items-center gap-2 text-[10px] font-mono text-muted uppercase">
              <Network size={12} />
              Connected to node: 0x8F2A...E4
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
