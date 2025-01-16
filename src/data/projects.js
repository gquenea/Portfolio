import bookiImg from "../assets/ProjectsPictures/booki.png";
import ecoBlissBath from "../assets/ProjectsPictures/ecoBlissBath.png";
import kasa from "../assets/ProjectsPictures/kasa.png";
import sophieBluel from "../assets/ProjectsPictures/sophieBluel.png";
import menuMaker from "../assets/ProjectsPictures/menuMaker.png";
import theDojo from "../assets/ProjectsPictures/theDojo.png";
import myMoney from "../assets/ProjectsPictures/myMoney.png";
import magicMemory from "../assets/ProjectsPictures/magicMemory.png";

const projects = [
  {
    mainImage: bookiImg,
    name: "Booki",
    description: "Projet de cours de création front HTML et CSS.",
    detailedDescription:
      "Booki est un projet de cours qui a pour but de créer une page d'accueil d'un site d'agence de voyage en HTML et CSS et se basant sur des standards d'entreprise. L'ojectif premier étant d'être fidèle à la maquette qui a été donné. La page est en desktop first mais elle est également adaptée responsive pour mobile et tablette.",
    skills: ["HTML", "CSS"],
    gitHubLink: "https://github.com/gquenea/Booki",
    type: "Développement",
    galleryImages: [],
  },
  {
    mainImage: ecoBlissBath,
    name: "EcoBlissBath",
    description: "Projet de cours sur l'automatisation de test.",
    detailedDescription:
      "EcoBlissBath est un projet de cours basé sur l'automatisation de tests fonctionnelles. La première tache était d'analyser les résultats d'une campagne de tests manuels précédemment réalisés et d'identifier les zones où l'automatisation pouvait améliorer l'éfficacité du processus de qualité. Pour finir il fallait rédiger un rapport détaillé sur les résultats des tests automatisés.",
    skills: [
      "Cypress",
      "Analyse de besoin du projet",
      "Rédaction de rapport de résultat",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec dapibus nisl interdum, consectetur leo ac, interdum eros. Donec magna neque, viverra ut mollis vel, vestibulum at tellus. Cras dignissim nunc vitae leo commodo, at placerat orci elementum. Donec eu aliquam leo, quis aliquet urna. Ut a tor",
    ],
    gitHubLink: "https://github.com/gquenea/EcoBlissBath",
    type: "Test",
    galleryImages: [],
  },
  {
    mainImage: kasa,
    name: "Kasa",
    description: "Project de cours de creation d'application en React.",
    detailedDescription:
      "Kasa est un projet de cours visant à implémenter le front-end d'une application de logement. Il s'agissait de développer la logique de présentation des données en utilisant React en se basant sur les maquettes des différentes pages du site.",
    skills: ["HTML", "CSS", "React", "Versionning"],
    gitHubLink: "https://github.com/gquenea/Kasa",
    type: "Développement",
    galleryImages: [],
  },
  {
    mainImage: sophieBluel,
    name: "Sophie Bluel",
    description: "Project de cours de creation de site en JavaScript.",
    detailedDescription:
      "Sophie Bluel est un projet de cours visant à développer la page de présentation des travaux d'une architecte. A partir d'un HTML fourni, le but était d'implémenter toutes les fonctionnalités restantes (création de modale, création d'une page de connexion etc) et d'effectuer des manipulation du DOM avec JavaScript.",
    skills: ["HTML", "CSS", "JavaScript", "API"],
    gitHubLink: "https://github.com/gquenea/Sophie-Bluel",
    type: "Développement",
    galleryImages: [],
  },
  {
    mainImage: menuMaker,
    name: "Menu Maker",
    description: "Projet de cours sur la planification de développement.",
    detailedDescription:
      "Menu Maker est un projet de cours sur la planification du développement d'un site. Le rôle était de rédiger les spécifications techniques du projet (besoins fonctionnels et décomposition des fonctionnalités). Une veille technologique était à mettre en place ainsi que la présentation de la solution technique.",
    skills: [
      "Veille technologique",
      "Spécifications techniques",
      "outils de gestion de développement (trello)",
    ],
    gitHubLink: "https://github.com/gquenea/Menu-Maker",
    type: "Test",
    galleryImages: [],
  },
  {
    mainImage: theDojo,
    name: "The Dojo",
    description: "Projet exercice sur un site de management de projet.",
    detailedDescription:
      "The Dojo est un exercice qui consite à créer un site de management pour le développement d'appli avec la possibilité des créer des ticket et des les assigner à différents utilisateurs. Le tout en React avec un système login/logout et la possibilité de voir les utilisateurs actuellement connectés.",
    skills: ["HTML", "CSS", "React", "Firebase"],
    gitHubLink: "https://github.com/gquenea/the-dojo",
    type: "Développement",
    galleryImages: [],
  },
  {
    mainImage: myMoney,
    name: "My Money",
    description: "Projet exercice d'un site de gestion de budget.",
    detailedDescription:
      "My Money est un exercice de développement d'une application simple de gestion de finance. Il permet d'ajouter des transactions avec un prix et un nom. On peut consulter ces transactions. Cette application réalisée avec React contient un système de login/logout.",
    skills: ["HTML", "CSS", "React", "Firebase"],
    gitHubLink: "https://github.com/gquenea/my-money",
    type: "Développement",
    galleryImages: [],
  },
  {
    mainImage: magicMemory,
    name: "Magic Memory",
    description: "Projet exercice d'un petit jeu des paires en React.",
    detailedDescription:
      "Magic Memory est un jeu des paires sur navigateur réalisé avec React. Douze cartes retournées s'affiche à l'écran, on ne peut en retourner que deux à la fois et l'ojectif est de trouver toutes les paires en un minimum de tours.",
    skills: ["HTML", "CSS", "React"],
    gitHubLink: "https://github.com/gquenea/magic-memory",
    type: "Développement",
    galleryImages: [],
  },
];

export default projects;
