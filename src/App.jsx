import "./App.scss";
import Banner from "./components/banner/Banner.jsx";
import Header from "./components/header/Header.jsx";
import Presentation from "./components/presentation/Presentation.jsx";
import Skills from "./components/skills/Skills.jsx";
import Projects from "./components/projects/Projects.jsx";
import Experiences from "./components/experiences/Experciences.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { ThemeProvider } from "./components/context/ThemeContext.jsx";
import Modal from "react-modal";

function App() {
  useEffect(() => {

    AOS.init({
      duration: 700,
      easing: "ease-in-out", 
      once: false,
    });
  }, []);

  Modal.setAppElement("#root");

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
}

export default App;
