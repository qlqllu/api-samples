import ReactDOM from "react-dom/client";
import { App } from './app'

import "@arcgis/core/assets/esri/themes/dark/main.css";

// import defineCustomElements to register custom elements with the custom elements registry
import { defineCustomElements } from "@arcgis/map-components/dist/loader";
// Register custom elements
defineCustomElements(window, { resourcesUrl: "https://js.arcgis.com/map-components/4.29/assets" });

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <App />
);