import React from "react";
import ReactDOM from "react-dom";
import App from "./app.jsx";

import { registerSW } from 'virtual:pwa-register'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

const updateSW = registerSW({
  onNeedRefresh() {
    console.log("Needs refresh");
    updateSW();
  },
  onOfflineReady() {
    console.log("Offline ready");
  },
})