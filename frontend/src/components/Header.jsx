import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import "../styles/header.css";
import logo from "../assets/website-transparent.svg";

function Header() {
  return (
    <header className="header">
      <div>
        <NavLink to="/">
          <img src={logo} alt="Owlorithm Logo" style={{ width: "20rem" }} />
        </NavLink>
      </div>
      <nav className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          About Us
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Get in touch
        </NavLink>
        <ThemeToggle />
      </nav>
    </header>
  );
}

export default Header;
