import "./Contact.scss";
import ContactForm from "../contactForm/ContactForm";
import contactLocalisation from "../../assets/contactLogo/contactLocalisation.png";
import github from "../../assets/contactLogo/github.png";
import cv from "../../assets/contactLogo/cv.png";
import linkedin from "../../assets/contactLogo/linkedin.png";

export default function Contact() {
  return (
    <div id="contact">
      <h2>Contact</h2>
      <ContactForm />

      <div className="contact-content">
        <div className="localisation">
          <img src={contactLocalisation} alt="Icon de localisation" />
          <p>Lyon</p>
        </div>
        <a
          href="https://github.com/gquenea/"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="Logo de github" />
          <p>Github</p>
        </a>
        <a href="" className="cv">
          <img src={cv} alt="Icon de cv" />
          <p>
            Télécharger
            <br /> mon CV
          </p>
        </a>
        <a
          href="https://www.linkedin.com/in/gislain-quenea-519a84215/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin"
        >
          <img src={linkedin} alt="Logo de Linkedin" />
          <p>LinkedIn</p>
        </a>
      </div>
    </div>
  );
}
