import { BarChart3, TrendingUp, Network, Video } from "lucide-react";
import { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Football Body Intelligence Platform",
    description:
      "AWS World Sports Innovation Cup 2026 submission, EMEA finalist (DFB Campus Frankfurt). Two proprietary metrics, AWI (cognitive scanning via head rotation) and PQI (pressing quality), derived from 700M plus TRACAB tracking data points on AWS (S3, SageMaker, Bedrock).",
    image:
      "https://raw.githubusercontent.com/itzmore-mph/football-body-intelligence/main/figures/fig1_awi_vs_pqi_scatter.png",
    tags: ["Python", "AWS", "Tracking Data", "Streamlit"],
    metrics: ["TRACAB Tracking", "AWS SageMaker", "AWI and PQI"],
    metricBadge: "cross-half R = 0.854",
    icon: TrendingUp,
    color: "primary",
    githubUrl: "https://github.com/itzmore-mph/football-body-intelligence",
  },
  {
    title: "Pitch-Control from Broadcast Video",
    description:
      "MSc capstone. End-to-end computer-vision pipeline (YOLOv11n detection, ByteTrack identity, TVCalib camera calibration, Shaw TTI pitch-control) that turns broadcast footage into spatial pressure surfaces, validated against SoccerNet GSR ground truth.",
    image:
      "https://raw.githubusercontent.com/itzmore-mph/soccernet-setpiece-vision/main/outputs/figures/07_pc_sample_pipeline_vs_gt.png",
    tags: ["Python", "Computer Vision", "PyTorch", "Validation"],
    metrics: ["YOLOv11n + ByteTrack", "TVCalib Homography", "Shaw TTI Model"],
    metricBadge: "ICC 0.83 to 0.92",
    icon: Video,
    color: "primary",
    githubUrl: "https://github.com/itzmore-mph/soccernet-setpiece-vision",
  },
  {
    title: "Football Analytics Dashboard, Expected Goals and Passing Networks",
    description:
      "Interactive Streamlit dashboard for player performance and tactical insight, with an XGBoost xG baseline and pass-network views built on open StatsBomb event data.",
    image: "/lovable-uploads/58741acb-2f0e-4f70-97e0-a1c20ca0bee8.png",
    tags: ["Python", "Streamlit", "xG Models", "Network Analysis"],
    metrics: ["XGBoost xG", "Passing Networks", "StatsBomb Data"],
    metricBadge: "open StatsBomb data",
    icon: BarChart3,
    color: "primary",
    liveUrl: "https://football-xgcloud.streamlit.app/",
    githubUrl: "https://github.com/itzmore-mph/football-analytics-portfolio",
  },
  {
    title: "Bundesliga Performance and Valuation Analysis",
    description:
      "Season-long study of Bayer Leverkusen's unbeaten campaign combining performance metrics, market valuation, and ML feature importance via Ridge and Random Forest.",
    image: "/lovable-uploads/fcdfc32d-a94f-4445-b24b-ffbb89a5c8e6.png",
    tags: ["Python", "Machine Learning", "Bundesliga", "Performance Analysis"],
    metrics: ["Ridge Regression", "Random Forest", "Feature Importance"],
    metricBadge: "age feature importance = 0.44",
    icon: TrendingUp,
    color: "primary",
    liveUrl: "https://itzmore-mph.github.io/bundesliga-performance-analysis/",
    githubUrl: "https://github.com/itzmore-mph/BundesligaPerformanceAnalysis",
  },
  {
    title: "StatsBomb Passing Network Analysis",
    description:
      "Built a passing-network analysis on open StatsBomb event data to evaluate team structure and player connectivity, surfacing distribution hubs, build-up patterns, and possession roles.",
    image: "/lovable-uploads/passing-network-analysis.png",
    tags: ["Python", "pandas", "mplsoccer", "Jupyter Notebook"],
    metrics: ["pandas + mplsoccer", "Network Graph", "Tactical Roles"],
    metricBadge: "UCL Final 2018",
    icon: Network,
    color: "primary",
    liveUrl:
      "https://github.com/itzmore-mph/statsbomb-passing-network-analysis/blob/main/report/passing-network-analysis-statsbomb-report.pdf",
    githubUrl: "https://github.com/itzmore-mph/statsbomb-passing-network-analysis",
  },
];
