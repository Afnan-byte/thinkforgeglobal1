import React from 'react';
import CareersHero from '../components/careers/CareersHero';
import OpenPositions from '../components/careers/OpenPositions';
import ConnectSection from '../components/connect/Connect';

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <OpenPositions/>
      <ConnectSection  variant='default'/>
 
    </>
  );
}