import { useState } from "react";
import Modal from "react-modal";
import "./Projects.scss";
import ProjectCard from "./projectCard/ProjectCard.jsx";
import projects from "../../data/projects";
import ProjectModal from "./projectModal/ProjectModal.jsx";

export default function Projects({ aos }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  Modal.setAppElement("#root");

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
      <h2>Projets</h2>
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
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
}
