import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
// import React from "react";
// import { render } from "react-dom";
//import App from "./App";

// render(<App />, document.getElementById("root"));

//createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
// );

// Використовуйте createRoot для рендерингу
const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
