import ExperienceDropdown from "../dropdowns/experienceDropdown/ExperienceDropdown";
import "./Experiences.scss";
import experiences from "../../data/experiences";

export default function Experiences({ aos }) {
  return (
    <div id="experiences" data-aos={aos}>
      <h2>Expériences</h2>
      {experiences.map((experience, index) => (
        <ExperienceDropdown
          key={index}
          title={experience.title}
          date={experience.date}
          localisation={experience.localisation}
          enterpriseName={experience.enterpriseName}
          description={experience.description}
          enterpriseLogo={experience.enterpriseLogo}
          skills={experience.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        ></ExperienceDropdown>
      ))}
    </div>
  );
}
