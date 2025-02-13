import { useState } from "react";
import "./Projects.scss";
import ProjectCard from "./projectCard/ProjectCard.jsx";
import projects from "../../data/projects.js";
import ProjectModal from "./projectModal/ProjectModal.jsx";
import { useTranslation } from "react-i18next";

export default function Projects({ aos }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const { t } = useTranslation();


  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  return (
    <div id="projects" data-aos={aos}>
      <h2>{t("projects.title")}</h2>
      <div className="cards-container">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <ProjectCard
              project={project}
              isHovered={index === hoveredIndex}
              isFaded={hoveredIndex !== null && index !== hoveredIndex}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => openModal(project)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal
        isModalOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
}
