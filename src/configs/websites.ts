import type { WebsitesData } from "~/types";

const websites: WebsitesData = {
  favorites: {
    title: "SNS Links",
    sites: [
      {
        id: "my-blog",
        title: "Website",
        img: "img/ui/enzo-avatar.png",
        link: "https://enzolucchesi.com",
        inner: true
      },
      {
        id: "my-github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/lucchesi-sec"
      },
      {
        id: "my-linkedin",
        title: "Linkedin",
        img: "img/sites/linkedin.svg",
        link: "https://www.linkedin.com/in/enzolucchesi"
      },
      {
        id: "my-email",
        title: "Email",
        img: "img/sites/gmail.svg",
        link: "mailto:enzo@droxa.net"
      }
    ]
  },
  freq: {
    title: "Frequently Visited",
    sites: [
      {
        id: "github",
        title: "Github",
        img: "img/sites/github.svg",
        link: "https://github.com/"
      },
      {
        id: "arxiv",
        title: "arXiv",
        img: "img/sites/arxiv.png",
        link: "https://arxiv.org/"
      },
      {
        id: "hugging-face",
        title: "Hugging Face",
        img: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
        link: "https://huggingface.co/"
      },
      {
        id: "openai",
        title: "OpenAI",
        img: "https://openai.com/favicon.ico",
        link: "https://openai.com/"
      },
      {
        id: "anthropic",
        title: "Anthropic",
        img: "https://www.anthropic.com/favicon.ico",
        link: "https://www.anthropic.com/"
      },
      {
        id: "langchain",
        title: "LangChain",
        img: "https://python.langchain.com/img/favicon.ico",
        link: "https://python.langchain.com/"
      },
      {
        id: "aws",
        title: "AWS Console",
        img: "https://aws.amazon.com/favicon.ico",
        link: "https://aws.amazon.com/"
      },
      {
        id: "azure",
        title: "Azure Portal",
        img: "https://azure.microsoft.com/favicon.ico",
        link: "https://portal.azure.com/"
      },
      {
        id: "stackoverflow",
        title: "Stack Overflow",
        img: "https://stackoverflow.com/favicon.ico",
        link: "https://stackoverflow.com/"
      },
      {
        id: "reddit",
        title: "Reddit",
        img: "img/sites/reddit.svg",
        link: "https://www.reddit.com/"
      },
      {
        id: "hacker-news",
        title: "Hacker News",
        img: "img/sites/hacker.svg",
        link: "https://news.ycombinator.com/"
      },
      {
        id: "aideadline",
        title: "AI Deadlines",
        img: "https://aideadlin.es/static/img/favicon.png",
        link: "https://aideadlin.es/",
        inner: true
      },
      {
        id: "cybersecurity-news",
        title: "Krebs on Security",
        img: "https://krebsonsecurity.com/favicon.ico",
        link: "https://krebsonsecurity.com/"
      },
      {
        id: "nist",
        title: "NIST",
        img: "https://www.nist.gov/favicon.ico",
        link: "https://www.nist.gov/"
      },
      {
        id: "ansible-docs",
        title: "Ansible Docs",
        img: "https://docs.ansible.com/favicon.ico",
        link: "https://docs.ansible.com/"
      },
      {
        id: "python-docs",
        title: "Python Docs",
        img: "https://docs.python.org/favicon.ico",
        link: "https://docs.python.org/"
      }
    ]
  }
};

export default websites;
