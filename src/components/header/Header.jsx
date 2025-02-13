import "./Header.scss";
import { useEffect, useState, useContext } from "react";
import burgerMenu from "../../assets/burgerMenu.png";
import { useTranslation } from "react-i18next";
import engFlag from "../../assets/engFlag.png";
import frFlag from "../../assets/frFlag.png";
import { ThemeContext } from "../context/ThemeContext.jsx";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch.jsx";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollStarted, setIsScrollStarted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isEnglish, setIsEnglish] = useState(false);
  const { theme } = useContext(ThemeContext);

  const { t, i18n } = useTranslation();

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

  useEffect(() => {
    i18n.changeLanguage(localStorage.getItem("language") || "fr");
    setIsEnglish(i18n.language === "en");
  }, [i18n]);

  useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
    document.body.classList.toggle("light", theme === "light");
  }, [theme]);

  const handleClick = () => {
    window.location.reload();
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const toggleLanguage = () => {
    const newLanguage = isEnglish ? "fr" : "en";
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage);
    setIsEnglish(newLanguage === "en");
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
                {t("header.nav.welcome")}
              </a>
            </li>
            <li>
              <a href="#skills">{t("header.nav.skills")}</a>
            </li>
            <li>
              <a href="#projects">{t("header.nav.projects")}</a>
            </li>
            <li>
              <a href="#experiences">{t("header.nav.experiences")}</a>
            </li>
            <li>
              <a href="#contact">{t("header.nav.contact")}</a>
            </li>
          </ul>
        </nav>

        <div className="toggle-container">
          <div className="flex-container">
            <div className="toggle-theme">
              <ToggleSwitch />
            </div>
            <img
              onClick={toggleLanguage}
              className="toggle-language"
              src={isEnglish ? engFlag : frFlag}
              alt="Drapeau de langue"
            />
          </div>
        </div>
        {/* Burger button */}
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
