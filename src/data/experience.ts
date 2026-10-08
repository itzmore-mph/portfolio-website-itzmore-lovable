import { Experience } from "./types";

export const experiences: Experience[] = [
  {
    date: "01/2025 – current",
    company: "Publicis Media",
    position: "Senior Data Analyst",
    location: "Vienna, Austria",
    details: [
      "Lead end-to-end dashboard and automation projects for cross-media campaigns, from requirements to rollout and ongoing support, in Salesforce Marketing Intelligence (Datorama), Power BI and Looker / Looker Studio.",
      "Act as product owner for Austria for the network's in-house BI solutions: gathering local requirements, prioritising features and coordinating rollout with the engineering team in London.",
      "Build cross-source data pipelines and reporting frameworks for performance, pacing and KPI monitoring across markets, with a documented metric dictionary and automated QA.",
      "Drive the agency's data and AI strategy, scaling automation initiatives across teams.",
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
      "Built an end-to-end broadcast computer-vision pipeline (YOLOv11n, ByteTrack, TVCalib) that derives player positions and pitch-control surfaces from single-camera broadcast footage, validated against SoccerNet GSR ground truth.",
      "Developed the Football Body Intelligence Platform on 700M+ TRACAB 3D skeleton data points (AWS S3, SageMaker, Bedrock) with two body-mechanics metrics (AWI, PQI). EMEA finalist, AWS World Sports Innovation Cup 2026.",
      "Designed a two-phase Python scouting data pipeline for a professional club (under NDA), ingesting and normalising league source data for recruitment workflows.",
      "Co-authored 2026 FIFA World Cup match analyses for the Sports Data Campus World Cup of Data series.",
    ],
    ongoing: true,
    links: [
      { name: "GitHub", url: "https://github.com/itzmore-mph" },
    ],
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
    location: "Austria",
    details: [
      "Setup and live operation of VAR and replay technology for professional football matches in Austria.",
      "Technical support for match officials' video review workflow.",
    ],
  },
  {
    date: "02/2019 – 09/2021",
    company: "E2 Communications",
    position: "Oddsserve & Ad Operations Manager",
    location: "Vienna, Austria",
    details: [
      "Ad operations in the Oddsserve department, E2's sports betting odds ad product: campaign setup and optimisation across Adition, Epom and Adform.",
      "Built data-driven reporting and conversion tracking for key accounts.",
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
