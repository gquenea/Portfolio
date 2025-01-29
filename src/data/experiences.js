import ocrLogo from "../assets/enterpriseLogo/ocrLogo.webp";
import lamsterLogo from "../assets/enterpriseLogo/lamsterLogo.webp";
import dtekLogo from "../assets/enterpriseLogo/dtekLogo.webp";
import hbLogo from "../assets/enterpriseLogo/hbLogo.webp";

const experiences = [
  {
    title: "Formation testeur logiciel",
    date: "Juillet 2024 - Février 2025",
    localisation: "Lyon",
    enterpriseName: "OpenClassRooms",
    description:
      "Formation en ligne avec suivi personnalisé sur les tenants et aboutissants du métier de testeur logiciels. Apprentissage de la garanti qualité des applications, de la détéction des anomalies et de l'assurance du bon fonctionnement des logiciels. Utilisations des outils de tests comme Jira ou Cypress et initiation aux différents type de tests",
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
    title: "Développeur Full Stack",
    date: "Novembre 2023 - Février 2024",
    localisation: "Lyon",
    enterpriseName: "Lamster",
    description:
      "Développeur full stack au sein d'une startup de création de solution logiciel pour des entreprise de la restauration et de l'hôtelerie. L'application sur laquelle j'intervenais consistait à informatiser et à facilité la maintenance des établissements, que ce soir pour le suivi des équipements, la gestion des intervention ou la supervision des contrats.",
    enterpriseLogo: lamsterLogo,
    skills: ["React", "NodeJs", "Base de données", "Agile", "Infrastructure"],
  },
  {
    title: "Développeur Full Stack",
    date: "Octobre 2022 - Octobre 2023",
    localisation: "Lyon",
    enterpriseName: "Dtek Consulting",
    description:
      "Développeur full stack dans une entreprise de création de solution logiciel pour une entreprise de transport. J'intervenais sur un groupe d'application qui avait pour but de subvenir à l'intégralité des besoins du client. Création de feature et correction de bug divers.",
    enterpriseLogo: dtekLogo,
    skills: ["Angular", "Base de données", "Azur devops"],
  },
  {
    title: "Formation développeur Full Stack",
    date: "Juin 2021 - Juin 2022",
    localisation: "Lyon",
    enterpriseName: "Human Booster",
    description:
      "Formation d'un an sur les bases du métier de développeur full stack. Différents aspects et technologies ont été vus, de la création de maquette à mise en ligne d'un site. Dans les deux derniers moi de la formation j'ia pu éffectuer un stage dans l'entreprise Barzool. ",
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
