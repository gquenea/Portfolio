import React from "react";
import Modal from "react-modal";
import "./LegalNoticesModal.scss";
import cross from "../../../assets/modalIcons/cross.png";

export default function LegalNoticesModal({ isOpen, onClose }) {
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
        <h2>Mentions légales</h2>

        <h3>1. Éditeur du site</h3>
        <p>
          Le site Quenea Gislain est édité par Quenea Gislain: <br />
          Nom : Quenea Gislain <br />
          Email : quenea.gislain@gmail.com
        </p>
        <hr />

        <h3>2. Hébergement du site</h3>
        <p>Le site est hébergé par GitHub Pages</p>
        <hr />

        <h3>3. Propriété intellectuelle</h3>
        <p>
          Tous les contenus présents sur ce site (textes, images, logos, etc.)
          sont la propriété exclusive de Quenea Gislain. Toute reproduction,
          même partielle, est interdite sans l'accord préalable de l'éditeur.
        </p>
        <hr />

        <h3>4. Responsabilité</h3>
        <p>
          L'éditeur du site ne pourra être tenu responsable des erreurs,
          omissions ou conséquences liées à l'utilisation des informations
          présentes sur ce site.
        </p>
        <hr />

        <h3>5. Données personnelles</h3>
        <p>
          Ce site ne collecte aucune donnée personnelle. Les informations
          recueillies sont destinées uniquement à la gestion de vos demandes et
          ne seront pas utilisées à des fins commerciales.
        </p>
        <hr />

        <h3>6. Cookies</h3>
        <p>
          Ce site peut n'utilise pas de Cookies.
        </p>
      </div>
    </Modal>
  );
}
