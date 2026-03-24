import { useState, useRef } from "react";
import { 
  ScanLine, 
  Upload, 
  Image as ImageIcon, 
  FileCode, 
  ChevronRight, 
  Terminal as TerminalIcon, 
  Code2, 
  Settings, 
  MoreVertical, 
  Play, 
  Save, 
  RotateCcw, 
  Sparkles, 
  Brain, 
  Target, 
  Flame, 
  X, 
  CheckCircle2, 
  AlertTriangle 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

export default function OCR() {
  const [isDragging, setIsDragging] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [extractedCode, setExtractedCode] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setSelectedImage(e.target?.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleProcess = () => {
    setIsProcessing(true);
    setExtractedCode(null);
    setTimeout(() => {
      setIsProcessing(false);
      setExtractedCode(`fn main() {
    let mut s = String::from("hello");

    let r1 = &s;
    let r2 = &s;
    println!("{} and {}", r1, r2);

    let r3 = &mut s;
    println!("{}", r3);
}`);
    }, 3000);
  };

  const handleReset = () => {
    setSelectedImage(null);
    setExtractedCode(null);
    setIsProcessing(false);
  };

  return (
    <div className="h-[calc(100vh-128px)] flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-display font-bold tracking-tighter mb-2">OCR_UTILITY</h1>
          <p className="text-muted font-mono text-sm uppercase tracking-widest">System Utility: 0x3C9 // Vision Engine: Active</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="px-4 py-2 bg-surface border border-border text-xs font-mono">
            <span className="text-muted">ACCURACY:</span> 98.4%
          </div>
          <button className="bg-ink text-bg px-6 py-2 text-sm font-mono hover:bg-white transition-colors">
            HISTORY
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <div className="flex-1 flex gap-6 min-h-0">
        {/* Upload Section */}
        <div className="flex-1 flex flex-col bg-surface border border-border overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-bg/50">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-[10px] font-mono text-ink">
                <ImageIcon size={14} />
                source_image.png
              </div>
              <div className="text-[10px] font-mono text-muted uppercase tracking-widest">Vision_Input</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-1.5 hover:bg-bg/50 text-muted hover:text-ink transition-colors"><Settings size={14} /></button>
              <button className="p-1.5 hover:bg-bg/50 text-muted hover:text-ink transition-colors"><MoreVertical size={14} /></button>
            </div>
          </div>
          
          <div className="flex-1 relative overflow-hidden flex items-center justify-center p-8 bg-bg/30">
            <AnimatePresence mode="wait">
              {!selectedImage ? (
                <motion.div
                  key="upload"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  onClick={() => fileInputRef.current?.click()}
                  className={cn(
                    "w-full h-full border-2 border-dashed transition-all flex flex-col items-center justify-center gap-6 cursor-pointer group",
                    isDragging ? "border-ink bg-surface" : "border-border hover:border-ink hover:bg-surface/50"
                  )}
                >
                  <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileSelect} 
                    className="hidden" 
                    accept="image/*" 
                  />
                  <div className="w-20 h-20 bg-bg border border-border flex items-center justify-center group-hover:border-ink transition-colors">
                    <Upload size={32} className="text-muted group-hover:text-ink transition-colors" />
                  </div>
                  <div className="text-center space-y-2">
                    <div className="text-sm font-mono font-bold uppercase tracking-widest">Drop_Image_Here</div>
                    <div className="text-[10px] font-mono text-muted uppercase tracking-widest">or click to browse local storage</div>
                  </div>
                  <div className="flex gap-4 text-[9px] font-mono text-muted uppercase">
                    <span>PNG</span>
                    <span>JPG</span>
                    <span>WEBP</span>
                    <span>MAX 10MB</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="preview"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative w-full h-full flex items-center justify-center"
                >
                  <img 
                    src={selectedImage} 
                    alt="Selected" 
                    className="max-w-full max-h-full object-contain border border-border shadow-2xl"
                  />
                  <button 
                    onClick={handleReset}
                    className="absolute top-4 right-4 p-2 bg-bg border border-border hover:bg-surface transition-colors"
                  >
                    <X size={20} />
                  </button>
                  
                  {isProcessing && (
                    <div className="absolute inset-0 bg-bg/40 backdrop-blur-sm flex items-center justify-center">
                      <div className="flex flex-col items-center gap-6">
                        <div className="relative">
                          <div className="w-20 h-20 border-2 border-border border-t-ink rounded-full animate-spin" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <ScanLine size={32} className="text-ink" />
                          </div>
                        </div>
                        <div className="space-y-2 text-center">
                          <div className="text-xs font-mono font-bold uppercase tracking-widest animate-pulse">Scanning_Pixels...</div>
                          <div className="text-[10px] font-mono text-muted uppercase tracking-widest">Neural OCR Engine Active</div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="p-4 border-t border-border bg-surface flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button 
                onClick={handleProcess}
                disabled={!selectedImage || isProcessing}
                className="flex items-center gap-2 bg-white text-black px-8 py-3 text-xs font-mono font-bold uppercase hover:bg-gray-200 transition-colors disabled:opacity-50"
              >
                <ScanLine size={16} />
                INITIALIZE_SCAN
              </button>
              <button 
                onClick={handleReset}
                className="flex items-center gap-2 border border-border px-4 py-3 text-xs font-mono font-bold uppercase hover:bg-bg transition-colors"
              >
                <RotateCcw size={16} />
                RESET
              </button>
            </div>
            <div className="text-[10px] font-mono text-muted uppercase tracking-widest">
              {selectedImage ? "Image Loaded" : "Waiting for input"}
            </div>
          </div>
        </div>

        {/* Result Section */}
        <div className="w-[500px] flex flex-col bg-surface border border-border overflow-hidden">
          <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-bg/50">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-[10px] font-mono text-ink">
                <FileCode size={14} />
                extracted_code.rs
              </div>
              <div className="text-[10px] font-mono text-muted uppercase tracking-widest">OCR_Output</div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-[9px] font-mono text-muted uppercase">Ready</span>
            </div>
          </div>
          
          <div className="flex-1 relative font-mono text-sm overflow-hidden flex">
            <div className="w-12 bg-bg/30 border-r border-border flex flex-col items-center py-4 text-muted select-none">
              {extractedCode ? extractedCode.split("\n").map((_, i) => (
                <div key={i} className="h-6 leading-6 text-[10px]">{i + 1}</div>
              )) : (
                <div className="h-6 leading-6 text-[10px]">1</div>
              )}
            </div>
            <div className="flex-1 p-4 overflow-y-auto scrollbar-hide">
              <AnimatePresence mode="wait">
                {extractedCode ? (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="whitespace-pre font-mono text-sm leading-6"
                  >
                    {extractedCode}
                  </motion.div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center gap-4 text-center text-muted">
                    <TerminalIcon size={48} className="opacity-20" />
                    <div className="space-y-1">
                      <div className="text-xs font-mono font-bold uppercase tracking-widest">Waiting_For_Scan</div>
                      <div className="text-[10px] font-mono uppercase tracking-widest">Initialize scan to extract code</div>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="p-4 border-t border-border bg-surface flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button 
                disabled={!extractedCode}
                className="flex items-center gap-2 bg-ink text-bg px-6 py-2 text-xs font-mono font-bold uppercase hover:bg-white transition-colors disabled:opacity-50"
              >
                <Save size={14} />
                SAVE_TO_LIBRARY
              </button>
              <button 
                disabled={!extractedCode}
                className="flex items-center gap-2 border border-border px-4 py-2 text-xs font-mono font-bold uppercase hover:bg-bg transition-colors disabled:opacity-50"
              >
                <Play size={14} />
                OPEN_IN_EDITOR
              </button>
            </div>
          </div>

          {/* Confidence Metrics */}
          <div className="p-6 border-t border-border bg-bg/30 space-y-4">
            <div className="text-[10px] font-mono text-muted uppercase tracking-widest flex items-center gap-2">
              <Brain size={12} />
              Confidence_Metrics
            </div>
            <div className="space-y-3">
              {[
                { label: "Syntax Recognition", value: 99, status: "EXCELLENT" },
                { label: "Character Clarity", value: 96, status: "GOOD" },
                { label: "Layout Analysis", value: 94, status: "GOOD" },
              ].map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-[9px] font-mono uppercase">
                    <span className="text-muted">{item.label}</span>
                    <span className="text-ink">{item.status} // {item.value}%</span>
                  </div>
                  <div className="w-full h-1 bg-border">
                    <div className="h-full bg-ink" style={{ width: `${item.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
