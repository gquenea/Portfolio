import "./Header.scss";

export default function Header() {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div id="header">
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
  );
}
