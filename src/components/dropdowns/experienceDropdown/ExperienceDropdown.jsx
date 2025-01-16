import { useState } from "react";
import "./ExperienceDropdown.scss";
import dropdownArrow from "../../../assets/dropdownArrow.png";
import buildingIcon from "../../../assets/buildingIcon.png"
import pinIcon from "../../../assets/pinIcon.png"

export default function ExperienceDropdown({
  title,
  date,
  localisation,
  enterpriseName,
  description,
  enterpriseLogo,
  skills,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="experience-dropdown">
      <div className="dropdown-title-box" onClick={toggleDropdown}>
        <div>
          <h4>{title}</h4>
        </div>
        <div className="date-and-arrow">
          <p className="date">{date}</p>
          <img
            src={dropdownArrow}
            alt="dropdown icon"
            className={isOpen ? "rotated" : ""}
          />
        </div>
      </div>
      <div className={`dropdown-content ${isOpen ? "open" : "closed"}`}>
        <div className="content-header">
          <div className="enterprise-name">
            <img src={buildingIcon} alt="Logo d'entreprise'" />
            <p>{enterpriseName}</p>
          </div>
          <div className="localisation">
            <img src={pinIcon} alt="Logo de localisation" />
            <p>{localisation}</p>
          </div>
        </div>
        <div className="description-and-logo">
          <p className="description">{description}</p>
          <div className="logo">
            <img
              src={enterpriseLogo}
              alt={`Logo de l'entreprise ${enterpriseName}`}
            />
          </div>
        </div>
        <ul className="skills">{skills}</ul>
      </div>
    </div>
  );
}
