import React from "react";
import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./routes/Homepage";
import AboutPage from "./routes/AboutPage";
import NotFoundPage from "./routes/NotFoundPage";
import DossierPage from "./routes/DossierPage";
import Pdf from "./pages/Pdf";

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
