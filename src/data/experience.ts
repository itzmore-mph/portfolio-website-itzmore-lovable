import { Experience } from "./types";

export const experiences: Experience[] = [
  {
    date: "01/2025 – current",
    company: "Publicis Media",
    position: "Senior Data Analyst",
    location: "Vienna, Austria",
    details: [
      "Lead end-to-end dashboard and automation projects for cross-media campaigns, from requirements to rollout and ongoing support, in Datorama (Salesforce Marketing Intelligence), Power BI, and Looker Studio.",
      "Act as product owner for Austria for the network's in-house BI solutions: local requirements, feature prioritization and rollout, coordinate between local and international network teams.",
      "Design and maintain reporting frameworks for performance, pacing and KPI monitoring across markets, with a shared metric dictionary and automated QA.",
      "Drive the agency's data and AI strategy and product development, scaling core automation initiatives.",
    ],
    current: true,
  },
  {
    date: "04/2024 – current",
    company: "itzmore.dev",
    position: "Football Data Scientist",
    location: "Remote",
    details: [
      "Independent football data science projects and selected freelance work, focused on tracking data, broadcast video and recruitment data.",
      "Built a broadcast computer-vision pipeline (YOLO, ByteTrack, TVCalib) that derives player positions and pitch-control surfaces from single-camera match footage, validated against SoccerNet ground truth.",
      "Developed the Football Body Intelligence Platform on 700M+ TRACAB 3D skeleton data points (AWS S3, SageMaker, Bedrock) with two body-mechanics metrics, AWI and PQI. Finalist at AWS World Sports Innovation Cup 2026.",
      "Designed a scouting data pipeline for a professional club: scraping, ingestion and normalisation of league source data for recruitment workflows.",
      "Co-authored 2026 FIFA World Cup match analyses for the Sports Data Campus World Cup of Data series.",
    ],
    ongoing: true,
    freelance: true,
    links: [{ name: "GitHub", url: "https://github.com/itzmore-mph" }],
  },
  {
    date: "08/2022 – 04/2024",
    company: "Red Bull Media House",
    position: "Digital Competence & Ad Tech Specialist",
    location: "Vienna, Austria",
    details: [
      "Analysed campaign and ad delivery data across Red Bull Media House websites and YouTube channels to improve monetisation.",
      "Managed display and video campaigns in Google Ad Manager and led the implementation of new ad formats with cross-functional teams.",
    ],
  },
  {
    date: "10/2021 – 09/2022",
    company: "Sportradar",
    position: "Manager Digital Advertising",
    location: "Vienna, Austria",
    details: [
      "Developed audience segmentation models to improve ad targeting and engagement.",
      "Used data analysis and A/B testing to optimise programmatic advertising and digital monetisation.",
    ],
  },
  {
    date: "06/2021 – 08/2022",
    company: "Hawk-Eye Innovations",
    position: "Football Systems Operator",
    location: "Hybrid",
    details: [
      "On-site technical responsibility for VAR systems at UEFA and Austrian Bundesliga matches: setup, camera and feed checks, live monitoring.",
      "IFAB-approved replay operator, working alongside video match officials in live review situations.",
      "Technical interface between referees, league officials and Hawk-Eye engineering during match operations.",
    ],
  },
  {
    date: "02/2019 – 09/2021",
    company: "E2 Communications",
    position: "Oddsserve & Ad Operations Manager",
    location: "Vienna, Austria",
    details: [
      "Ad operations in the Oddsserve department, E2's sports betting odds ad product: campaign setup and optimisation across Adition, Epom and Adform.",
      "Built data-driven reporting and conversion tracking for key accounts, supporting campaign insights and decision-making",
      "Supported key account management and project execution",
    ],
  },
  {
    date: "08/2016",
    company: "TorAlarm",
    position: "Internship",
    location: "Düsseldorf, Germany",
    details: [
      "One-month internship at one of Germany's largest football live-score apps: data maintenance, user growth analysis and support on an Amazon Alexa integration.",
    ],
  },
];
