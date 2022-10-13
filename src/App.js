import React from "react";
import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./routes/Homepage";
import AboutPage from "./routes/AboutPage";
import NotFoundPage from "./routes/NotFoundPage";
import PortafolioPage from "./routes/PortafolioPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portafolio" element={<PortafolioPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
