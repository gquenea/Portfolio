import { useTranslation } from "react-i18next";
import "./SkillCard.scss";

export default function SkillCard({ skill, aos }) {
  const { t } = useTranslation();

  return (
    <div id="skillCard" data-aos={aos}>
      <div className="card-header">
        <img src={skill.icon} alt={`Icon ${t(skill.key + ".name")}`} />
        <h3 style={{ "--bar-color": skill.underlineColor }}>
          {t(`skills.${skill.key}.name`)}
        </h3>
      </div>
      <div className="card-content">
        <div className="decoration">
          <div className="top-div">&lt;div&gt;</div>
          <div className="vertical-line"></div>
          <div className="bot-div">&lt;/div&gt;</div>
        </div>
        <p>{t(`skills.${skill.key}.description`)}</p>
      </div>
    </div>
  );
}
