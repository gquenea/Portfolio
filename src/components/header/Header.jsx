import "./Header.scss";
import { useEffect, useState } from "react";
import burgerMenu from "../../assets/burgerMenu.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollStarted, setIsScrollStarted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État du burger menu

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
      setIsScrollStarted(window.scrollY > 200 && window.scrollY < 500);

      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const handleClick = () => {
    window.location.href = "/";
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="header-container">
      <div
        id="header"
        className={`${isScrolled ? "scrolled" : ""} ${
          isScrollStarted ? "scroll-started" : ""
        }`}
      >
        <div onClick={handleClick} className="name">
          QueneaGislain<span className="point">.</span>
          <span className="underscore">_</span>
        </div>
        <nav
          className={`nav-menu ${isMenuOpen ? "menu-open" : ""} ${
            isScrolled ? "nav-scrolled" : ""
          }`}
        >
          <ul>
            <li>
              <a href="#header" onClick={handleClick}>
                {"// Accueil"}
              </a>
            </li>
            <li>
              <a href="#skills">{"// Compétences"}</a>
            </li>
            <li>
              <a href="#projects">{"// Projets"}</a>
            </li>
            <li>
              <a href="#experiences">{"// Expériences"}</a>
            </li>
            <li>
              <a href="#contact">{"// Contact"}</a>
            </li>
          </ul>
        </nav>

        {/* Bouton burger */}
        <button
          className={`burger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <img src={burgerMenu} alt="Burger menu" />
        </button>
      </div>
    </div>
  );
}
