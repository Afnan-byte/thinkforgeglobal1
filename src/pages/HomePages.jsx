import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import OurServices from '../components/Service/Service';
import Team from '../components/Team/Team';
import ConnectSection from '../components/Connect/Connect';



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