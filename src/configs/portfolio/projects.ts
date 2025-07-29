export interface Project {
  id: string;
  title: string;
  icon: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export const projectsData: Project[] = [
  {
    id: "ai-automation",
    title: "AI-Assisted Automation Projects",
    icon: "🤖",
    description:
      "Automation portfolio showcasing LLM integration patterns, RAG pipelines, and AI-powered workflow automation. Features comprehensive documentation and practical AI collaboration examples.",
    technologies: ["Python", "LangChain", "OpenAI", "RAG", "Automation", "LLM"],
    github: "https://github.com/lucchesi-sec/ai-assisted-automation-projects"
  },
  {
    id: "aws-mcp-server",
    title: "AWS Infrastructure Security MCP Server",
    icon: "🧠",
    description:
      "Model Context Protocol (MCP) server demonstrating advanced AI integration for AWS security analysis. Built with TypeScript, showcasing modern AI-infrastructure patterns.",
    technologies: ["TypeScript", "MCP", "AWS", "AI Integration", "LLM Tools"],
    github: "https://github.com/lucchesi-sec/aws-infrasec-mcp-server"
  },
  {
    id: "ansible-network",
    title: "Ansible Network Automation Platform",
    icon: "🌐",
    description:
      "Advanced automation platform with 23+ infrastructure roles featuring AI integration for intelligent network management. Demonstrates IaC principles with AI-enhanced decision making.",
    technologies: ["Ansible", "Python", "AI Integration", "Network Automation", "IaC"],
    github: "https://github.com/lucchesi-sec/ansible-network-automation-platform"
  },
  {
    id: "incident-response",
    title: "AI-Powered Incident Response Orchestrator",
    icon: "🚨",
    description:
      "SOAR platform with automated threat analysis using ML models. Features intelligent incident classification and automated response workflows with NIST/SANS compliance.",
    technologies: ["Python", "Machine Learning", "SOAR", "Security Automation", "AI"],
    github: "https://github.com/lucchesi-sec/incident-response-orchestrator"
  },
  {
    id: "malware-analysis",
    title: "ML-Enhanced Malware Analysis Toolkit",
    icon: "🦠",
    description:
      "Static malware analysis toolkit with YARA integration and ML-based pattern recognition. Educational tool demonstrating AI applications in security research.",
    technologies: [
      "Python",
      "YARA",
      "Machine Learning",
      "Security ML",
      "Pattern Recognition"
    ],
    github: "https://github.com/lucchesi-sec/malware-analysis-toolkit"
  },
  {
    id: "aws-security",
    title: "AWS Security Automation Suite",
    icon: "☁️",
    description:
      "Cloud security automation with async scanning architecture. Features AI-driven compliance mapping and intelligent vulnerability prioritization.",
    technologies: ["AWS", "Python", "Boto3", "AsyncIO", "Cloud Automation"],
    github: "https://github.com/lucchesi-sec/aws-security-audit-suite"
  },
  {
    id: "ssh-manager",
    title: "Automated SSH Key Lifecycle Manager",
    icon: "🔑",
    description:
      "Advanced key management automation with intelligent rotation schedules and predictive security analytics. Reduces manual overhead through smart automation.",
    technologies: ["Python", "Automation", "SSH", "Security Automation", "DevOps"],
    github: "https://github.com/lucchesi-sec/ssh-key-lifecycle-manager"
  },
  {
    id: "network-scanner",
    title: "Intelligent Network Vulnerability Scanner",
    icon: "🔍",
    description:
      "Network assessment tool with ML-enhanced vulnerability detection and automated threat prioritization using security intelligence feeds.",
    technologies: [
      "Python",
      "Network Automation",
      "ML",
      "Security",
      "Threat Intelligence"
    ],
    github: "https://github.com/lucchesi-sec/network-vulnerability-scanner"
  },
  {
    id: "linux-hardening",
    title: "Automated Linux Hardening Framework",
    icon: "🛡️",
    description:
      "Modular automation framework for Linux security hardening. Features intelligent configuration management and compliance automation.",
    technologies: ["Bash", "Python", "Automation", "Linux", "Configuration Management"],
    github: "https://github.com/lucchesi-sec/linux-server-hardening"
  }
];
