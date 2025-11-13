import React from 'react';
import Hero from '../components/Home/Hero';
import AdmissionsInfo from '../components/Home/AdmissionsInfo';
import Features from '../components/Home/Features';
import Stats from '../components/Home/Stats';
import NewsEvents from '../components/Home/NewsEvents';
import Accreditations from '../components/Home/Accreditations';
import Facilities from '../components/Home/Facilities';

const Home: React.FC = () => {
  return (
    <main className="flex-grow">
      <Hero />
      <Accreditations />
      <AdmissionsInfo />
      <Features />
      <Facilities />
      <Stats />
      <NewsEvents />
    </main>
  );
};

export default Home;