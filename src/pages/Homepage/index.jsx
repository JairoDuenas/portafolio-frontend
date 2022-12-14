import React from "react";
import Header from "../../containers/Header";
import MainInfo from "../../components/MainInfo";
import MainButtons from "../../components/MainButtons";
import CarouselMain from "../../components/Carousel";
import Footer from "../../containers/Footer";
import MySkills from "../../components/MySkills";

export default function HomePage() {
  return (
    <div className="main-container">
      <Header />
      <MainInfo />
      <MainButtons />
      <CarouselMain />
      <MySkills />
      <Footer />
    </div>
  );
}
