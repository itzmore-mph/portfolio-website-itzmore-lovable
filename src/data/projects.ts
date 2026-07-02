import { BarChart3, TrendingUp, Network, Video } from "lucide-react";
import { Project } from "./types";
import bodyIntelligenceImg from "@/assets/body-intelligence.png.asset.json";
import pitchControlImg from "@/assets/pitch-control.png.asset.json";
import passingNetworkImg from "@/assets/passing-network.png.asset.json";


export const projects: Project[] = [
  {
    title: "Football Body Intelligence Platform",
    description:
      "AWS World Sports Innovation Cup 2026 submission, EMEA finalist (DFB Campus Frankfurt). Two proprietary metrics, AWI (cognitive scanning via head rotation) and PQI (pressing quality), derived from 700M plus TRACAB tracking data points on AWS (S3, SageMaker, Bedrock).",
    image: bodyIntelligenceImg.url,
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
      "MSc capstone. End-to-end computer-vision pipeline (YOLOv11n detection, ByteTrack identity, TVCalib camera calibration, Shaw time-to-intercept pitch-control) that turns broadcast footage into spatial pressure surfaces, validated against SoccerNet GSR ground truth across 21 set-piece clips (651 frames).",
    image: pitchControlImg.url,
    tags: ["Python", "Computer Vision", "PyTorch", "Validation"],
    metrics: ["YOLOv11n + ByteTrack", "TVCalib Homography", "Shaw TTI Model"],
    metricBadge: "ICC 0.89 to 0.93",
    icon: Video,
    color: "primary",
    githubUrl: "https://github.com/itzmore-mph/soccernet-setpiece-vision",
  },
  {
    title: "Football Analytics Dashboard, Expected Goals and Passing Networks",
    description:
      "Interactive Streamlit dashboard for player performance and tactical insight, with an XGBoost xG baseline and pass-network views built on open StatsBomb event data.",
    
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
    image: passingNetworkImg.url,
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
