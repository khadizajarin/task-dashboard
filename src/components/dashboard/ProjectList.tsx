import { Plus } from "lucide-react";

const projects = [
  { name: "Develop API Endpoints", deadline: "Nov 25, 2024", color: "bg-success" },
  { name: "Onboarding Flow", deadline: "Nov 28, 2024", color: "bg-info" },
  { name: "Build Dashboard", deadline: "Nov 30, 2024", color: "bg-warning" },
  { name: "Optimize Page Load", deadline: "Dec 5, 2024", color: "bg-primary" },
  { name: "Cross-Browser Testing", deadline: "Dec 8, 2024", color: "bg-destructive" },
];

const ProjectList = () => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6  animate-fade-in" style={{ animationDelay: "350ms" }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Project</h3>
        <button className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:opacity-80 transition-opacity">
          <Plus className="w-3.5 h-3.5" />
          New
        </button>
      </div>
      <div className="space-y-3">
        {projects.map((project) => (
          <div key={project.name} className="flex items-center gap-3">
            <div className={`w-8 h-8 ${project.color} rounded-lg flex items-center justify-center text-xs font-bold text-primary-foreground`}>
              {project.name.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{project.name}</p>
              <p className="text-xs text-muted-foreground">Deadline: {project.deadline}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
