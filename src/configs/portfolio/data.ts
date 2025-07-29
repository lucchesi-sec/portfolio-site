import type { PortfolioData } from "./types";

export const portfolioData: PortfolioData = {
  hero: {
    name: "Enzo Lucchesi",
    title: "IT Professional",
    tagline: "Building digital solutions with passion and precision",
    avatar: "img/avatar.jpg"
  },
  about: {
    bio: "Experienced IT professional with a passion for creating innovative digital solutions. Specializing in full-stack development, cloud architecture, and modern web technologies.",
    highlights: [
      "5+ years of professional experience",
      "Full-stack development expertise",
      "Cloud architecture and DevOps",
      "Strong problem-solving skills"
    ],
    image: "img/about-photo.jpg"
  },
  experience: [
    {
      id: "exp-1",
      company: "Tech Company",
      position: "Senior Developer",
      duration: "2021 - Present",
      location: "Remote",
      description: [
        "Led development of microservices architecture",
        "Mentored junior developers",
        "Implemented CI/CD pipelines"
      ],
      technologies: ["React", "Node.js", "AWS", "Docker"]
    },
    {
      id: "exp-2",
      company: "Startup Inc",
      position: "Full Stack Developer",
      duration: "2019 - 2021",
      location: "San Francisco, CA",
      description: [
        "Built scalable web applications",
        "Collaborated with cross-functional teams",
        "Optimized database performance"
      ],
      technologies: ["Vue.js", "Python", "PostgreSQL"]
    }
  ],
  skills: [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Vue.js", level: 80 },
        { name: "CSS/Tailwind", level: 85 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 80 },
        { name: "PostgreSQL", level: 75 },
        { name: "MongoDB", level: 70 }
      ]
    },
    {
      category: "DevOps",
      skills: [
        { name: "Docker", level: 80 },
        { name: "AWS", level: 75 },
        { name: "CI/CD", level: 85 },
        { name: "Kubernetes", level: 65 }
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management",
      image: "img/projects/ecommerce.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/username/ecommerce",
      demo: "https://demo.example.com",
      featured: true
    },
    {
      id: "proj-2",
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates",
      image: "img/projects/taskapp.jpg",
      technologies: ["Vue.js", "Firebase", "Vuex"],
      github: "https://github.com/username/taskapp",
      featured: false
    },
    {
      id: "proj-3",
      title: "Analytics Dashboard",
      description: "Data visualization dashboard for business intelligence",
      image: "img/projects/analytics.jpg",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      demo: "https://analytics.example.com",
      featured: true
    }
  ],
  contact: {
    email: "enzo@example.com",
    linkedin: "https://linkedin.com/in/enzolucchesi",
    github: "https://github.com/enzolucchesi",
    twitter: "https://twitter.com/enzolucchesi",
    location: "San Francisco, CA"
  }
};
