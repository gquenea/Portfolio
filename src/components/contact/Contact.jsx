import "./Contact.scss";
import ContactForm from "../contactForm/ContactForm.jsx";
import contactLocalisation from "../../assets/contactLogo/contactLocalisation.png";
import github from "../../assets/contactLogo/github.png";
import cv from "../../assets/contactLogo/cv.png";
import linkedin from "../../assets/contactLogo/linkedin.png";
import { useTranslation } from "react-i18next";

export default function Contact({ aos }) {
  const { t } = useTranslation();

  return (
    <div id="contact" data-aos={aos}>
      <h2>Contact</h2>
      <ContactForm />

      <div className="contact-content" data-aos={aos}>
        <a
          href="https://www.google.fr/maps/place/Lyon/@45.7580032,4.7939309,13z/data=!3m1!4b1!4m6!3m5!1s0x47f4ea516ae88797:0x408ab2ae4bb21f0!8m2!3d45.764043!4d4.835659!16zL20vMGRwcmc?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="localisation"
        >
          <img src={contactLocalisation} alt="Icon de localisation" />
          <p>Lyon</p>
        </a>
        <a
          href="https://github.com/gquenea/"
          className="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="Logo de github" />
          <p>Github</p>
        </a>
        <a
          href="CV-Quenea-Gislain.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cv"
        >
          <img src={cv} alt="Icon de cv" />
          <p>
          {t("contact.download")}
            <br /> {t("contact.cv")}
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
