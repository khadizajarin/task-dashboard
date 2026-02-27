import { useAuth } from "./../../contexts/AuthContext";
import { Search, Mail, Bell } from "lucide-react";

const TopBar = () => {
  const { user } = useAuth();

  return (
    <header className="flex items-center justify-between px-8 py-5 bg-card border-b border-border">
      {/* Search */}
      <div className="relative flex-1 max-w-md">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <input
          type="text"
          placeholder="Search task"
          className="w-full pl-11 pr-16 py-2.5 rounded-xl bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all"
        />
        <kbd className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-md font-mono">⌘ F</kbd>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">
        <button className="p-2.5 rounded-xl hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
          <Mail className="w-5 h-5" />
        </button>
        <button className="relative p-2.5 rounded-xl hover:bg-muted transition-colors text-muted-foreground hover:text-foreground">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
        </button>
        <div className="flex items-center gap-3 ml-2 pl-4 border-l border-border">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
            {user?.email?.charAt(0).toUpperCase() || "U"}
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-foreground">Totok Michael</p>
            <p className="text-xs text-muted-foreground">{user?.email || "user@example.com"}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
