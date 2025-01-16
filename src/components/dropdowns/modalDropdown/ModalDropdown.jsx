import { useState } from "react";
import "./ModalDropdown.scss";
import dropdownArrow from "../../../assets/dropdownArrow.png";

export default function ModalDropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="modal-dropdown">
      <div className="dropdown-title-box" onClick={toggleDropdown}>
        <h4 className="dropdown-title">{title}</h4>
        <img
          src={dropdownArrow}
          alt="dropdown icon"
          className={isOpen ? "rotated" : ""}
        />
      </div>
      <div className={`dropdown-content ${isOpen ? "open" : "closed"}`}>
        {children}
      </div>
    </div>
  );
}
