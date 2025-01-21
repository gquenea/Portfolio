import "./ContactForm.scss";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
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
            setIsVisible(false);
          }, 3000);
        },
        (error) => {
          setMessage("Une erreur est survenue. Veuillez réessayer plus tard.");
          setMessageType("error");
          setIsVisible(true);
          console.error("FAILED...", error.text);
          setTimeout(() => {
            setIsVisible(false);
          }, 3000);
        }
      );
  };

  return (
    <div id="contactForm">
      <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" placeholder="Nom" required />
        <label>Email</label>
        <input type="email" name="user_email" placeholder="Email" required />
        <label>Message</label>
        <textarea name="message" placeholder="Message" required />
        <input className="submit" type="submit" value="Envoyer" />
        {message && (
          <div className={`popup ${messageType} ${isVisible ? "visible" : ""}`}>
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
