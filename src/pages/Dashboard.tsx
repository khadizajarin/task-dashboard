import { useEffect, useState } from "react";
import { useAuth } from "./../contexts/AuthContext.tsx";
import Sidebar from "./../components/dashboard/Sidebar.tsx";
import TopBar from "./../components/dashboard/TopBar.tsx";
import StatCard from "./../components/dashboard/StatCard.tsx";
import AnalyticsChart from "./../components/dashboard/AnalyticsChart.tsx";
import Reminders from "./../components/dashboard/Reminders.tsx";
import TeamCollaboration from "./../components/dashboard/TeamCollaboration.tsx";
import ProjectProgress from "./../components/dashboard/ProjectProgress.tsx";
import TimeTracker from "./../components/dashboard/TimeTracker.tsx";
import { Plus } from "lucide-react";
import ProductList from "../components/dashboard/ProductList.tsx";

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
    
    {/* Sidebar */}
    <div className="hidden md:block">
      <Sidebar />
    </div>

    {/* Main Area */}
    <div className="flex-1 flex flex-col min-w-0">
      <TopBar />

      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-6 overflow-y-auto scrollbar-thin">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-foreground">
              Dashboard
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              Plan, prioritize, and accomplish your tasks with ease.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="flex items-center gap-2 bg-primary px-4 sm:px-5 py-2 text-primary-foreground rounded-xl text-sm font-semibold hover:opacity-90 transition-opacity">
              <Plus className="w-4 h-4" />
              Add Project
            </button>
            <button className="px-4 sm:px-5 py-2 rounded-xl border border-border text-sm font-semibold text-foreground hover:bg-muted transition-colors">
              Import Data
            </button>
          </div>
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          <StatCard
            title="Total Users"
            value={data?.overview?.totalUsers?.toLocaleString() ?? "0"}
            subtitle={`${data?.overview?.growth}% growth`}
            variant="primary"
            delay={0}
          />
          <StatCard
            title="Active Users"
            value={data?.overview?.activeUsers?.toLocaleString() ?? "0"}
            subtitle="Currently active"
            delay={50}
          />
          <StatCard
            title="Revenue"
            value={`$${data?.overview?.revenue?.toLocaleString() ?? "0"}`}
            subtitle="Total earnings"
            delay={100}
          />
          <StatCard
            title="Growth"
            value={`${data?.overview?.growth ?? 0}%`}
            subtitle="Increased from last month"
            delay={150}
          />
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
          <div className="lg:col-span-2 min-w-0">
            {data?.analytics && <AnalyticsChart data={data.analytics} />}
          </div>

          <div className="grid gap-4">
            <Reminders />
            {data?.products && <ProductList products={data.products} />}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="min-w-0">
            {data?.users && <TeamCollaboration users={data.users} />}
          </div>

          <div className="min-w-0">
            {data?.analytics && <ProjectProgress analytics={data.analytics} />}
          </div>

          <div className="min-w-0">
            <TimeTracker />
          </div>
        </div>

      </main>
    </div>
  </div>
);
};

export default Dashboard;
