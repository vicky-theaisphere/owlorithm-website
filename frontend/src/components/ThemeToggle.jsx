import { useEffect, useState } from "react";
import "../styles/toggle.css";

// Capitalize the first letter of a string
const capitalizeFirst = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const nextTheme = theme === "light" ? "dark" : "light";
  const iconClass =
    nextTheme === "light" ? "fa-sun sun-icon" : "fa-moon moon-icon";

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <div className="theme-toggle-icon-wrapper">
        <i
          className={`fa-solid ${iconClass} theme-icon ${
            nextTheme === "light" ? "sun-icon" : "moon-icon"
          }`}
        ></i>
        <span className="tooltip-text">Go {capitalizeFirst(nextTheme)}</span>
      </div>
    </div>
  );
}

export default ThemeToggle;
