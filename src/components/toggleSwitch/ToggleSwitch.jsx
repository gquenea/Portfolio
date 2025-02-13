import { useContext } from "react";
import "./ToggleSwitch.scss";
import { ThemeContext } from "../context/ThemeContext";

const ToggleSwitch = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
      />
      <span className="slider"></span>
    </label>
  );
};

export default ToggleSwitch;
