import type { TerminalData } from "~/types";

const terminal: TerminalData[] = [
  {
    id: "about",
    title: "about",
    type: "folder",
    children: [
      {
        id: "about-bio",
        title: "bio.txt",
        type: "file",
        content: (
          <div className="py-1">
            <div>
              Hi, I'm Enzo Lucchesi. I'm an IT Systems & Procurement Manager with 5+ years
              of experience in systems administration, network infrastructure, and
              automation. Currently pursuing my B.S. in Information Technology while
              working on cybersecurity and automation projects.
            </div>
          </div>
        )
      },
      {
        id: "about-interests",
        title: "interests.txt",
        type: "file",
        content:
          "Automation / GenAI / Machine Learning / LLM Integration / Infrastructure as Code"
      },
      {
        id: "about-who-cares",
        title: "who-cares.txt",
        type: "file",
        content:
          "I'm actively transitioning into AI/ML engineering and automation. Open to collaboration on innovative AI projects and automation solutions."
      },
      {
        id: "about-contact",
        title: "contact.txt",
        type: "file",
        content: (
          <ul className="list-disc ml-6">
            <li>
              Email:{" "}
              <a
                className="text-blue-300"
                href="mailto:enzo@droxa.net"
                target="_blank"
                rel="noreferrer"
              >
                enzo@droxa.net
              </a>
            </li>
            <li>
              Github:{" "}
              <a
                className="text-blue-300"
                href="https://github.com/lucchesi-sec"
                target="_blank"
                rel="noreferrer"
              >
                @lucchesi-sec
              </a>
            </li>
            <li>
              Linkedin:{" "}
              <a
                className="text-blue-300"
                href="https://www.linkedin.com/in/enzolucchesi"
                target="_blank"
                rel="noreferrer"
              >
                enzolucchesi
              </a>
            </li>
            <li>
              Personal Website:{" "}
              <a
                className="text-blue-300"
                href="https://enzolucchesi.com"
                target="_blank"
                rel="noreferrer"
              >
                https://enzolucchesi.com
              </a>
            </li>
          </ul>
        )
      }
    ]
  },
  {
    id: "about-dream",
    title: "my-dream.cpp",
    type: "file",
    content: (
      <div className="py-1">
        <div>
          <span className="text-yellow-400">while</span>(
          <span className="text-blue-400">sleeping</span>) <span>{"{"}</span>
        </div>
        <div>
          <span className="text-blue-400 ml-9">money</span>
          <span className="text-yellow-400">++</span>;
        </div>
        <div>
          <span>{"}"}</span>
        </div>
      </div>
    )
  }
];

export default terminal;
