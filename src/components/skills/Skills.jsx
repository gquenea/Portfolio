import "./Skills.scss";
import SkillCard from "./skillCard/SkillCard.jsx";
import skills from "../../data/skills";

export default function Skills() {
  return (
    <div className="skills">
      <h2>Compétences</h2>
      <div className="cards-container">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}
