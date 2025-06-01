import React from "react";
import ReactDOM from "react-dom/client";
import "./components/i18n";
import App from "./App";
import "./styles/base.css";
import "./styles/theme.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
