import testLogo from "../assets/skillsLogo/testLogo.png";
import devLogo from "../assets/skillsLogo/codeLogo.png";
import organisationLogo from "../assets/skillsLogo/organisationLogo.png";

const skills = [
    {
      name: "Test logiciel",
      underlineColor: "#DF058D",
      description:
        "Rédaction de cahier de recettes,de bilan de campagne et de revue d'exigences. Connaissance des tests exploratoires, tests de non régression, tests d'intgration, tests système et des automatisés avec Cypress.",
      icon: testLogo,
    },
    {
      name: "Développement",
      underlineColor: "#2C49D8",
      description:
        "Connaissance des langages HTML, CSS, JavaScript, TypeScript, React, SQL et gestion de BDD. Notions en Angular, php, sympfony et docker. Utilisation de GitHub.",
      icon: devLogo,
    },
    {
      name: "Organisation",
      underlineColor: "#FF6B2B",
      description:
        "Connaissance du fonctionnement Agile/SCRUM et des outils de gestion tel que jira, trello, Azur Devops. Notions en excel et suite office. Bonne rédaction.",
      icon: organisationLogo,
    },
  ];

  export default skills