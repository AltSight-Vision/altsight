export interface CurriculumPhase {
  id: number;
  date: string;
  title: string;
  description: string[];
  type: "education" | "projects" | "work";
}

export const curriculumData: CurriculumPhase[] = [
  {
    id: 1,
    date: "2025",
    title: "Bachelor's Degree in **Computer Engineering** - Federal University of Mato Grosso",
    description: [
      "Undergraduate program focused on **software engineering**, **artificial intelligence**, and **computational systems optimization**",
      "Thesis on applied **machine learning** in government systems",
      "Coursework included **advanced algorithms**, **distributed systems**, and **cloud computing**"
    ],
    type: "education"
  },
  {
    id: 2,
    date: "Jun 2021 – Jun 2023",
    title: "Software Development Intern - **Secretariat of Environment (SEMA/MT)**",
    description: [
      "Implemented offline/online data synchronization system using **SQLite** and **REST APIs**, enabling seamless **cloud integration** for field agents",
      "Integrated 3 government environmental systems via **SOAP/REST APIs**, unifying licensing data across multiple platforms",
      "Automated complex data processing workflows with **Python (Pandas/Numpy)**, handling large volume environmental data analysis **30% faster**",
      "Designed and implemented geospatial visualization solutions with **PowerBI**, connecting to **spatial databases** for real-time monitoring",
      "Created interactive dashboards in **PowerBI** with direct integration to **SQL databases** and **Excel** spreadsheets for decision makers",
      "Automated monthly reports in **Excel** and **Google Sheets** using **VBA**, **Python** and **App Scripts**, reducing generation time by **20%**",
      "Developed **ETL pipelines** between Excel, App Sheet, PowerBI and **SQL databases** using **Python** for consistent data flow",
      "Implemented geospatial data processing algorithms with **Python**, generating visualizations in **Matplotlib** and **Plotly**"
    ],
    type: "work"
  },
  {
    id: 3,
    date: "Jan 2024 – March 2025",
    title: "Solutions Engineer - **State Attorney General's Office (PGE/MT)**",
    description: [
      "Modernized PGE-MT internal processes with **TypeScript** solutions, replacing a **R$1 million/year** external tool with robust in-house system",
      "Integrated repetitive legal processes into **ChatGPT** with custom automations, eliminating the need for an entire administrative department",
      "Developed comprehensive legal automation system with **Node.js/TypeScript**, integrating **5 critical workflows** and reducing processing time by **40%**",
      "Created automatic legal document summarization module using **NLP** techniques, eliminating **25 hours/month** of manual review",
      "Implemented AI-powered legal chatbot with **Dialogflow** and **REST API** integration, handling **300+ daily requests**",
      "Developed advanced document analysis system using **GPT-4** with **embedding validation**, reducing case triage time by **65%**",
      "Designed **serverless architecture** for legal tools using **AWS Lambda** and **Firebase** for scalable solutions"
    ],
    type: "work"
  },
];