import { StatCard } from "./StatCard";

const statsData = [
  { value: "5+", label: "Years Experience" },
  { value: "15+", label: "Projects Created" },
  { value: "50+", label: "Matches Analyzed" },
  { value: "10+", label: "Tools Mastered" }
];

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