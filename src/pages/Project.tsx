import { FC } from "react";
import { projectList } from "../data/project-data";
import ImageCarousel from "../components/ImageCarousel";
import "../styles/project-style.css";

const Projects: FC = () => {
  // Função para formatar texto com negrito usando React nodes
  const renderWithBold = (text: string) => {
    return text.split('**').map((segment, index) => 
      index % 2 === 1 ? (
        <strong key={index} className="bold-text">{segment}</strong>
      ) : (
        segment
      )
    );
  };

  return (
    <section className="projects">
      {projectList.map((project) => (
        <div key={project.id} className="project-card">
          <div className="project-info">
            <h1 className="project-title">{project.name}</h1>
            <ImageCarousel images={project.images} />
            <div className="project-description">
              {project.description.map((paragraph, index) => (
                <p key={index}>
                  {renderWithBold(paragraph)}
                </p>
              ))}
            </div>
            <h2 className="technologies-title">Technologies</h2>
            <ul className="project-tech">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;