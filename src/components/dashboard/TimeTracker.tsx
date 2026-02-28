import { Pause, Square } from "lucide-react";

const TimeTracker = () => {
  return (
    <div className="bg-sidebar rounded-2xl p-6 text-sidebar-primary h-full animate-fade-in" style={{ animationDelay: "500ms" }}>
      <h3 className="text-lg font-semibold mb-4">Time Tracker</h3>
      <p className="text-5xl font-bold tracking-tight font-mono">01:24:08</p>
      <div className="flex items-center gap-3 mt-6">
        <button className="w-10 h-10 rounded-full bg-sidebar-accent flex items-center justify-center hover:bg-sidebar-accent/80 transition-colors">
          <Pause className="w-4 h-4" />
        </button>
        <button className="w-10 h-10 rounded-full bg-destructive flex items-center justify-center hover:opacity-90 transition-opacity">
          <Square className="w-4 h-4 text-destructive-foreground" />
        </button>
      </div>
    </div>
  );
};

export default TimeTracker;
