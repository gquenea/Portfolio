import "./Footer.scss";
import { useState } from "react";
import LegalNoticesModal from "./legalNoticesModal/LegalNoticesModal";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div id="footer">
      <p onClick={openModal}>
        © 2024 Quenea Gislain. Tous droits réservés. Mentions légales
      </p>
      <LegalNoticesModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
