export interface Experience {
  title: string;
  company: string;
  period: string;
  achievements: string[];
}

export const experienceData: Experience[] = [
  {
    title: "IT Systems & Procurement Manager",
    company: "Mazza Iron & Steel, LLC",
    period: "Oct 2023 - Present",
    achievements: [
      "Reduced operational costs by 75% through strategic automation implementation",
      "Developed AI-powered automation workflows for IT operations",
      "Built LLM-integrated documentation and knowledge management system",
      "Implemented intelligent monitoring and predictive maintenance systems"
    ]
  },
  {
    title: "Systems Administrator",
    company: "Cox Automotive",
    period: "Jan 2016 - Oct 2023",
    achievements: [
      "Automated high-volume vehicle diagnostics operations (1000+ units/week)",
      "Engineered data pipeline migration from legacy SQL to modern platforms",
      "Designed automated backup strategies achieving zero data loss over 5 years",
      "Developed custom automation scripts reducing manual workload by 60%"
    ]
  }
];
