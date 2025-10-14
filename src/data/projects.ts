import { BarChart3, TrendingUp, Users, Award } from "lucide-react";
import { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Football Analytics Dashboard – Expected Goals (xG) & Passing Networks",
    description:
      "Interactive dashboard analyzing player performance metrics and tactical insights with advanced statistical modeling using StatsBomb data.",
    image: "/lovable-uploads/58741acb-2f0e-4f70-97e0-a1c20ca0bee8.png",
    tags: ["Python", "Streamlit", "xG Models", "Network Analysis"],
    metrics: ["XGBoost ML Model", "Passing Networks", "StatsBomb Data"],
    icon: BarChart3,
    color: "data-blue",
    liveUrl: "https://football-xgcloud.streamlit.app/",
    githubUrl: "https://github.com/itzmore-mph/football-analytics-portfolio",
  },
  {
    title: "Bundesliga Performance & Valuation Analysis",
    description:
      "Comprehensive analysis of Bayer Leverkusen's historic unbeaten season using performance metrics, valuation trends, and machine learning models.",
    image: "/lovable-uploads/fcdfc32d-a94f-4445-b24b-ffbb89a5c8e6.png",
    tags: ["Python", "Machine Learning", "Bundesliga", "Performance Analysis"],
    metrics: ["Ridge & Random Forest", "Market Valuation", "Feature Analysis"],
    icon: TrendingUp,
    color: "analytics-purple",
    liveUrl: "https://itzmore-mph.github.io/bundesliga-performance-analysis/",
    githubUrl: "https://github.com/itzmore-mph/BundesligaPerformanceAnalysis",
  },
  {
    title: "Phoenix Firebirds Ticket Sales Analysis",
    description:
      "Strategic analysis of Minor League Baseball ticket sales data identifying key drivers of attendance and revenue optimization opportunities.",
    image: "/lovable-uploads/e1798b1e-2ff3-4c5c-98b4-8a94faf3b4b4.png",
    tags: ["Excel", "Power BI", "Sports Strategy", "Revenue Analysis"],
    metrics: ["3-Year Analysis", "Revenue Optimization", "Strategic Insights"],
    icon: Users,
    color: "pitch-green",
    liveUrl: "https://docs.google.com/spreadsheets/d/1mPcusY0ESo4krszRta6Yul3MsqbyMYKV/export?format=xlsx",
    githubUrl: "https://drive.google.com/uc?export=download&id=1DQgAIAjWY7UDYFkX2LIfXYARIH57JuER",
  },
  {
    title: "More Projects Coming Soon",
    description:
      "Additional football analytics projects and data visualizations are currently in development. Contact me to discuss custom analytics solutions.",
    image: null,
    tags: ["Python", "Machine Learning", "Analytics", "Custom Solutions"],
    metrics: ["On Request", "Custom Analytics", "Data Solutions"],
    icon: Award,
    color: "muted",
    isPlaceholder: true,
  },
];
