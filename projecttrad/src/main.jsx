import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { routerApp } from "./Routes.jsx";
import { MyProvider } from "./context/ContextApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyProvider>{routerApp}</MyProvider>
  </StrictMode>
);
