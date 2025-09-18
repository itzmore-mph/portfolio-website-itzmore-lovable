import { BarChart3, Code, TrendingUp, Brain, Cog } from "lucide-react";
import { SkillCategory, KeyStrength } from "./types";

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Competencies",
    icon: BarChart3,
    color: "data-blue",
    skills: [
      { name: "Data Analytics", level: "Experienced" },
      { name: "Data Science", level: "Intermediate" },  
      { name: "Business Intelligence", level: "Experienced" },
      { name: "Data Visualization", level: "Experienced" },
      { name: "Dashboard Development", level: "Experienced" },
      { name: "Ad Tech", level: "Experienced" },
      { name: "Project Management", level: "Intermediate" },
      { name: "AI & Machine Learning", level: "Basic" },
      { name: "Football Analytics", level: "Intermediate" },
      { name: "Sports Technology", level: "Intermediate" }
    ]
  },
  {
    title: "Tools & Technologies",
    icon: Code,
    color: "pitch-green", 
    skills: [
      { name: "Python", level: "Experienced", link: "https://www.python.org/" },
      { name: "SQL", level: "Experienced", link: "https://dev.mysql.com/doc/" },
      { name: "R", level: "Basic", link: "https://www.r-project.org/" },
      { name: "Datorama", level: "Experienced", link: "https://www.salesforce.com/de/campaign/sem/marketing-cloud/" },
      { name: "Tableau", level: "Intermediate", link: "https://www.tableau.com/" },
      { name: "Power BI", level: "Intermediate", link: "https://www.microsoft.com/en-us/power-platform/products/power-bi" },
      { name: "Looker Studio", level: "Intermediate", link: "https://lookerstudio.google.com/" },
      { name: "Streamlit", level: "Basic", link: "https://streamlit.io/" },
      { name: "Git, GitHub", level: "Intermediate", link: "https://github.com/" }
    ]
  }
];

export const keyStrengths: KeyStrength[] = [
  {
    icon: TrendingUp,
    title: "Corporate Analytics Excellence",
    description: "Leading international dashboard and automation projects at Publicis Media Austria, building real-time visualization tools and scalable workflows."
  },
  {
    icon: Brain,
    title: "Applied Football Analytics", 
    description: "Actively developing xG models, opponent analysis dashboards, and player comparison studies using StatsBomb and open-source data."
  },
  {
    icon: Cog,
    title: "Future AI Specialization",
    description: "Preparing for MSc in AI Applied to Sports (Oct 2025) to become a Football Data Scientist in professional clubs or federations."
  }
];