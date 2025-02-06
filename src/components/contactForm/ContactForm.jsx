import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import emailjs from "@emailjs/browser";
import "./ContactForm.scss";
import { useTranslation } from "react-i18next";

export default function ContactForm() {
  const { t } = useTranslation();
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
          setMessage(t("contact.form.successMessage"));
          setMessageType("success");
          setIsVisible(true);
          form.current.reset();
          setTimeout(() => {
            setIsVisible(false);
          }, 3000);
        },
        (error) => {
          setMessage(t("contact.form.errorMessage"));
          setMessageType("error");
          setIsVisible(true);
          setTimeout(() => {
            setIsVisible(false);
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
      document.getElementById("portal-root")
    );

  return (
    <div id="contactForm">
      <form ref={form} onSubmit={sendEmail}>
        <label className="visually-hidden">Name</label>
        <input
          type="text"
          name="user_name"
          placeholder={t("contact.form.name")}
          required
        />
        <label className="visually-hidden">Email</label>
        <input type="email" name="user_email" placeholder="Email" required />
        <label className="visually-hidden">Message</label>
        <textarea name="message" placeholder="Message" required />
        <input
          className="submit"
          type="submit"
          value={t("contact.form.send")}
        />
      </form>

      {/* Render the popup if there is a message */}
      {isVisible && <Popup message={message} type={messageType} />}
    </div>
  );
}
