import React from 'react';
import CareersHero from '../components/careers/careersHero';
import OpenPositions from '../components/careers/openPositions';
import ConnectSection from '../components/connect/connect';

export default function CareersPage() {
  return (
    <>
      <CareersHero />
      <OpenPositions/>
      <ConnectSection  variant='default'/>
 
    </>
  );
}