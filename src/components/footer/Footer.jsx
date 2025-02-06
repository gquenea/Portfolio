import "./Footer.scss";
import { useState } from "react";
import LegalNoticesModal from "./legalNoticesModal/LegalNoticesModal";
import { useTranslation } from "react-i18next";


export default function Footer() {
  const { t } = useTranslation();

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
      {t("footer")}
      </p>
      <LegalNoticesModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
