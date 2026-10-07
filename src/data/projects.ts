import { TrendingUp, Video, Globe } from "lucide-react";
import { Project } from "./types";
import pitchControlImg from "@/assets/pitch-control-preview.png.asset.json";
import bodyIntelligenceImg from "@/assets/football-body-intelligence-dark.png.asset.json";
import bundesligaImg from "@/assets/bundesliga-performance-analysis-dark.png.asset.json";
import worldCupOfDataImg from "@/assets/world-cup-of-data-preview.png.asset.json";


export const projects: Project[] = [
  {
    title: "Pitch-Control from Broadcast Video",
    description:
      "MSc capstone. End-to-end computer-vision pipeline (YOLOv11n detection, ByteTrack identity, TVCalib camera calibration, Shaw time-to-intercept pitch-control) that turns broadcast footage into spatial pressure surfaces, validated against SoccerNet GSR ground truth across 33 clips. Graded 100/100.",
    image: pitchControlImg.url,
    tags: ["Python", "Computer Vision", "PyTorch", "Validation"],
    metrics: ["YOLOv11n + ByteTrack", "TVCalib Homography", "Shaw TTI Model"],
    metricBadge: "ICC 0.83 to 0.92",
    metricExplainer:
      "ICC = agreement with ground-truth tracking; above 0.75 indicates strong reliability.",
    icon: Video,
    color: "primary",
    caseStudyUrl:
      "https://github.com/itzmore-mph/soccernet-setpiece-vision/blob/main/report.md",
    caseStudyLabel: "Read the Report",
    githubUrl: "https://github.com/itzmore-mph/soccernet-setpiece-vision",
  },
  {
    title: "Football Body Intelligence Platform",
    description:
      "AWS World Sports Innovation Cup 2026 submission, EMEA finalist (DFB Campus Frankfurt). Two proprietary metrics, AWI (cognitive scanning via head rotation) and PQI (pressing quality), derived from 700M plus TRACAB tracking data points on AWS (S3, SageMaker, Bedrock).",
    image: bodyIntelligenceImg.url,
    tags: ["Python", "AWS", "Tracking Data", "Streamlit"],
    metrics: ["TRACAB Tracking", "AWS SageMaker", "AWI and PQI"],
    metricBadge: "cross-half R = 0.854",
    metricExplainer:
      "Cross-half R = metric stability between first and second half; higher means more reliable player signal.",
    icon: TrendingUp,
    color: "primary",
    caseStudyUrl: "https://github.com/itzmore-mph/football-body-intelligence",
    githubUrl: "https://github.com/itzmore-mph/football-body-intelligence",
  },
  {
    title: "Bundesliga Performance and Valuation Analysis",
    description:
      "Season-long study of Bayer Leverkusen's unbeaten campaign combining performance metrics, market valuation, and ML feature importance via Ridge and Random Forest.",
    image: bundesligaImg.url,
    tags: ["Python", "Machine Learning", "Bundesliga", "Performance Analysis"],
    metrics: ["Ridge Regression", "Random Forest", "Feature Importance"],
    metricBadge: "age feature importance = 0.44",
    metricExplainer:
      "Feature importance = relative contribution of a variable to model predictions (0 to 1).",
    icon: TrendingUp,
    color: "primary",
    caseStudyUrl: "https://itzmore-mph.github.io/bundesliga-performance-analysis/",
    githubUrl: "https://github.com/itzmore-mph/BundesligaPerformanceAnalysis",
  },
  {
    title: "World Cup of Data, 2026 FIFA World Cup Match Analyses",
    description:
      "Co-authored match analyses for a collaborative Sports Data Campus series on the 2026 FIFA World Cup, covering Mexico vs South Africa, Canada vs Qatar and Group G with event-data metrics and tactical breakdowns.",
    image: worldCupOfDataImg.url,
    tags: ["Match Analysis", "Event Data", "Data Visualisation", "Collaboration"],
    metrics: ["Event Data", "Tactical Breakdowns", "Sports Data Campus"],
    icon: Globe,
    color: "primary",
    caseStudyUrl: "https://worldcup2026.sportsdatacampus.com/",
    caseStudyLabel: "View the Series",
  },
];

export const earlierWork: { title: string; githubUrl: string }[] = [
  { title: "Football Analytics Dashboard, Expected Goals and Passing Networks", githubUrl: "https://github.com/itzmore-mph/football-analytics-portfolio" },
  { title: "StatsBomb Passing Network Analysis", githubUrl: "https://github.com/itzmore-mph/statsbomb-passing-network-analysis" },
];
