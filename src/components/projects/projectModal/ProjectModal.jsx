import ReactModal from "react-modal";
import "./ProjectModal.scss";
import cross from "../../../assets/modalIcons/cross.png";
import gitHubLogo from "../../../assets/modalIcons/gitHubLogo.png";
import ModalDropdown from "../../dropdowns/modalDropdown/ModalDropdown";
import { useState } from "react";

export default function ProjectModal({ project, isOpen, onClose }) {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 400); // La durée doit correspondre à celle de l'animation
  };

  if (!project) return null;
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={handleClose}
      className={`modal-content ${isClosing ? "closing" : ""}`}
      overlayClassName={`modal-overlay ${isClosing ? "closing" : ""}`}
    >
      <div className="link-and-close">
        <a
          className="link"
          href={project.gitHubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitHubLogo} alt="Logo de gitHub" />
          <p>GitHub</p>
        </a>
        <button className="close-button" onClick={handleClose}>
          <img src={cross} alt="Croix de fermeture de modal" />
        </button>
      </div>

      <div className="modal-header">
        <div className="screen-container">
          <img src={project.mainImageInScreen} alt="Ecran d'ordinateur" />
        </div>
        <h3>
          Projet <br /> <br /> {project.name}
        </h3>
      </div>
      <div className="modal-body">
        <ModalDropdown title="Description">
          <p>{project.detailedDescription}</p>
        </ModalDropdown>
        <hr />
        <ModalDropdown title="Compétences">
          <ul className="skills">
            {project.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </ModalDropdown>
        <hr />
        <ModalDropdown title="Galerie d'image">
          <div className="gallery-image">
            {project.galleryImages.map((image, index) => (
              <img key={index} src={image} alt="Gallerie d'image" />
            ))}
          </div>
        </ModalDropdown>
      </div>
    </ReactModal>
  );
}
