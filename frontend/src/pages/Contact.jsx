import { useTranslation } from "react-i18next";
import "../styles/contact.css";

// Contact.jsx
export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="contact-container">
      <h1>{t("home_welcome")}</h1>
      <h3>{t("contact_description")}</h3>
    </div>
  );
}
