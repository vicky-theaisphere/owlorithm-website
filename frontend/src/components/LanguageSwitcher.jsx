import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Flag from "react-world-flags";
import "../styles/language.css";

const languages = [
  { code: "en", name: "English", countryCode: "GB" },
  { code: "de", name: "Deutsch", countryCode: "DE" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]); // fallback default
  const dropdownRef = useRef();

  // Handle clicks outside dropdown
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Update currentLang once i18n is initialized
  useEffect(() => {
    if (i18n.isInitialized) {
      const detected = languages.find((l) => i18n.language.startsWith(l.code));
      setCurrentLang(detected || languages[0]);
    }
  }, [i18n.language, i18n.isInitialized]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setOpen(false);
  };

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        className="language-switcher__button"
        aria-label="Select language"
      >
        <Flag
          code={currentLang.countryCode}
          className="language-switcher__flag--selected"
        />
      </button>

      {open && (
        <ul className="language-switcher__dropdown">
          {languages.map(({ code, name, countryCode }) => (
            <li
              key={code}
              className={`language-switcher__item ${
                code === currentLang.code
                  ? "language-switcher__item--active"
                  : ""
              }`}
            >
              <button
                onClick={() => changeLanguage(code)}
                aria-label={`Change language to ${name}`}
              >
                <Flag code={countryCode} className="language-switcher__flag" />
                {name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
