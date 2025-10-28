import React from 'react';
import Hero from '../components/hero/hero';
import About from '../components/about/about';
import OurServices from '../components/service/service';
import Team from '../components/team/team';
import ConnectSection from '../components/connect/connect';



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