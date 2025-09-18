import { StatCard } from "./StatCard";
import { statsData } from "@/data/stats";

export const StatsGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 max-w-md mx-auto">
      {statsData.map((stat, index) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          label={stat.label}
          className={`animate-fade-in [animation-delay:${index * 100}ms]`}
        />
      ))}
    </div>
  );
};