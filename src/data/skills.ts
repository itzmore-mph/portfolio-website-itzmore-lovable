import {
  Activity,
  BarChart3,
  Brain,
  Cloud,
  Code2,
  Cog,
  ScanEye,
  TrendingUp,
} from "lucide-react";
import { SkillCategory, KeyStrength } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: Code2,
    color: "primary",
    skills: ["Python", "SQL", "R"],
  },
  {
    title: "Data & Machine Learning",
    icon: Brain,
    color: "primary",
    skills: ["pandas", "scikit-learn", "LightGBM", "PyTorch"],
  },
  {
    title: "Computer Vision",
    icon: ScanEye,
    color: "primary",
    skills: ["YOLOv11", "ByteTrack", "TVCalib", "OpenCV"],
  },
  {
    title: "Football Analytics",
    icon: Activity,
    color: "primary",
    skills: [
      "StatsBomb data",
      "xG modelling",
      "Pitch Control",
      "Tracking & skeleton data",
      "mplsoccer",
    ],
  },
  {
    title: "Visualization & BI",
    icon: BarChart3,
    color: "primary",
    skills: ["Streamlit", "Power BI", "Tableau", "Looker Studio", "Datorama"],
  },
  {
    title: "Cloud & Workflow",
    icon: Cloud,
    color: "primary",
    skills: ["AWS (S3, SageMaker, Bedrock)", "Docker", "Git & GitHub", "Jupyter"],
  },
];

export const keyStrengths: KeyStrength[] = [
  {
    icon: TrendingUp,
    title: "Corporate Analytics Excellence",
    description:
      "Leading international dashboard and automation projects at Publicis Media Austria, building real-time visualization tools and scalable workflows.",
  },
  {
    icon: Brain,
    title: "Applied Football Analytics",
    description:
      "Actively developing xG models, opponent analysis dashboards, and player comparison studies using StatsBomb and open-source data.",
  },
  {
    icon: Cog,
    title: "AI Specialization",
    description:
      "Currently pursuing the MSc in AI Applied to Sports to become a Football Data Scientist in professional clubs or federations.",
  },
];
