import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";
import "../styles/header.css";
import logo from "../assets/website-transparent.svg";

function Header() {
  const { t } = useTranslation();

  return (
    <header className="header">
      <div>
        <NavLink to="/">
          <img src={logo} alt="Owlorithm Logo" className="logo" />
        </NavLink>
      </div>
      <nav className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {t("nav_home")}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {t("nav_about_us")}
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          {t("nav_contact_us")}
        </NavLink>
        <ThemeToggle />
        <LanguageSwitcher />
      </nav>
    </header>
  );
}

export default Header;
