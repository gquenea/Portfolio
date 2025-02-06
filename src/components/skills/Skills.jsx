import "./Skills.scss";
import SkillCard from "./skillCard/SkillCard.jsx";
import skills from "../../data/skills";
import { useTranslation } from "react-i18next";


export default function Skills({ aos }) {
    const { t } = useTranslation();
  
  return (
    <div id="skills">
      <h2 data-aos={aos}>{t("skills.title")}</h2>
      <div className="cards-container">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} aos={skill.aos} />
        ))}
      </div>
    </div>
  );
}
