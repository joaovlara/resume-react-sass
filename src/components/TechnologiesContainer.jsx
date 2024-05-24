
import { DiGit, DiJsBadge, DiReact, } from "react-icons/di";
import { FiFigma } from "react-icons/fi";

import TypingAnimation from "./TypingAnimation";

import "../styles/components/technologiescontainer.sass";

const technologies = [

  {
    id: "js", name: "JavaScript", icon: <DiJsBadge />,
    text: "Manipulação do DOM, Frameworks, Bibliotecas, APIs, HTML, CSS e Sass "
  },
  {
    id: "react", name: "React", icon: <DiReact />,
    text: "React, Native, Redux, Componentes, Hooks, Bibliotecas e APIs "
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
              <p className="typing-about">
                <TypingAnimation text={tech.text} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;