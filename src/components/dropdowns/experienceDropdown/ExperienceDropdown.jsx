import { useState } from "react";
import "./ExperienceDropdown.scss";
import dropdownArrow from "../../../assets/dropdownIcons/dropdownArrow.png";
import buildingIcon from "../../../assets/dropdownIcons/buildingIcon.png";
import pinIcon from "../../../assets/dropdownIcons/pinIcon.png";
import { useTranslation } from "react-i18next";

export default function ExperienceDropdown({ experience }) {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div id="experience-dropdown">
      <div className="dropdown-title-box" onClick={toggleDropdown}>
        <div>
          <h3>{t(`experiences.${experience.key}.title`)}</h3>
        </div>
        <div className="date-and-arrow">
          <p className="date">{t(`experiences.${experience.key}.date`)}</p>
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
              <p>{experience.enterpriseName}</p>
            </div>
            <div className="localisation">
              <img src={pinIcon} alt="Icon de localisation" />
              <p>{experience.localisation}</p>
            </div>
          </div>
          <p className="description">{t(`experiences.${experience.key}.description`)}</p>
          <ul className="skills">
              {experience.skills.map((skill, index) => (
                <li key={index}>{t(`experienceSkills.${skill}`)}</li>
              ))}
            </ul>
        </div>
        <div className="logo">
          <img
            src={experience.enterpriseLogo}
            alt={`Logo de l'entreprise ${experience.enterpriseName}`}
          />
        </div>
      </div>
    </div>
  );
}
