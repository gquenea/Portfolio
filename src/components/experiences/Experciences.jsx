import ExperienceDropdown from "../dropdowns/experienceDropdown/ExperienceDropdown.jsx";
import "./Experiences.scss";
import experiences from "../../data/experiences.js";
import { useTranslation } from "react-i18next";

export default function Experiences({ aos }) {
  const { t } = useTranslation();

  return (
    <div id="experiences" data-aos={aos}>
      <h2>{t("experience.title")}</h2>
      {experiences.map((experience, index) => (
        <ExperienceDropdown
          key={index}
          experience={experience}
        ></ExperienceDropdown>
      ))}
    </div>
  );
}
