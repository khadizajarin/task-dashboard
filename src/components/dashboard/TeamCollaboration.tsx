import { Plus } from "lucide-react";

interface TeamMember {
  id: number;
  name: string;
  email: string;
  status: string;
  joinDate: string;
}

interface TeamCollaborationProps {
  users: TeamMember[];
}

const statusLabels: Record<string, { text: string; className: string }> = {
  active: { text: "Active", className: "bg-success/10 text-success" },
  inactive: { text: "Inactive", className: "bg-warning/10 text-warning" },
};

const TeamCollaboration = ({ users }: TeamCollaborationProps) => {
  return (
    <div className="bg-card border border-border rounded-2xl p-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Team Members</h3>
        <button className="flex items-center gap-1.5 text-xs font-semibold text-primary border border-border px-3 py-1.5 rounded-lg hover:bg-muted transition-colors">
          <Plus className="w-3.5 h-3.5" />
          Add Member
        </button>
      </div>
      <div className="space-y-3">
        {users.map((user) => {
          const label = statusLabels[user.status] || statusLabels.inactive;
          return (
            <div key={user.id} className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                {user.name.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{user.name}</p>
                <p className="text-xs text-muted-foreground truncate">{user.email}</p>
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${label.className}`}>
                {label.text}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamCollaboration;
