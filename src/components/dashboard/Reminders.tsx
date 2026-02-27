import { Video } from "lucide-react";

const Reminders = () => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 mt-10 lg:mt-0 animate-fade-in" style={{ animationDelay: "300ms" }}>
      <h3 className="text-lg font-semibold text-foreground mb-4">Reminders</h3>
      <div className="space-y-3">
        <div className="bg-muted rounded-xl p-4">
          <h4 className="font-semibold text-foreground text-sm">Meeting with Arc Company</h4>
          <p className="text-xs text-muted-foreground mt-1">Time : 02.00 pm - 04.00 pm</p>
          <button className="mt-3 flex items-center gap-2 bg-sidebar text-sidebar-primary text-xs font-semibold px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            <Video className="w-3.5 h-3.5" />
            Start Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reminders;
