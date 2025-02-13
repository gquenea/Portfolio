import ReactModal from "react-modal";
import "./ProjectModal.scss";
import cross from "../../../assets/modalIcons/cross.png";
import gitHubLogo from "../../../assets/modalIcons/gitHubLogo.png";
import ModalDropdown from "../../dropdowns/modalDropdown/ModalDropdown.jsx";
import { useState, useContext } from "react";
import { useTranslation } from "react-i18next";
import { ThemeContext } from "../../context/ThemeContext.jsx";

export default function ProjectModal({ project, isModalOpen, onClose }) {
  const [isClosing, setIsClosing] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const { t } = useTranslation();

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 400);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setIsImageModalOpen(true);
  };

  const handleImageModalClose = () => {
    setIsImageModalOpen(false);
  };

  const imageInScreen =
    project && theme === "dark"
      ? project.darkImageInScreen
      : project?.lightImageInScreen;

  if (!project) return null;
  return (
    <>
      <ReactModal
        isOpen={isModalOpen}
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
            <img src={imageInScreen} alt="Ecran d'ordinateur" />
          </div>
          <h3>
            Projet <br /> <br /> {t(`projects.${project.key}.name`)}
          </h3>
        </div>
        <div className="modal-body">
          <ModalDropdown title="Description">
            <p>{t(`projects.${project.key}.detailedDescription`)}</p>
          </ModalDropdown>
          <hr />
          <ModalDropdown title="Compétences">
            <ul className="skills">
              {project.skills.map((skill, index) => (
                <li key={index}>{t(`projectSkills.${skill}`)}</li>
              ))}
            </ul>
          </ModalDropdown>
          <hr />
          <ModalDropdown title="Galerie d'image">
            <div className="gallery-image">
              {project.galleryImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Gallerie d'image"
                  onClick={() => handleImageClick(image)}
                />
              ))}
            </div>
          </ModalDropdown>
        </div>
      </ReactModal>

      {/* Image modal */}
      <ReactModal
        isOpen={isImageModalOpen}
        onRequestClose={handleImageModalClose}
        className="image-modal-content"
        overlayClassName="image-modal-overlay"
      >
        <div className="image-modal-header">
          <button className="close-button" onClick={handleImageModalClose}>
            <img src={cross} alt="Croix de fermeture" />
          </button>
        </div>
        <div className="image-modal-body">
          <img
            src={selectedImage}
            alt={`Visualisation d'image du projet ${project.name}`}
          />
        </div>
      </ReactModal>
    </>
  );
}
