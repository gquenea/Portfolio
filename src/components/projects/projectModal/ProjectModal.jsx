import ReactModal from "react-modal";
import "./ProjectModal.scss";
import baseScreen from "../../../assets/modalPictures/baseScreen.png";
import cross from "../../../assets/modalPictures/cross.png";
import gitHubLogo from "../../../assets/modalPictures/gitHubLogo.png";
import ModalDropdown from "../../dropdowns/modalDropdown/ModalDropdown";

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!project) return null;
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="modal-content"
      overlayClassName="modal-overlay"
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
        <button className="close-button" onClick={onClose}>
          <img src={cross} alt="Croix de fermeture de modal" />
        </button>
      </div>

      <div className="modal-header">
        <h3>
          Projet <br /> <br /> {project.name}
        </h3>
        <div className="screen-container">
          <img
            className="base-screen"
            src={baseScreen}
            alt="Ecran d'ordinateur"
          />
          {/* {project.mainImage && (
          <img
            className="main-image"
            src={project.mainImage}
            alt={project.name}
          />
        )} */}
        </div>
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
        <ModalDropdown title="Gallerie d'image">
          <div className="additional-images">
            {project.galleryImages.map((image, index) => (
              <img key={index} src={image} alt="Gallerie d'image" />
            ))}
          </div>
        </ModalDropdown>
      </div>
    </ReactModal>
  );
}
