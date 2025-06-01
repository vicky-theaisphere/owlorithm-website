import { useTranslation } from "react-i18next";
import "../styles/about.css";

// About.jsx
export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="about-container">
      <h1>{t("home_welcome")}</h1>
      <h3>{t("about_description")}</h3>
    </div>
  );
}
