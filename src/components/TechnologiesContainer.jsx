import {
  DiCss3,
  DiJsBadge,
  DiReact,
} from "react-icons/di";
import { FaFigma } from "react-icons/fa";

import "../styles/components/technologiescontainer.sass";

const technologies = [ 

  { id: "js", name: "JavaScript", icon: <DiJsBadge /> },  
  { id: "react", name: "React", icon: <DiReact /> },
  { id: "css", name: "CSS3", icon: <DiCss3 /> },
  { id: "figma", name: "Figma", icon: <FaFigma />},
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;