import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/main.scss";

console.log("get react dom", ReactDOM);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
console.log("root retun value", root);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
