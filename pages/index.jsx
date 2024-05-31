import React from 'react';
import HeroSection from '../components/HeroSection';
import SkillSection from '../components/SkillSection';
import Gallery1 from '../components/Gallery';
import Gallery2 from '../components/Gallery2';
import Gallery3 from '../components/Gallery3';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <HeroSection /> {/* Ensure the path to your image is correct */}
      <Gallery1 />
      <Gallery2 />
      <Gallery3 />
      <SkillSection />
      <Contact />
    </>
  );
}

export default Home;
