import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";

import { registerSW } from "virtual:pwa-register";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

if ("serviceWorker" in navigator) {
  // && !/localhost/.test(window.location)) {
  registerSW();
}