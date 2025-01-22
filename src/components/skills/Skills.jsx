import "./Skills.scss";
import SkillCard from "./skillCard/SkillCard.jsx";
import skills from "../../data/skills";

export default function Skills({ aos }) {
  return (
    <div id="skills">
      <h2 data-aos={aos}>Compétences</h2>
      <div className="cards-container">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} aos={skill.aos} />
        ))}
      </div>
    </div>
  );
}
