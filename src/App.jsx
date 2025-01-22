import "./App.scss";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Presentation from "./components/presentation/Presentation";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Experiences from "./components/experiences/Experciences";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Initialisation d'AOS
    AOS.init({
      duration: 700, // Durée de l'animation en ms
      easing: "ease-in-out", // Type d'animation
      once: true, // L'animation se déclenche uniquement une fois
    });
  }, []);

  return (
    <div id="App">
      <div className="header-and-banner">
        <Header />
        <Banner />
      </div>
      <main className="main-container">
        <Presentation aos="fade-up" />
        <Skills aos="fade-up" />
        <Projects aos="fade-up" />
        <Experiences aos="fade-up" />
        <Contact aos="fade-up" />
      </main>
      <Footer />
    </div>
  );
}

export default App;
