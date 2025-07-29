export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  skills: SkillItem[];
}

export interface SkillItem {
  name: string;
  items: string[];
}

export const skillsData: SkillCategory[] = [
  {
    id: "ai-ml",
    title: "AI/ML & GenAI",
    icon: "🤖",
    skills: [
      {
        name: "LLM & GenAI",
        items: [
          "LangChain",
          "OpenAI API",
          "Claude API",
          "Prompt Engineering",
          "RAG Pipelines"
        ]
      },
      {
        name: "ML Frameworks",
        items: ["PyTorch basics", "Scikit-learn", "AutoML tools", "Model deployment"]
      },
      {
        name: "AI Integration",
        items: [
          "MCP server development",
          "AutoGen framework",
          "Multi-agent systems",
          "AI workflow automation"
        ]
      },
      {
        name: "AI Applications",
        items: [
          "Security ML",
          "Predictive analytics",
          "Pattern recognition",
          "Intelligent automation"
        ]
      }
    ]
  },
  {
    id: "automation",
    title: "Automation & DevOps",
    icon: "⚡",
    skills: [
      {
        name: "Automation Tools",
        items: [
          "Ansible (23+ roles)",
          "PowerShell",
          "Python automation",
          "Bash scripting"
        ]
      },
      {
        name: "Infrastructure as Code",
        items: [
          "Ansible playbooks",
          "Configuration management",
          "GitOps",
          "CI/CD pipelines"
        ]
      },
      {
        name: "API & Integration",
        items: ["REST APIs", "Webhook automation", "Zapier", "Custom integrations"]
      },
      {
        name: "Cloud Automation",
        items: ["AWS Boto3", "Cloud orchestration", "Serverless concepts", "Auto-scaling"]
      }
    ]
  },
  {
    id: "development",
    title: "Software Development",
    icon: "💻",
    skills: [
      {
        name: "Languages",
        items: ["Python (primary)", "TypeScript", "PowerShell", "Bash", "YAML"]
      },
      {
        name: "Development Practices",
        items: [
          "Async programming",
          "API development",
          "Error handling",
          "Testing basics"
        ]
      },
      {
        name: "Tools & Frameworks",
        items: ["Git/GitHub", "VS Code", "Docker basics", "Virtual environments"]
      }
    ]
  },
  {
    id: "infrastructure",
    title: "Infrastructure & Security",
    icon: "🔐",
    skills: [
      {
        name: "Cloud & Infrastructure",
        items: [
          "AWS services",
          "Linux/Windows admin",
          "Network automation",
          "Virtualization"
        ]
      },
      {
        name: "Security Automation",
        items: [
          "Security scanning",
          "Compliance automation",
          "Incident response",
          "Vulnerability management"
        ]
      },
      {
        name: "Professional IT",
        items: [
          "Cost optimization (75%)",
          "System architecture",
          "Performance tuning",
          "Documentation"
        ]
      }
    ]
  }
];
