import React from 'react'
import Header from '../../containers/Header';
import MainInfo from '../../components/MainInfo';
import MainButtons from '../../components/MainButtons';
import CarouselMain from '../../components/Carousel';

export default function HomePage() {
  return (
    <div
      className='main-container'
    >
      <Header />
      <MainInfo />
      <MainButtons />
      <CarouselMain/>
    </div>
  )
}
