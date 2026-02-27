import { useEffect, useState } from "react";
import { useAuth } from "./../contexts/AuthContext";
import Sidebar from "./../components/dashboard/Sidebar";
import TopBar from "./../components/dashboard/TopBar";
import StatCard from "./../components/dashboard/StatCard";
import AnalyticsChart from "./../components/dashboard/AnalyticsChart";
import Reminders from "./../components/dashboard/Reminders";
import ProjectList from "./../components/dashboard/ProjectList";
import TeamCollaboration from "./../components/dashboard/TeamCollaboration";
import ProjectProgress from "./../components/dashboard/ProjectProgress";
import TimeTracker from "./../components/dashboard/TimeTracker";
import { Plus } from "lucide-react";

interface DashboardData {
  overview: { totalUsers: number; activeUsers: number; revenue: number; growth: number };
  users: { id: number; name: string; email: string; status: string; joinDate: string }[];
  analytics: { date: string; views: number; clicks: number; conversions: number }[];
  products: { id: number; name: string; price: number; sales: number; category: string }[];
}

const Dashboard = () => { 
  const { user } = useAuth();
  const [data, setData] = useState<DashboardData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://task-api-eight-flax.vercel.app/api/dashboard", {
          headers: user?.token ? { Authorization: `Bearer ${user.token}` } : {},
        });
        const json = await res.json();
        setData(json);
        console.log("json", json);
      } catch (err) {
        console.error("Failed to fetch dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [user]);

  if (loading) {
    return (
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <div className="flex-1 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-background">
    
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />
        <main className="flex-1 p-8 overflow-y-auto scrollbar-thin">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
              <p className="text-sm text-red-700 mt-1">Plan, prioritize, and accomplish your tasks with ease.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-primary px-5 py-2.5 rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">
                <Plus className="w-4 h-4" />
                Add Project
              </button>
              <button className="px-5 py-2.5 rounded-xl border border-border text-sm font-semibold text-foreground hover:bg-muted transition-colors">
                Import Data
              </button>
            </div>
          </div>


          {/* Stat Cards */}
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatCard title="Total Users" value={data?.overview?.totalUsers?.toLocaleString() ?? "0"} subtitle={`${data?.overview?.growth}% growth`} variant="primary" delay={0} />
            <StatCard title="Active Users" value={data?.overview?.activeUsers?.toLocaleString() ?? "0"} subtitle="Currently active" delay={50} />
            <StatCard title="Revenue" value={`$${data?.overview?.revenue?.toLocaleString() ?? "0"}`} subtitle="Total earnings" delay={100} />
            <StatCard title="Growth" value={`${data?.overview?.growth ?? 0}%`} subtitle="Increased from last month" delay={150} />
          </div>

          {/* Middle Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            <div className="lg:col-span-2">
              {data?.analytics && <AnalyticsChart data={data.analytics} />}
            </div>
            <div className="grid grid-rows-2 gap-4">
              <Reminders />
              <ProjectList />
            </div>
          </div>

          {/* Bottom Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="lg:col-span-1">
              {data?.users && <TeamCollaboration users={data.users} />}
            </div>
            <ProjectProgress />
            <TimeTracker />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
