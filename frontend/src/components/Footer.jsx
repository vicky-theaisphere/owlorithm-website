import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../styles/footer.css";
import lightLogo from "../assets/black-transparent.svg";
import darkLogo from "../assets/white-transparent.svg";

function Footer() {
  const { t } = useTranslation();
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
          <h3>{t("footer_company")}</h3>
          <div className="footer-links">
            <a href="/about">{t("footer_about_us")}</a>
            <a href="/careers">{t("footer_careers")}</a>
            <a href="/blog">{t("footer_blog")}</a>
            <a href="/press">{t("footer_press")}</a>
          </div>
        </div>
        <div className="footer-column">
          <h3>{t("footer_business")}</h3>
          <div className="footer-links">
            <a href="/post-job">{t("footer_post_job")}</a>
            <a href="/search-resumes">{t("footer_search_resume")}</a>
            <a href="/pricing">{t("footer_pricing")}</a>
            <a href="/contact-sales">{t("footer_contact_sales")}</a>
          </div>
        </div>
        <div className="footer-column">
          <h3>{t("footer_profesional")}</h3>
          <div className="footer-links">
            <a href="/find-jobs">{t("footer_find_jobs")}</a>
            <a href="/job-alerts">{t("footer_job_alerts")}</a>
          </div>
        </div>
        <div className="footer-column">
          <h3>{t("footer_resources")}</h3>
          <div className="footer-links">
            <a href="/help-center">{t("footer_help")}</a>
            <a href="/privacy-policy">{t("footer_privacy")}</a>
            <a href="/terms-of-service">{t("footer_terms")}</a>
            <a href="/cookie-policy">{t("footer_cookies")}</a>
            <a href="/newsletter">{t("footer_newsletter")}</a>
          </div>
        </div>
        <div className="footer-column">
          <h3>{t("footer_connect")}</h3>
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
        <p>
          &copy; {new Date().getFullYear()} {t("footer_copyright")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
