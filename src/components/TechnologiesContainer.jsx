import {
  DiGit,
  DiJsBadge,
  DiReact,
} from "react-icons/di";
import { FiFigma } from "react-icons/fi";

import "../styles/components/technologiescontainer.sass";

const technologies = [

  {
    id: "js", name: "JavaScript", icon: <DiJsBadge />,
    text: "Manipulação do DOM, Frameworks, Bibliotecas, APIs, HTML e CSS "
  },
  {
    id: "react", name: "React", icon: <DiReact />,
    text: "React Fundamentals, Componentização, Hooks, Roteamento, APIs e Bibliotecas "
  },
  {
    id: "git", name: "Git", icon: <DiGit />,
    text: "Versionamento, Git Workflow, Branching, Merging, GitHub e GitLab "
  },
  {
    id: "figma", name: "Figma", icon: <FiFigma />,
    text: "Prototipagem, Design de Interface, Responsividade, Feedback e Iteração "
  },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            <span>{tech.icon}</span>
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;