import { GraduationCap, Award, Users, Target } from "lucide-react";
import { AboutHighlight } from "./types";

export const aboutHighlights: AboutHighlight[] = [
  {
    icon: GraduationCap,
    title: "Education",
    primary: "M.Sc. AI Applied to Sports",
    secondary: "M.A. Digital Media Management",
    third: "B.Sc. Business Administration",
    color: "data-blue"
  },
  {
    icon: Award,
    title: "Experience", 
    primary: "5+ Years",
    secondary: "Data & Analytics",
    color: "pitch-green"
  },
  {
    icon: Users,
    title: "Specialization",
    primary: "Football Analytics",
    secondary: "Sports Technology",
    color: "analytics-purple"
  },
  {
    icon: Target,
    title: "Focus",
    primary: "Data-Driven",
    secondary: "Decision Making",
    color: "data-orange"
  }
];