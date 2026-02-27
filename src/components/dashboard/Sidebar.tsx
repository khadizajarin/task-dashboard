import { useAuth } from "./../../contexts/AuthContext.tsx";
import { useNavigate} from "react-router-dom";
import {
  LayoutDashboard,
  ListTodo,
  Calendar,
  BarChart3,
  Users,
  Settings,
  HelpCircle,
  LogOut,
  CheckCircle2,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: ListTodo, label: "Tasks", path: "/dashboard", badge: "04" },
  { icon: Calendar, label: "Calendar", path: "/dashboard" },
  { icon: BarChart3, label: "Analytics", path: "/dashboard" },
  { icon: Users, label: "Team", path: "/dashboard" },
];

const generalItems = [
  { icon: Settings, label: "Settings", path: "/dashboard" },
  { icon: HelpCircle, label: "Help", path: "/dashboard" },
];

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <aside className="w-64 bg-sidebar min-h-screen flex flex-col p-6 animate-slide-in-left">
      {/* Logo */}
      <div className="flex items-center gap-3 mb-10">
        <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center">
          <CheckCircle2 className="w-5 h-5 text-primary-foreground" />
        </div>
        <span className="text-xl font-bold text-sidebar-primary">Donezo</span>
      </div>

      {/* Menu */}
      <div className="flex-1">
        <p className="text-xs font-semibold text-sidebar-muted uppercase tracking-wider mb-4">Menu</p>
        <nav className="space-y-1">
          {menuItems.map((item) => {
            const isActive = item.label === "Dashboard";
            return (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? "bg-sidebar-accent text-sidebar-accent-foreground"
                    : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.label}
                {item.badge && (
                  <span className="ml-auto bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}
                {isActive && (
                  <div className="absolute left-0 w-1 h-8 bg-primary rounded-r-full" />
                )}
              </button>
            );
          })}
        </nav>

        <p className="text-xs font-semibold text-sidebar-muted uppercase tracking-wider mt-8 mb-4">General</p>
        <nav className="space-y-1">
          {generalItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-all"
            >
              <item.icon className="w-5 h-5" />
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Logout */}
      <button
        onClick={handleLogout}
        className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-sidebar-foreground hover:bg-destructive/20 hover:text-destructive transition-all"
      >
        <LogOut className="w-5 h-5" />
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;
