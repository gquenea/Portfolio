import { useState } from "react";
import "./ExperienceDropdown.scss";
import dropdownArrow from "../../../assets/dropdownIcons/dropdownArrow.png";
import buildingIcon from "../../../assets/dropdownIcons/buildingIcon.png";
import pinIcon from "../../../assets/dropdownIcons/pinIcon.png";

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
    <div id="experience-dropdown">
      <div className="dropdown-title-box" onClick={toggleDropdown}>
        <div>
          <h3>{title}</h3>
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
        <div className="text-information">
          <div className="content-header">
            <div className="enterprise-name">
              <img src={buildingIcon} alt="Icon d'entreprise'" />
              <p>{enterpriseName}</p>
            </div>
            <div className="localisation">
              <img src={pinIcon} alt="Icon de localisation" />
              <p>{localisation}</p>
            </div>
          </div>
          <p className="description">{description}</p>
          <ul className="skills">{skills}</ul>
        </div>
        <div className="logo">
          <img
            src={enterpriseLogo}
            alt={`Logo de l'entreprise ${enterpriseName}`}
          />
        </div>
      </div>
    </div>
  );
}
