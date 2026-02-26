import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Completed", value: 41, color: "hsl(var(--primary))" },
  { name: "In Progress", value: 35, color: "hsl(var(--warning))" },
  { name: "Pending", value: 24, color: "hsl(var(--chart-4))" },
];

const ProjectProgress = () => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6  animate-fade-in" style={{ animationDelay: "450ms" }}>
      <h3 className="text-lg font-semibold text-foreground mb-4">Project Progress</h3>
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
          <p className="text-3xl font-bold text-foreground">41%</p>
          <p className="text-xs text-muted-foreground">Project Ended</p>
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
