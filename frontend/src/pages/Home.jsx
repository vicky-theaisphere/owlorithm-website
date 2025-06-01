import { useTranslation } from "react-i18next";
import "../styles/home.css";

// Home.jsx
export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="home-container">
      <h1>{t("home_welcome")}</h1>
      <h3>{t("home_description")}</h3>
    </div>
  );
}
