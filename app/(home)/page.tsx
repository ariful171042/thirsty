import Community from '@/components/home/Community';
import Hero from '@/components/home/Hero';
import Packages from '@/components/home/Packages';
import React from 'react';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <Packages />
      <Community />
    </main>
  );
};

export default HomePage;
