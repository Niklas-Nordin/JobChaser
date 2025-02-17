"use client";

import { useContext } from "react";
import { ThemeContext } from "../contexts/DarkLightContext";
import "../css/darkLightSwitch.css";

function ThemeSwitcher() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("Couldn't find dark/light mode");
  }

  const { darkLight, setDarkLight } = context;

  const toggleTheme = () => {
    setDarkLight(darkLight === "light" ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkLight === "dark");
  };

  return (
    <>
      <div className="toggle-container" onClick={toggleTheme}>
        <p className="light-dark">{darkLight}</p>
        <div className="toggle-slider"></div>
      </div>
    </>
  );
}

export default ThemeSwitcher;
