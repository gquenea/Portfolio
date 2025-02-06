import React from "react";
import Modal from "react-modal";
import "./LegalNoticesModal.scss";
import cross from "../../../assets/modalIcons/cross.png";
import { useTranslation } from "react-i18next";

export default function LegalNoticesModal({ isOpen, onClose }) {
  const { t } = useTranslation();

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="legal-notices-modal"
      overlayClassName="legal-notices-overlay"
    >
      <div>
        <div className="close-button-container">
          <button className="close-button" onClick={onClose}>
            <img src={cross} alt="Croix de fermeture de modal" />
          </button>
        </div>
        <h2>{t("footer.legalNotices.title")}</h2>

        <h3>{t("footer.legalNotices.websiteEditor.title")}</h3>
        <p>
          {t("footer.legalNotices.websiteEditor.textLine1")} <br />
          {t("footer.legalNotices.websiteEditor.textLine2")} <br />
          Email : quenea.gislain@gmail.com
        </p>
        <hr />

        <h3>{t("footer.legalNotices.websiteHosting.title")}</h3>
        <p>{t("footer.legalNotices.websiteHosting.text")}</p>
        <hr />

        <h3>{t("footer.legalNotices.intellectualProperty.title")}</h3>
        <p>{t("footer.legalNotices.intellectualProperty.text")}</p>
        <hr />

        <h3>{t("footer.legalNotices.responsibility.title")}</h3>
        <p>{t("footer.legalNotices.responsibility.text")}</p>
        <hr />

        <h3>{t("footer.legalNotices.personalData.title")}</h3>
        <p>{t("footer.legalNotices.personalData.text")}</p>
        <hr />

        <h3>{t("footer.legalNotices.cookies.title")}</h3>
        <p>{t("footer.legalNotices.cookies.text")}</p>
      </div>
    </Modal>
  );
}
