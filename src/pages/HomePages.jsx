import React from 'react';
import Hero from '../Components/Hero/Hero';
import About from '../Components/About/About';
import OurServices from '../Components/Service/Service';
import Team from '../Components/Team/Team';
import ConnectSection from '../Components/Connect/Connect';



export default function HomePage() {
  return (
    <>
    <title>Think Forge Global</title>
      <meta
        name="description"
       content="Think Forge Global is a top AI software and IT company in Perinthalmanna, Malappuram. We lead in digital transformation, data analytics, and web/app development for Kerala."
      />
      <link rel="canonical" href="https://www.thinkforgeglobal.com/" />
      
      <Hero />
      <About />
      <OurServices />
      <Team />
      <ConnectSection sectionId='connect' />

    </>
  );
}