import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./App";
import { TesseractApp } from "./tesseract/Tesseract";

export const routerApp = (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tesseract" element={<TesseractApp />} />
    </Routes>
  </BrowserRouter>
);
