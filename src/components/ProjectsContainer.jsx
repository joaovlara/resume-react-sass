import React from "react";
import "../styles/components/projectscontainer.sass";
import Avatar from "../img/img.png";

const projects = [
  {
    id: "1", nome: "Calendar", img: Avatar,
    link: "https://github.com/joaovlara/calendar.git",
    text: "Descrição do projeto 1"
  },
  {
    id: "2", nome: "Game-Hub", img: Avatar,
    link: "https://github.com/joaovlara/game-hub.git",
    text: "Descrição do projeto 2"
  },
  {
    id: "3", nome: "Weather-App", img: Avatar,
    link: "https://github.com/joaovlara/weather-app.git",
    text: "Descrição do projeto 3"
  }
];

const ProjectsContainer = () => {
  return (
    <section className="projects-container">
      <h2>Projetos</h2>
      <div className="cards-grid">
        {projects.map(project => (
          <div className="project-card" key={project.id}>
            <img src={project.img} alt={project.nome} />

            <div className="card-info">
              <h3 className="card-title">{project.nome}</h3>
              <p className="card-text">{project.text}</p>
            </div>

            <button href={project.link} className="btn-card">Ver no GitHub</button>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ProjectsContainer;
