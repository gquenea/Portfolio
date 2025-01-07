import React, { useState } from "react";
import "./Projects.scss";
import ProjectCard from "./projectCard/ProjectCard.jsx";
import bookiImg from "../../assets/booki.png";

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState(null); // État pour suivre la carte survolée

  const projects = [
    {
      image: bookiImg,
      name: "Booki",
      description: "Projet de blabla pour blabla qui permet à terme de blabla.",
    },
    {
      image: bookiImg,
      name: "EcoBlissBath",
      description: "Un autre projet de blabla pour blabla.",
    },
    {
      image: bookiImg,
      name: "Kasa",
      description: "Encore un projet de blabla.",
    },
    {
      image: bookiImg,
      name: "Sophie Bluel",
      description: "Encore un projet de blabla.",
    },
    {
      image: bookiImg,
      name: "Print-it",
      description: "Encore un projet de blabla.",
    },
    {
      image: bookiImg,
      name: "The dojo",
      description: "Encore un projet de blabla.",
    },
    {
      image: bookiImg,
      name: "My-money",
      description: "Encore un projet de blabla.",
    },
    {
      image: bookiImg,
      name: "Magic-memory",
      description: "Encore un projet de blabla.",
    },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="projects">
      <h2>Projets</h2>
      <div className="cards-container">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            isHovered={index === hoveredIndex} // Vérifie si c'est la carte survolée
            isFaded={hoveredIndex !== null && index !== hoveredIndex} // Applique 'faded' aux autres cartes quand une carte est survolée
            onMouseEnter={() => handleMouseEnter(index)} // Met à jour l'index lors du survol
            onMouseLeave={handleMouseLeave} // Réinitialise l'état lors du départ de la souris
          />
        ))}
      </div>
    </div>
  );
}
