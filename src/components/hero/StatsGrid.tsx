import { StatCard } from "./StatCard";

const statsData = [
  { value: 2, suffix: "+", label: "Years Experience" },
  { value: 15, suffix: "+", label: "Projects Created" },
  { value: 150, suffix: "+", label: "Matches Analyzed" },
  { value: 8, suffix: "+", label: "Tools Mastered" }
];

export const StatsGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 max-w-md mx-auto">
      {statsData.map((stat, index) => (
        <StatCard
          key={stat.label}
          value={stat.value}
          suffix={stat.suffix}
          label={stat.label}
          delay={index * 200}
          className={`animate-fade-in [animation-delay:${index * 100}ms]`}
        />
      ))}
    </div>
  );
};