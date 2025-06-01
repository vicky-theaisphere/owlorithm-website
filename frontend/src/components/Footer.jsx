import { useEffect, useState } from "react";
import "../styles/footer.css";
import lightLogo from "../assets/black-transparent.svg";
import darkLogo from "../assets/white-transparent.svg";

function Footer() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);

    const observer = new MutationObserver(() => {
      const newTheme = document.documentElement.getAttribute("data-theme");
      setTheme(newTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer className="site-footer">
      <div className="footer-columns">
        <div className="footer-column">
          <h3>Company</h3>
          <div className="footer-links">
            <a href="/about">About Us</a>
            <a href="/careers">Careers</a>
            <a href="/blog">Blog</a>
            <a href="/press">Press</a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Recruiters</h3>
          <div className="footer-links">
            <a href="/post-job">Post a Job</a>
            <a href="/search-resumes">Search Resumes</a>
            <a href="/pricing">Pricing</a>
            <a href="/contact-sales">Contact Sales</a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Professionals</h3>
          <div className="footer-links">
            <a href="/find-jobs">Find Jobs</a>
            <a href="/job-alerts">Job Alerts</a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Resources</h3>
          <div className="footer-links">
            <a href="/help-center">Help Center</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/newsletter">Newsletter</a>
          </div>
        </div>
        <div className="footer-column">
          <h3>Connect</h3>
          <div className="social-icons">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://www.xing.com/profile/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              title="Xing"
            >
              <i className="fab fa-xing"></i>
            </a>
            <a
              href="https://x.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              title="X"
            >
              <i className="fab fa-x-twitter"></i>
            </a>
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://instagram.com/yourhandle"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <div className="theme-logo">
            <img
              src={theme === "dark" ? darkLogo : lightLogo}
              alt="Owlorithm Logo"
              className="footer-theme-logo"
            />
          </div>
        </div>
      </div>

      <div className="footer-bar">
        <p>&copy; {new Date().getFullYear()} Owlorithm. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
