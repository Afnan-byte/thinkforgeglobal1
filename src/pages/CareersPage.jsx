import React from 'react';
import CareersHero from '../Components/Careers/CareersHero';
import OpenPositions from '../Components/Careers/OpenPositions';
import ConnectSection from '../Components/Connect/Connect';

export default function CareersPage() {
  return (
    <>
    <title>Careers in Data Analytics, Digital Transformation & web development | Kerala</title>
      <meta
        name="description"
        content="Join a leading digital transformation and data analytics company in Kerala. Think Forge Global has careers in data analysis, AI, and software engineering."
      />
      <link rel="canonical" href="https://www.thinkforgeglobal.com/careers" />

      <CareersHero />
      <OpenPositions/>
      <ConnectSection  variant='default'/>
 
    </>
  );
}