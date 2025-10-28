import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/about/About';
import OurServices from '../components/service/Service';
import Team from '../components/team/Team';
import ConnectSection from '../components/connect/Connect';



export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <OurServices />
      <Team />
      <ConnectSection sectionId='connect' />

    </>
  );
}