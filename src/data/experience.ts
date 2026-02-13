import { Experience } from "./types";

export const experiences: Experience[] = [
  {
    date: "01/2025 – current",
    company: "Publicis Media Austria",
    position: "Senior Data Analyst",
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
    position: "Sports Data Scientist & Analyst",
    location: "Remote",
    details: [
      "Build end-to-end football analytics prototypes on open data (FBref, StatsBomb): data ingestion/cleaning in Python + SQL/DuckDB, analysis, and publication via Streamlit and Power BI/Tableau.",
      "Train and evaluate a baseline xG model; derive player/team metrics (passing networks, shot maps, possession-adjusted comparisons) with methods documented in README files.",
      "Produce season case studies (e.g., Bundesliga 2023/24) to demonstrate workflow and reporting style.",
      "Portfolio: itzmore.dev - Upwork - Malt.",
    ],
    current: true,
    links: [
      { name: "GitHub", url: "https://github.com/itzmore-mph" },
      { name: "Upwork", url: "https://www.upwork.com/freelancers/~01924c4b6089ef56d8" },
      { name: "Malt", url: "https://www.malt.de/profile/moritzphilipphaaf" },
    ],
  },
  {
    date: "07/2024 – 12/2024",
    company: "Regionalmedien Austria AG",
    position: "Analytics & Ad Tech Development Manager",
    location: "Austria",
    details: [
      "Analyzing traffic and user flow assessments using Google Analytics & Piano Analytics.",
      "Supported development of internal Looker KPI dashboards.",
      "Responsible for Data Management Platform to build and maintain user segments.",
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
    position: "Football Systems Operator",
    location: "Remote",
    details: [
      "Operated VAR/replay systems for Austrian Bundesliga & UEFA fixtures for the Austrian Bundesliga & UEFA competitions.",
      "Replay Operator for professional football matches; supporting decision-making through video technology.",
      "Application of project management skills to optimize sports technology processes.",
    ],
  },
  {
    date: "02/2019 – 09/2022",
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
];
