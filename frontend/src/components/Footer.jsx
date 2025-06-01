import "../styles/footer.css";
import logo from "../assets/icon-transparent.svg";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>
            &copy; {new Date().getFullYear()} Owlorithm. All rights reserved.
          </p>
        </div>
        <div className="footer-center">
          <a href="/home">
            <img src={logo} alt="Owlorithm Logo" className="footer-logo" />
          </a>
        </div>
        <div className="footer-right">
          <a
            href="https://github.com/vicky-theaisphere"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
