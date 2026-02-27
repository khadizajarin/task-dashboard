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
  Smartphone,
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
    <aside className="w-72 bg-sidebar h-full flex flex-col p-6 animate-slide-in-left">
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

        <p className="text-xs font-semibold text-white uppercase tracking-wider mt-8 mb-4">General</p>
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
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-sidebar-foreground hover:bg-destructive/20 hover:text-destructive transition-all"
            >
              <LogOut className="w-5 h-5" />
              Logout
            </button>
        </nav>
      </div>

       <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-emerald-950 via-emerald-900 to-emerald-800 p-6 text-white shadow-xl">

      {/* Background Decorative Glow */}
      <div className="absolute -top-16 -right-16 w-56 h-56 bg-emerald-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl" />

      {/* Content */}
      <div className="relative z-10 space-y-4">

        {/* Icon */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-700/60 backdrop-blur-md">
          <Smartphone className="w-5 h-5 text-emerald-200" />
        </div>

        {/* Text */}
        <div>
          <h3 className="text-lg font-semibold leading-tight">
            Download our <br /> Mobile App
          </h3>
          <p className="text-sm text-emerald-200 mt-1">
            Get easy access in another way
          </p>
        </div>

        {/* Button */}
        <button className="w-full bg-emerald-600 hover:bg-emerald-500 transition-colors duration-200 text-white py-2.5 rounded-xl font-medium shadow-md">
          Download
        </button>
      </div>
    </div>
    
    </aside>
  );
};

export default Sidebar;
