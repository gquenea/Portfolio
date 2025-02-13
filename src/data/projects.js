import mainImages from "./imports/mainImages.js";
import imagesInScreen from "./imports/imagesInScreen.js";
import galleryImages from "./imports/galleryimages.js";

const projects = [
  {
    key: "booki",
    mainImage: mainImages.bookiMainImage,
    darkImageInScreen: imagesInScreen.darkBookiImageInScreen,
    lightImageInScreen: imagesInScreen.lightBookiImageInScreen,
    gitHubLink: "https://github.com/gquenea/Booki",
    galleryImages: [galleryImages.bookiGallery1, galleryImages.bookiGallery2],
    skills: ["HTML", "CSS"],
  },
  {
    key: "ecoBlissBath",
    mainImage: mainImages.ecoBlissBathMainImage,
    darkImageInScreen: imagesInScreen.darkEcoBlissBathImageInScreen,
    lightImageInScreen: imagesInScreen.lightEcoBlissBathImageInScreen,
    gitHubLink: "https://github.com/gquenea/EcoBlissBath",
    galleryImages: [
      galleryImages.ecoBlissBathGallery1,
      galleryImages.ecoBlissBathGallery2,
      galleryImages.ecoBlissBathGallery3,
      galleryImages.ecoBlissBathGallery4,
      galleryImages.ecoBlissBathGallery5,
    ],
    skills: [
      "Cypress",
      "Analyse des besoins du projet",
      "Rédaction de rapports de résultats",
    ],
  },
  {
    key: "kasa",
    mainImage: mainImages.kasaMainImage,
    darkImageInScreen: imagesInScreen.darkKasaImageInScreen,
    lightImageInScreen: imagesInScreen.lightKasaImageInScreen,
    gitHubLink: "https://github.com/gquenea/Kasa",
    galleryImages: [
      galleryImages.kasaGallery1,
      galleryImages.kasaGallery2,
      galleryImages.kasaGallery3,
    ],
    skills: ["HTML", "CSS", "React", "Versionning"],
  },
  {
    key: "sophieBluel",
    mainImage: mainImages.sophieBluelMainImage,
    darkImageInScreen: imagesInScreen.darkSophieBluelImageInScreen,
    lightImageInScreen: imagesInScreen.lightSophieBluelImageInScreen,
    gitHubLink: "https://github.com/gquenea/Sophie-Bluel",
    galleryImages: [
      galleryImages.sophieBluelGallery1,
      galleryImages.sophieBluelGallery2,
      galleryImages.sophieBluelGallery3,
      galleryImages.sophieBluelGallery4,
    ],
    skills: ["HTML", "CSS", "JavaScript", "API"],
  },
  {
    key: "menuMaker",
    mainImage: mainImages.menuMakerMainImage,
    darkImageInScreen: imagesInScreen.darkMenuMakerImageInScreen,
    lightImageInScreen: imagesInScreen.lightMenuMakerImageInScreen,
    gitHubLink: "https://github.com/gquenea/Menu-Maker",
    galleryImages: [
      galleryImages.menuMakerGallery1,
      galleryImages.menuMakerGallery2,
      galleryImages.menuMakerGallery3,
      galleryImages.menuMakerGallery4,
    ],
    skills: [
      "Veille technologique",
      "Spécifications techniques",
      "Outils de gestion de développement (Trello)",
    ],
  },
  {
    key: "theDojo",
    mainImage: mainImages.theDojoMainImage,
    darkImageInScreen: imagesInScreen.darkTheDojoImageInScreen,
    lightImageInScreen: imagesInScreen.lightTheDojoImageInScreen,
    gitHubLink: "https://github.com/gquenea/the-dojo",
    galleryImages: [
      galleryImages.theDojoGallery1,
      galleryImages.theDojoGallery2,
      galleryImages.theDojoGallery3,
    ],
    skills: ["HTML", "CSS", "React", "Firebase"],
  },
  {
    key: "myMoney",
    mainImage: mainImages.myMoneyMainImage,
    darkImageInScreen: imagesInScreen.darkMyMoneyImageInScreen,
    lightImageInScreen: imagesInScreen.lightMyMoneyImageInScreen,
    gitHubLink: "https://github.com/gquenea/my-money",
    galleryImages: [
      galleryImages.myMoneyGallery1,
      galleryImages.myMoneyGallery2,
    ],
    skills: ["HTML", "CSS", "React", "Firebase"],
  },
  {
    key: "magicMemory",
    mainImage: mainImages.magicMemoryMainImage,
    darkImageInScreen: imagesInScreen.darkMagicMemoryImageInScreen,
    lightImageInScreen: imagesInScreen.lightMagicMemoryImageInScreen,
    gitHubLink: "https://github.com/gquenea/magic-memory",
    galleryImages: [
      galleryImages.magicMemoryGallery1,
      galleryImages.magicMemoryGallery2,
    ],
    skills: ["HTML", "CSS", "React"],
  },
];

export default projects;
