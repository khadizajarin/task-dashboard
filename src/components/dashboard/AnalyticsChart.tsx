import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

interface AnalyticsChartProps {
  data: { date: string; views: number; clicks: number; conversions: number }[];
}

const AnalyticsChart = ({ data }: AnalyticsChartProps) => {
  const chartData = data.map((d) => ({
    ...d,
    label: new Date(d.date).toLocaleDateString("en-US", { weekday: "short" }),
  }));

  const totalViews = data.reduce((sum, d) => sum + d.views, 0);
  const totalClicks = data.reduce((sum, d) => sum + d.clicks, 0);
  const totalConversions = data.reduce((sum, d) => sum + d.conversions, 0);

  return (
    <div className="bg-card border border-border rounded-2xl p-6 h-full animate-fade-in" style={{ animationDelay: "200ms" }}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-foreground">Project Analytics</h3>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Views: {totalViews.toLocaleString()}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "hsl(var(--chart-3))" }} />
            Clicks: {totalClicks.toLocaleString()}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "hsl(var(--warning))" }} />
            Conv: {totalConversions}
          </span>
        </div>
      </div>
      <div className=" h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} barCategoryGap="25%">
            <XAxis
              dataKey="label"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                background: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                fontSize: "12px",
              }}
            />
            <Bar dataKey="views" fill="hsl(var(--primary))" radius={[6, 6, 0, 0]} />
            <Bar dataKey="clicks" fill="hsl(var(--chart-3))" radius={[6, 6, 0, 0]} />
            <Bar dataKey="conversions" fill="hsl(var(--warning))" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AnalyticsChart;
