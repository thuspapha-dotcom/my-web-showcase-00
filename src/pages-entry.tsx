import React from "react";
import { createRoot } from "react-dom/client";
import { HomePage } from "./routes/index";
import "./styles.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element was not found");
}

createRoot(root).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>,
);
