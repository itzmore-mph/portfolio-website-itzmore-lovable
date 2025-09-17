import { StatCard } from "./StatCard";

const statsData = [
  { value: "2+", label: "Years Experience" },
  { value: "8+", label: "Projects Created" },
  { value: "50+", label: "Matches Analyzed" },
  { value: "Active", label: "Client Contracts" }
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