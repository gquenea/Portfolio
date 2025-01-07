import "./Header.scss";

export default function Header() {
  const handleClick = () => {
    window.location.href = "/";
  };

  return (
    <div className="header">
      <div onClick={handleClick}>
        QueneaGislain<span className="point">.</span>
        <span className="underscore">_</span>
      </div>
      <nav>
        <ul>
          <li>{"// Accueil"}</li>
          <li>{"// Compétences"}</li>
          <li>{"// Projets"}</li>
          <li>{"// Expériences"}</li>
          <li>{"// Contact"}</li>
        </ul>
      </nav>
    </div>
  );
}
