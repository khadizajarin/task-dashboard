import { ArrowUpRight } from "lucide-react";

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle: string;
  variant?: "primary" | "default";
  delay?: number;
}

const StatCard = ({ title, value, subtitle, variant = "default", delay = 0 }: StatCardProps) => {
  const isPrimary = variant === "primary";

  return (
    <div
      className={`rounded-2xl p-5 flex flex-col justify-between min-h-35  animate-fade-in ${
        isPrimary ? "bg-primary text-primary-foreground" : "bg-card text-card-foreground border border-border"
      }`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between">
        <p className={`text-sm font-medium ${isPrimary ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
          {title}
        </p>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
          isPrimary ? "bg-primary-foreground/20" : "bg-muted"
        }`}>
          <ArrowUpRight className={`w-4 h-4 ${isPrimary ? "text-primary-foreground" : "text-foreground"}`} />
        </div>
      </div>
      <div>
        <p className="text-4xl font-bold">{value}</p>
        <p className={`text-xs mt-1 flex items-center gap-1 ${isPrimary ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          <span className={`inline-block w-1.5 h-1.5 rounded-full ${isPrimary ? "bg-primary-foreground/70" : "bg-success"}`} />
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default StatCard;
