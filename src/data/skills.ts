import {
  Activity,
  BarChart3,
  Brain,
  Cloud,
  Code2,
  Database,
  ScanEye,
} from "lucide-react";
import { SkillCategory, KeyStrength } from "./types";

export const skillsIntro = "Tools and data I work with, from broadcast video and tracking data to event data, pipelines and reporting.";

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
      "xG modelling",
      "Pitch Control",
      "Tracking & skeleton data",
      "mplsoccer",
    ],
  },
  {
    title: "Data Providers",
    icon: Database,
    color: "primary",
    skills: ["Hudl StatsBomb (event & 360)", "Wyscout", "TRACAB 3D skeletal tracking", "SoccerNet"],
  },
  {
    title: "Visualization & BI",
    icon: BarChart3,
    color: "primary",
    skills: ["Streamlit", "Power BI", "Tableau", "Looker Studio", "Datorama"],
  },
  {
    title: "Data Engineering & Cloud",
    icon: Cloud,
    color: "primary",
    skills: ["Web scraping", "API ingestion & ETL pipelines", "DuckDB", "AWS (S3, SageMaker, Bedrock)", "Docker", "Git & GitHub"],
  },
];

export const keyStrengths: KeyStrength[] = [
  {
    icon: ScanEye,
    title: "Tracking & Broadcast Computer Vision",
    description:
      "Turning broadcast video and optical tracking into player positions and spatial metrics such as pitch control, validated against ground truth.",
  },
  {
    icon: Database,
    title: "End-to-End Data Pipelines",
    description:
      "From scraping and provider data to cleaned, modelled datasets: a scouting data pipeline for a professional club and cloud pipelines on 700M+ tracking data points.",
  },
  {
    icon: Activity,
    title: "Published Football Analysis",
    description:
      "Co-authored 2026 FIFA World Cup match analyses for the Sports Data Campus World Cup of Data series, translating event data into tactical findings.",
  },
];
