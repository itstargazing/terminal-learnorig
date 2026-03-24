import { ReactNode, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { 
  Terminal, 
  LayoutDashboard, 
  BookOpen, 
  Library, 
  FileText, 
  History, 
  MessageSquare, 
  Cpu, 
  Eye, 
  ScanLine,
  Menu,
  X,
  ChevronRight,
  Search,
  Bell,
  User
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "./lib/utils";

interface LayoutProps {
  children: ReactNode;
}

const navItems = [
  { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
  { name: "Tutorials", path: "/tutorials", icon: BookOpen },
  { name: "Library", path: "/library", icon: Library },
  { name: "Docs", path: "/docs", icon: FileText },
  { name: "Changelog", path: "/changelog", icon: History },
  { name: "Forum", path: "/forum", icon: MessageSquare },
];

const utilityItems = [
  { name: "Explainer", path: "/explainer", icon: Cpu },
  { name: "Visualizer", path: "/visualizer", icon: Eye },
  { name: "OCR", path: "/ocr", icon: ScanLine },
];

export function Layout({ children }: LayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLanding = location.pathname === "/";

  if (isLanding) return <>{children}</>;

  return (
    <div className="min-h-screen bg-bg text-ink selection:bg-white selection:text-black">
      <div className="grain" />
      
      {/* Top Navigation */}
      <header className={cn(
        "fixed top-0 right-0 z-50 transition-all duration-300 border-b border-border bg-bg/80 backdrop-blur-md",
        isSidebarOpen ? "left-64" : "left-20"
      )}>
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-surface rounded-md transition-colors"
            >
              {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
            <div className="flex items-center gap-2 text-muted text-sm font-mono">
              <span>SYSTEM</span>
              <ChevronRight size={14} />
              <span className="text-ink uppercase">{location.pathname.split("/")[1] || "ROOT"}</span>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="relative hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" size={16} />
              <input 
                type="text" 
                placeholder="Search system..." 
                className="bg-surface border border-border rounded-none py-1.5 pl-10 pr-4 text-sm font-mono focus:outline-none focus:border-ink transition-colors w-64"
              />
            </div>
            <button className="relative p-2 hover:bg-surface rounded-md transition-colors">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full border-2 border-bg" />
            </button>
            <div className="flex items-center gap-3 pl-4 border-l border-border">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-mono text-ink">USER_0x1A4</div>
                <div className="text-[10px] font-mono text-muted uppercase">Level 42</div>
              </div>
              <div className="w-8 h-8 bg-surface border border-border flex items-center justify-center">
                <User size={18} />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className={cn(
        "fixed top-0 left-0 z-50 h-screen bg-bg border-r border-border transition-all duration-300",
        isSidebarOpen ? "w-64" : "w-20"
      )}>
        <div className="flex items-center gap-3 h-16 px-6 border-b border-border">
          <div className="w-8 h-8 bg-ink text-bg flex items-center justify-center font-bold">T</div>
          {isSidebarOpen && (
            <span className="font-display font-bold tracking-tighter text-xl">TERMINAL_LEARN</span>
          )}
        </div>

        <nav className="p-4 space-y-8 overflow-y-auto h-[calc(100vh-64px)]">
          <div>
            <div className={cn(
              "text-[10px] font-mono text-muted uppercase tracking-widest mb-4 px-2",
              !isSidebarOpen && "text-center"
            )}>
              {isSidebarOpen ? "Main Navigation" : "NAV"}
            </div>
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 transition-all group relative",
                    location.pathname.startsWith(item.path) 
                      ? "bg-ink text-bg" 
                      : "text-muted hover:text-ink hover:bg-surface"
                  )}
                >
                  <item.icon size={20} />
                  {isSidebarOpen && <span className="text-sm font-medium">{item.name}</span>}
                  {!isSidebarOpen && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-ink text-bg text-xs font-mono opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                      {item.name}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className={cn(
              "text-[10px] font-mono text-muted uppercase tracking-widest mb-4 px-2",
              !isSidebarOpen && "text-center"
            )}>
              {isSidebarOpen ? "System Utilities" : "UTIL"}
            </div>
            <div className="space-y-1">
              {utilityItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 transition-all group relative",
                    location.pathname.startsWith(item.path) 
                      ? "bg-ink text-bg" 
                      : "text-muted hover:text-ink hover:bg-surface"
                  )}
                >
                  <item.icon size={20} />
                  {isSidebarOpen && <span className="text-sm font-medium">{item.name}</span>}
                  {!isSidebarOpen && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-ink text-bg text-xs font-mono opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap z-50">
                      {item.name}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </div>

          {isSidebarOpen && (
            <div className="pt-8">
              <div className="p-4 bg-surface border border-border">
                <div className="text-[10px] font-mono text-muted uppercase mb-2">System Status</div>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-muted">CPU</span>
                    <span className="text-ink">12%</span>
                  </div>
                  <div className="w-full h-1 bg-border">
                    <div className="h-full bg-ink w-[12%]" />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono">
                    <span className="text-muted">MEM</span>
                    <span className="text-ink">4.2GB</span>
                  </div>
                  <div className="w-full h-1 bg-border">
                    <div className="h-full bg-ink w-[42%]" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </aside>

      {/* Main Content */}
      <main className={cn(
        "transition-all duration-300 pt-16",
        isSidebarOpen ? "pl-64" : "pl-20"
      )}>
        <div className="p-8 max-w-[1600px] mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
