import React from "react";
import InfoPortafilo from "../../components/InfoPortafolio";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";

export default function PortafolioPage() {
  return (
    <div className="portafolio">
      <Header />
      <InfoPortafilo />
      <Footer />
    </div>
  );
}
