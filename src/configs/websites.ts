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
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/512px-ChatGPT_logo.svg.png",
        link: "https://openai.com/"
      },
      {
        id: "anthropic",
        title: "Anthropic",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Anthropic_logo.svg/512px-Anthropic_logo.svg.png",
        link: "https://www.anthropic.com/"
      },
      {
        id: "langchain",
        title: "LangChain",
        img: "https://python.langchain.com/img/brand/wordmark.png",
        link: "https://python.langchain.com/"
      },
      {
        id: "aws",
        title: "AWS Console",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/512px-Amazon_Web_Services_Logo.svg.png",
        link: "https://aws.amazon.com/"
      },
      {
        id: "azure",
        title: "Azure Portal",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/512px-Microsoft_Azure.svg.png",
        link: "https://portal.azure.com/"
      },
      {
        id: "stackoverflow",
        title: "Stack Overflow",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/512px-Stack_Overflow_icon.svg.png",
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
        img: "https://ceeyu-strapi.ams3.digitaloceanspaces.com/Krebs_On_Security_060753768c.png",
        link: "https://krebsonsecurity.com/"
      },
      {
        id: "nist",
        title: "NIST",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/NIST_logo.svg/512px-NIST_logo.svg.png",
        link: "https://www.nist.gov/"
      },
      {
        id: "ansible-docs",
        title: "Ansible Docs",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Ansible_logo.svg/512px-Ansible_logo.svg.png",
        link: "https://docs.ansible.com/"
      },
      {
        id: "python-docs",
        title: "Python Docs",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/512px-Python-logo-notext.svg.png",
        link: "https://docs.python.org/"
      }
    ]
  }
};

export default websites;
