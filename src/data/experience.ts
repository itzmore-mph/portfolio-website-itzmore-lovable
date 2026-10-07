import { Experience } from "./types";

export const experiences: Experience[] = [
  {
    date: "01/2025 – current",
    company: "Publicis Media",
    position: "Senior Digital Data & Dashboard Manager",
    location: "Austria",
    details: [
      "Lead dashboard development and analytics engineering in Salesforce Marketing Intelligence (Datorama) for international stakeholders; build Data Streams/Transformations pipelines and create efficient reporting.",
      "Implement scalable metrics and dimensions using Datorama's JS-style expression language.",
      "Design cross-source data models and reusable components; maintain a metric dictionary, naming conventions, and QA/alerting for consistent reporting.",
    ],
    current: true,
  },
  {
    date: "04/2024 – current",
    company: "Freelance",
    position: "Football Data Scientist",
    location: "Remote",
    details: [
      "Built an end-to-end broadcast computer-vision pipeline (YOLOv11n, ByteTrack, TVCalib) that derives player positions and pitch-control surfaces from single-camera broadcast footage, validated against SoccerNet GSR ground truth.",
      "Developed the Football Body Intelligence Platform on 700M+ TRACAB 3D skeleton data points (AWS S3, SageMaker, Bedrock) with two body-mechanics metrics (AWI, PQI). EMEA finalist, AWS World Sports Innovation Cup 2026.",
      "Designed a two-phase Python scouting data pipeline for a professional club (under NDA), ingesting and normalising league source data for recruitment workflows.",
      "Co-authored 2026 FIFA World Cup match analyses for the Sports Data Campus 'World Cup of Data' series.",
    ],
    ongoing: true,
    links: [
      { name: "GitHub", url: "https://github.com/itzmore-mph" },
      { name: "Upwork", url: "https://www.upwork.com/freelancers/~01924c4b6089ef56d8" },
      { name: "Malt", url: "https://www.malt.de/profile/moritzphilipphaaf" },
    ],
  },
  {
    date: "08/2022 – 04/2024",
    company: "Red Bull Media House",
    position: "Digital Competence Specialist",
    location: "Austria",
    details: [
      "Optimization of advertising monetization and analysis of digital user data.",
      "Management of advertising campaigns in Google Ad Manager for YouTube & Red Bull platforms.",
      "Implementation of new ad formats & technical solutions in/with internal teams.",
    ],
  },
  {
    date: "10/2021 – 09/2022",
    company: "Sportradar AG",
    position: "Manager Digital Advertising",
    location: "Austria",
    details: [
      "Development of audience segmentation models to improve advertising strategies.",
      "Optimization of programmatic advertising through data analysis & machine learning.",
      "Execution of A/B testing and performance analysis for digital campaigns.",
    ],
  },
  {
    date: "06/2021 – 08/2022",
    company: "Hawk-Eye Innovations Ltd",
    position: "Football Systems Operator (VAR)",
    location: "Austria",
    details: [
      "On-site technical guarantee for the VAR system in Austrian stadiums: matchday setup and live monitoring of the video-assistant-referee technology.",
      "IFAB-approved Replay Operator, working alongside video match officials in UEFA Champions League, UEFA Europa League and test matches.",
      "Worked on both sides of VAR: the technology in the stadium and the replay workflow next to the referees.",
    ],
  },
  {
    date: "02/2019 – 09/2021",
    company: "E2 Communications GmbH",
    position: "Oddserve & Ad Operations Manager",
    location: "Austria",
    details: [
      "Managed ad campaign setups and operations across platforms like Adition, Epom, and Adform, using data analytics to optimize performance.",
      "Developed and maintained client websites using WordPress, integrating analytics to enhance user engagement.",
      "Created comprehensive tracking and conversion tracking.",
      "Supported key account management and project execution, implementing data-driven reporting mechanisms to increase business efficiency.",
    ],
  },
  {
    date: "08/2016",
    company: "TorAlarm GmbH",
    position: "Internship",
    location: "Germany",
    details: [
      "Developed and maintained databases, improving data organization and operational efficiency.",
      "Assisted in User Growth & Sales, contributing to strategic initiatives to enhance user acquisition.",
      "Participated in product development, particularly in integrating Amazon Alexa skills, enhancing product usability and expanding market reach.",
    ],
  },
];
