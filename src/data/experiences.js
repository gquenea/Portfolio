import ocrLogo from "../assets/enterpriseLogo/ocrLogo.webp";
import lamsterLogo from "../assets/enterpriseLogo/lamsterLogo.webp";
import dtekLogo from "../assets/enterpriseLogo/dtekLogo.webp";
import hbLogo from "../assets/enterpriseLogo/hbLogo.webp";

const experiences = [
  {
    key: "openClassRooms",
    localisation: "Lyon",
    enterpriseName: "OpenClassRooms",
    enterpriseLogo: ocrLogo,
    skills: [
      "Plans de test",
      "Scénarios de tests",
      "Analyse des résultats de tests",
      "Gestion de projet",
      "Automatisation de test (Cypress)",
    ],
  },
  {
    key: "lamster",
    localisation: "Lyon",
    enterpriseName: "Lamster",
    enterpriseLogo: lamsterLogo,
    skills: ["React", "NodeJs", "Base de données", "Agile", "Infrastructure"],
  },
  {
    key: "dtek",
    localisation: "Lyon",
    enterpriseName: "Dtek Consulting",
    enterpriseLogo: dtekLogo,
    skills: ["Angular", "Base de données", "Azur devops"],
  },
  {
    key: "humanBooster",
    localisation: "Lyon",
    enterpriseName: "Human Booster",
    enterpriseLogo: hbLogo,
    skills: [
      "Algorithme",
      "Versionning",
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "Symfony",
      "Base de données",
    ],
  },
];

export default experiences;
