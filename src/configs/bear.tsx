import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "About Enzo",
    icon: "i-fa-solid:user",
    md: [
      {
        id: "about-me",
        title: "Career Pivot to AI/ML",
        file: "markdown/about-me.md",
        icon: "i-fa-solid:rocket",
        excerpt: "Leveraging 5+ years of IT expertise to build innovative AI solutions"
      },
      {
        id: "automation-journey",
        title: "My Automation Journey",
        file: "markdown/automation-journey.md",
        icon: "i-fa-solid:robot",
        excerpt: "From manual processes to AI-powered workflows that transform operations"
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: "i-octicon:repo",
    md: [
      {
        id: "ansible-network-automation",
        title: "Ansible Network Platform",
        file: "https://raw.githubusercontent.com/lucchesi-sec/ansible-network-automation-platform/main/README.md",
        icon: "i-simple-icons:ansible",
        excerpt:
          "Network automation platform with 23+ infrastructure roles and AI integration",
        link: "https://github.com/lucchesi-sec/ansible-network-automation-platform"
      },
      {
        id: "aws-security-audit",
        title: "AWS Security Audit Suite",
        file: "https://raw.githubusercontent.com/lucchesi-sec/aws-security-audit-suite/main/README.md",
        icon: "i-fa-brands:aws",
        excerpt: "Comprehensive AWS security scanning and compliance automation",
        link: "https://github.com/lucchesi-sec/aws-security-audit-suite"
      },
      {
        id: "aws-infrasec-mcp",
        title: "AWS InfraSec MCP Server",
        file: "https://raw.githubusercontent.com/lucchesi-sec/aws-infrasec-mcp-server/main/README.md",
        icon: "i-material-symbols:security",
        excerpt: "MCP server demonstrating AWS security analysis capabilities",
        link: "https://github.com/lucchesi-sec/aws-infrasec-mcp-server"
      },
      {
        id: "ai-automation-projects",
        title: "AI Automation Portfolio",
        file: "https://raw.githubusercontent.com/lucchesi-sec/ai-assisted-automation-projects/main/README.md",
        icon: "i-fa-solid:robot",
        excerpt: "Automation portfolio projects with AI collaboration features",
        link: "https://github.com/lucchesi-sec/ai-assisted-automation-projects"
      },
      {
        id: "incident-response",
        title: "Incident Response Platform",
        file: "https://raw.githubusercontent.com/lucchesi-sec/incident-response-orchestrator/main/README.md",
        icon: "i-material-symbols:emergency",
        excerpt: "Incident response orchestration with NIST/SANS compliance",
        link: "https://github.com/lucchesi-sec/incident-response-orchestrator"
      },
      {
        id: "network-vulnerability-scanner",
        title: "Network Vulnerability Scanner",
        file: "https://raw.githubusercontent.com/lucchesi-sec/network-vulnerability-scanner/main/README.md",
        icon: "i-material-symbols:radar",
        excerpt: "Comprehensive network vulnerability assessment with ethical guidelines",
        link: "https://github.com/lucchesi-sec/network-vulnerability-scanner"
      },
      {
        id: "ssh-key-manager",
        title: "SSH Key Lifecycle Manager",
        file: "https://raw.githubusercontent.com/lucchesi-sec/ssh-key-lifecycle-manager/main/README.md",
        icon: "i-fa-solid:key",
        excerpt: "Automated SSH key lifecycle management with advanced safety features",
        link: "https://github.com/lucchesi-sec/ssh-key-lifecycle-manager"
      },
      {
        id: "linux-server-hardening",
        title: "Linux Server Hardening",
        file: "https://raw.githubusercontent.com/lucchesi-sec/linux-server-hardening/main/README.md",
        icon: "i-fa-brands:linux",
        excerpt: "Comprehensive modular framework for automated Linux server hardening",
        link: "https://github.com/lucchesi-sec/linux-server-hardening"
      },
      {
        id: "malware-analysis",
        title: "Malware Analysis Toolkit",
        file: "https://raw.githubusercontent.com/lucchesi-sec/malware-analysis-toolkit/main/README.md",
        icon: "i-material-symbols:bug-report",
        excerpt: "Educational static malware analysis with YARA integration",
        link: "https://github.com/lucchesi-sec/malware-analysis-toolkit"
      },
      {
        id: "password-validator",
        title: "Password Strength Validator",
        file: "https://raw.githubusercontent.com/lucchesi-sec/password-strength-validator/main/README.md",
        icon: "i-material-symbols:password",
        excerpt: "Advanced password analysis with NIST SP 800-63B compliance",
        link: "https://github.com/lucchesi-sec/password-strength-validator"
      },
      {
        id: "powershell-automation",
        title: "PowerShell Automation",
        file: "https://raw.githubusercontent.com/lucchesi-sec/powershell-automation/main/README.md",
        icon: "i-simple-icons:powershell",
        excerpt: "PowerShell automation scripts for Windows administration",
        link: "https://github.com/lucchesi-sec/powershell-automation"
      }
    ]
  }
];

export default bear;
