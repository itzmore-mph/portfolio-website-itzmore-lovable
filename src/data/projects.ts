import { TrendingUp, Video, Globe } from "lucide-react";
import { Project } from "./types";
import pitchControlImg from "@/assets/pitch-control-detections.png.asset.json";
import bodyIntelligenceImg from "@/assets/football-body-intelligence-dark.png.asset.json";
import bundesligaImg from "@/assets/bundesliga-performance-analysis-dark.png.asset.json";
import worldCupOfDataImg from "@/assets/world-cup-of-data-preview.png.asset.json";


export const projects: Project[] = [
  {
    title: "Pitch-Control from Broadcast Video",
    description:
      "MSc capstone. End-to-end computer-vision pipeline (YOLOv11n detection, ByteTrack identity, TVCalib camera calibration, Shaw time-to-intercept pitch-control) that turns broadcast footage into spatial pressure surfaces, validated against SoccerNet GSR ground truth.",
    image: pitchControlImg.url,
    tags: ["Python", "Computer Vision", "PyTorch", "Validation"],
    metrics: ["YOLOv11n + ByteTrack", "TVCalib Homography", "Shaw TTI Model"],
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
      "Finalist at the on-site final of the AWS World Sports Innovation Cup 2026, DFB Campus Frankfurt. Two proprietary metrics, AWI (cognitive scanning via head rotation) and PQI (pressing quality), derived from 700M plus TRACAB tracking data points on AWS (S3, SageMaker, Bedrock). The competition drew 138 submitted projects from 370 students at 117 universities in 41 countries.",
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
    externalLinks: [
      {
        label: "Bundesliga recap video (team featured)",
        url: "https://www.linkedin.com/feed/update/urn:li:activity:7510275272487936000/",
      },
    ],
  },
  {
    title: "Bundesliga Performance and Valuation Analysis",
    description:
      "Season-long study of Bayer Leverkusen's unbeaten 2023/24 Bundesliga season, combining performance metrics, market valuation and ML feature importance via Ridge and Random Forest.",
    image: bundesligaImg.url,
    tags: ["Python", "Machine Learning", "Bundesliga", "Performance Analysis"],
    metrics: ["Ridge Regression", "Random Forest", "Feature Importance"],
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
    tags: ["Event Data", "Tactical Analysis", "Data Visualisation"],
    metrics: ["Match Analysis", "Tactical Breakdowns"],
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
