import "./App.scss";
import Banner from "./components/banner/Banner";
import Header from "./components/header/Header";
import Presentation from "./components/presentation/Presentation";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Experiences from "./components/experiences/Experciences";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="App">
      <div className="header-and-banner">
        <Header />
        <Banner />
      </div>
      <main className="main-container">
        <Presentation />
        <Skills />
        <Projects />
        <Experiences />
        <Contact />
      </main>
    </div>
  );
}

export default App;
