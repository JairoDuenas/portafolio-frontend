import React from "react";
import MainAbout from "../../components/MainAbout";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";

export default function AboutPage() {
  return (
    <div className="about">
      <Header />
      <MainAbout />
      <Footer />
    </div>
  );
}
