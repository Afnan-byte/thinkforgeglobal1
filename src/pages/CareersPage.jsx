import React from 'react';
import CareersHero from '../components/Careers/CareersHero';
import OpenPositions from '../components/Careers/OpenPositions';
import ConnectSection from '../components/Connect/Connect';

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <OpenPositions/>
      <ConnectSection  variant='default'/>
 
    </>
  );
}