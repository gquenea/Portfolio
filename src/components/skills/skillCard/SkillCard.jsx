import "./SkillCard.scss";

export default function SkillCard({ skill }) {
  return (
    <div className="skillCard">
      <div className="card-header">
        <img src={skill.icon} alt={skill.name} />
        <h3 style={{ "--bar-color": skill.underlineColor }}>{skill.name}</h3>
      </div>
      <div className="card-content">
        <div className="decoration">
          <div className="top-div">&lt;div&gt;</div>
          <div className="vertical-line"></div>

          <div className="bot-div">&lt;/div&gt;</div>
        </div>
        <p>{skill.description}</p>
      </div>
    </div>
  );
}
