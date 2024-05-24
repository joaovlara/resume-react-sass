
import { FaRegCalendarAlt, FaGamepad } from "react-icons/fa";
import { FaFolderTree } from "react-icons/fa6";
import { TiWeatherPartlySunny } from "react-icons/ti";

import TypingAnimation from "./TypingAnimation";

import "../styles/components/projectscontainer.sass";

const projects = [

  {
    id: "calendar", name: "Calendar", icon: <FaRegCalendarAlt />,
    text: "Aplicação React que permite gerenciar grupos de atividades em determinados dias da semana, realizar sorteios de equipes e exibir os nomes dos membros",
    link: "https://github.com/joaovlara/calendar.git",

  },
  {
    id: "game", name: "Game-HUB", icon: <FaGamepad />,
    text: "Aplicação React em typescript, uma interface responsiva com componentes e objetos que apresentam dados de uma API de informações de jogos.",
    link: "https://github.com/joaovlara/game-hub.git",
  },
  {
    id: "crud", name: "CRUD", icon: <FaFolderTree />,
    link: "https://github.com/joaovlara/CRUD-FullStack.git",
    text: "Aplicação React para uma interface CRUD com integração ao banco de dados MySQL, utilizando Node.js e endpoints, além do desenvolvimento completo da interface."

  },
  {
    id: "weather", name: "Weather", icon: <TiWeatherPartlySunny />,
    text: "Aplicação React em javascript que exibe a previsão do tempo das cidades pesquisadas usando dados integrados da API do OpenWeatherMap.",
    link: "https://github.com/joaovlara/weather-app.git",

  },
];

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos </h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" id={project.id} key={project.id}>
            <div className="card-body">
              <span>{project.icon}</span>
              <div className="project-info">
                <h3>{project.name}</h3>
                <p className="typing-about"><TypingAnimation text={project.text} /></p>
              </div>
            </div>
            <a href={project.link} className="btn-card" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsContainer;