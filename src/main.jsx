import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Prevent page dimming by handling visibility and focus events
const preventPageDimming = () => {
  // Override document visibility change events
  document.addEventListener(
    "visibilitychange",
    (e) => {
      e.stopPropagation();
    },
    true
  );

  // Override window blur/focus events that might cause dimming
  window.addEventListener(
    "blur",
    (e) => {
      e.stopPropagation();
    },
    true
  );

  window.addEventListener(
    "focus",
    (e) => {
      e.stopPropagation();
    },
    true
  );

  // Prevent mouse leave/enter from affecting page state
  document.addEventListener(
    "mouseleave",
    (e) => {
      e.stopPropagation();
    },
    true
  );

  document.addEventListener(
    "mouseenter",
    (e) => {
      e.stopPropagation();
    },
    true
  );

  // Force consistent page state
  const maintainPageState = () => {
    document.body.style.opacity = "1";
    document.documentElement.style.opacity = "1";
  };

  // Run periodically to ensure consistent state
  setInterval(maintainPageState, 100);
  maintainPageState();
};

// Initialize dimming prevention
preventPageDimming();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
