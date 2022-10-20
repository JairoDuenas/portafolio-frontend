import React from "react";
import '../styles/App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/Homepage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";
import DossierPage from "../pages/DossierPage";
import Pdf from "../pages/PdfPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/dossier" element={<DossierPage />} />
        <Route path="/pdf" element={<Pdf />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
