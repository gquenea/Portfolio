import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";

export default function ContactForm() {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ka02e94", "template_wfa5754", form.current, {
        publicKey: "S8o_Q3PDt7zQeIMyI",
      })
      .then(
        () => {
          setMessage("Votre message a été envoyé avec succès !");
          setMessageType("success");
          setIsVisible(true);
          form.current.reset();
          setTimeout(() => {
            setIsVisible(false); // Cache la popup après 3 secondes
          }, 3000);
        },
        (error) => {
          setMessage("Une erreur est survenue. Veuillez réessayer plus tard.");
          setMessageType("error");
          setIsVisible(true);
          setTimeout(() => {
            setIsVisible(false); // Cache la popup après 3 secondes
          }, 3000);
        }
      );
  };

  // Popup component rendered via portal
  const Popup = ({ message, type }) =>
    ReactDOM.createPortal(
      <div className={`popup ${type} ${isVisible ? "visible" : ""}`}>
        {message}
      </div>,
      document.getElementById("portal-root") // Render inside portal-root
    );

  return (
    <div id="contactForm">
      <form ref={form} onSubmit={sendEmail}>
        <label className="visually-hidden">Name</label>
        <input type="text" name="user_name" placeholder="Nom" required />
        <label className="visually-hidden">Email</label>
        <input type="email" name="user_email" placeholder="Email" required />
        <label className="visually-hidden">Message</label>
        <textarea name="message" placeholder="Message" required />
        <input className="submit" type="submit" value="Envoyer" />
      </form>

      {/* Render the popup if there is a message */}
      {isVisible && <Popup message={message} type={messageType} />}
    </div>
  );
}
