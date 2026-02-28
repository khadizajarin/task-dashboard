
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

interface ProjectProgressProps {
  analytics: { date: string; views: number; clicks: number; conversions: number }[];
}

const ProjectProgress = ({ analytics }: ProjectProgressProps) => {
  const totalViews = analytics.reduce((sum, d) => sum + d.views, 0);
  const totalClicks = analytics.reduce((sum, d) => sum + d.clicks, 0);
  const totalConversions = analytics.reduce((sum, d) => sum + d.conversions, 0);
  const total = totalViews + totalClicks + totalConversions;

  const data = [
    { name: "Views", value: totalViews, color: "hsl(var(--primary))" },
    { name: "Clicks", value: totalClicks, color: "hsl(var(--warning))" },
    { name: "Conversions", value: totalConversions, color: "hsl(var(--chart-4))" },
  ];

  const viewsPct = total > 0 ? Math.round((totalViews / total) * 100) : 0;

  return (
    <div className="bg-card border border-border rounded-2xl p-6 h-full animate-fade-in" style={{ animationDelay: "450ms" }}>
      <h3 className="text-lg font-semibold text-foreground mb-4">Analytics Breakdown</h3>
      <div className="h-44 relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={80}
              paddingAngle={4}
              dataKey="value"
              strokeWidth={0}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="text-3xl font-bold text-foreground">{viewsPct}%</p>
          <p className="text-xs text-muted-foreground">Views Share</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 mt-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
            <span className="text-xs text-muted-foreground">{item.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectProgress;
