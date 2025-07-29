export interface HeroSection {
  name: string;
  title: string;
  tagline: string;
  avatar?: string;
}

export interface AboutSection {
  bio: string;
  highlights: string[];
  image?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  technologies?: string[];
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
}

export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  twitter?: string;
  location: string;
}

export interface PortfolioData {
  hero: HeroSection;
  about: AboutSection;
  experience: Experience[];
  skills: SkillCategory[];
  projects: Project[];
  contact: ContactInfo;
}
