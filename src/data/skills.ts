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
    title: "Programming",
    icon: Code2,
    color: "primary",
    skills: [
      { name: "Python", note: "pandas, NumPy, scikit-learn, PyTorch", emphasis: "primary" },
      { name: "SQL", note: "DuckDB, ETL and data modeling" },
      { name: "R (basic)", emphasis: "muted" },
    ],
    usedIn: "Used in: pitch control from broadcast video, xG model, AWS pipeline",
  },
  {
    title: "Data & Machine Learning",
    icon: Brain,
    color: "primary",
    skills: ["pandas", "scikit-learn", "LightGBM", "PyTorch", "TensorFlow/Keras"],
    usedIn: "Used in: xG model, passing networks, player metrics",
  },
  {
    title: "Computer Vision (Sports)",
    icon: ScanEye,
    color: "primary",
    skills: [
      "YOLOv11",
      "ByteTrack",
      "TVCalib",
      "Camera calibration",
      "Player detection",
      "Multi-object tracking",
      "Pitch registration",
    ],
    usedIn: "Used in: pitch control pipeline from broadcast video",
  },
  {
    title: "Football Analytics",
    icon: Activity,
    color: "primary",
    skills: ["xG modelling", "Pitch Control", "Tracking & skeleton data", "mplsoccer"],
  },
  {
    title: "Data Providers",
    icon: Database,
    color: "primary",
    skills: [
      "Hudl StatsBomb (event & 360)",
      "Wyscout",
      "TRACAB 3D skeletal tracking",
      "SoccerNet",
      "Web scraping & API ingestion",
    ],
  },
  {
    title: "Deployment",
    icon: Cloud,
    color: "primary",
    skills: ["AWS (S3, SageMaker, Bedrock, EC2)", "Docker", "Streamlit", "Google Cloud", "Git & GitHub"],
    usedIn: "Used in: AWS World Sports Innovation Cup 2026, Finalist",
  },
  {
    title: "BI & Visualization",
    icon: BarChart3,
    color: "primary",
    skills: ["Power BI", "Tableau", "Looker", "Salesforce Marketing Intelligence"],
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
