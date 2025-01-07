import React from "react";
import "./ProjectCard.scss";

export default function ProjectCard({
  project,
  isHovered,
  isFaded,
  onMouseEnter,
  onMouseLeave,
}) {
  return (
    <div
      className={`projectCard ${isFaded ? "faded" : ""}`} // Applique 'faded' aux autres cartes
      onMouseEnter={onMouseEnter} // Met à jour l'état lors du survol
      onMouseLeave={onMouseLeave} // Réinitialise l'état lors du départ de la souris
    >
      <img src={project.image} alt={project.name} />
      <div className="title-and-description">
        <h4>{project.name}</h4>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
