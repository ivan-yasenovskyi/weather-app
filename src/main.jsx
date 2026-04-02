import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import SearchBar from "./components/SearchBar.jsx";
import App from "./App.jsx";
import WeatherCard from "./components/WeatherCard.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
