import React from "react";
import "./ProjectCard.scss";
import { useTranslation } from "react-i18next";


export default function ProjectCard({
  project,
  isFaded,
  onMouseEnter,
  onMouseLeave,
  onClick,
  aos,
  aosDelay,
}) {
    const { t } = useTranslation();
  
  return (
    <div
      className={`projectCard ${isFaded ? "faded" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
      data-aos={aos}
      data-aos-delay={aosDelay}
    >
      <img src={project.mainImage} alt={`Apperçu du site ${project.name}`} />
      <div className="title-and-description">
        <div className="title-and-type">
          <h3>{t(`projects.${project.key}.name`)}</h3>
          <p>{t(`projects.${project.key}.type`)}</p>
        </div>
        <p>{t(`projects.${project.key}.description`)}</p>
      </div>
    </div>
  );
}
