import "./Header.scss";
import { useEffect, useState } from "react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollStarted, setIsScrollStarted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
      setIsScrollStarted(window.scrollY > 200 && window.scrollY < 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="header-container">
      <div
        id="header"
        className={`${isScrolled ? "scrolled" : ""} ${
          isScrollStarted ? "scroll-started" : ""
        }`}
      >
        <div onClick={handleClick}>
          QueneaGislain<span className="point">.</span>
          <span className="underscore">_</span>
        </div>
        <nav>
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
      </div>
    </div>
  );
}
