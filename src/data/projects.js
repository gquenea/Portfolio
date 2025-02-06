import mainImages from "./imports/mainImages";
import imagesInScreen from "./imports/imagesInScreen";
import galleryImages from "./imports/galleryimages";

const projects = [
  {
    key: "booki",
    mainImage: mainImages.bookiMainImage,
    mainImageInScreen: imagesInScreen.bookiImageInScreen,
    gitHubLink: "https://github.com/gquenea/Booki",
    galleryImages: [galleryImages.bookiGallery1, galleryImages.bookiGallery2],
    skills: ["HTML", "CSS"],
  },
  {
    key: "ecoBlissBath",
    mainImage: mainImages.ecoBlissBathMainImage,
    mainImageInScreen: imagesInScreen.ecoBlissBathImageInScreen,
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
    mainImageInScreen: imagesInScreen.kasaImageInScreen,
    gitHubLink: "https://github.com/gquenea/Kasa",
    galleryImages: [
      galleryImages.kasaGallery1,
      galleryImages.kasaGallery2,
      galleryImages.kasaGallery3,
    ],
    skills: ["HTML", "CSS", "React", "Gestion de version"],
  },
  {
    key: "sophieBluel",
    mainImage: mainImages.sophieBluelMainImage,
    mainImageInScreen: imagesInScreen.sophieBluelImageInScreen,
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
    mainImageInScreen: imagesInScreen.menuMakerImageInScreen,
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
        "Outils de gestion de développement (Trello)"
      ],
  },
  {
    key: "theDojo",
    mainImage: mainImages.theDojoMainImage,
    mainImageInScreen: imagesInScreen.theDojoImageInScreen,
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
    mainImageInScreen: imagesInScreen.myMoneyImageInScreen,
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
    mainImageInScreen: imagesInScreen.magicMemoryImageInScreen,
    gitHubLink: "https://github.com/gquenea/magic-memory",
    galleryImages: [
      galleryImages.magicMemoryGallery1,
      galleryImages.magicMemoryGallery2,
    ],
    skills: ["HTML", "CSS", "React"],
  },
];

export default projects;
