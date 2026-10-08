import { StatCard } from "./StatCard";
import { statsData } from "@/data/stats";
import { Activity, BarChart3, Database, Video } from "lucide-react";

const capabilityIcons = [Video, Activity, BarChart3, Database];

export const StatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-start">
      {statsData.map((stat, index) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
          icon={capabilityIcons[index] ?? Database}
          className="animate-fade-in"
        />
      ))}
    </div>
  );
};