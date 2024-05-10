import React from "react";
import "../styles/components/projectscontainer.sass";
import calendar from "../img/calendar.jpg";
import crud from "../img/crud.jpg";
import weather from "../img/weather.jpg";

const projects = [
  {
    id: "1", nome: "Calendar", img: calendar,
    link: "https://github.com/joaovlara/calendar.git",
    text: "Descrição do projeto 1"
  },
  {
    id: "2", nome: "Crud-Fullstack", img: crud,
    link: "https://github.com/joaovlara/CRUD-FullStack.git",
    text: "Descrição do projeto 2"
  },
  {
    id: "3", nome: "Weather-App", img: weather,
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

            <a href={project.link} className="btn-card" target="_blank" rel="noopener noreferrer">Ver no GitHub</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsContainer;
