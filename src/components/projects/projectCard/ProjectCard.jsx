import React from "react";
import "./ProjectCard.scss";

export default function ProjectCard({
  project,
  isFaded,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) {
  return (
    <div
      className={`projectCard ${isFaded ? "faded" : ""}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <img src={project.mainImage} alt={project.name} />
      <div className="title-and-description">
        <div className="title-and-type">
          <h4>{project.name}</h4>
          <p>{project.type}</p>
        </div>
        <p>{project.description}</p>
      </div>
    </div>
  );
}
