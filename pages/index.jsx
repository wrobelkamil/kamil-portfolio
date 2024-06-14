import React from 'react';
import HeroSection from '../components/HeroSection';
import SkillSection from '../components/SkillSection';
import Gallery1 from '../components/Gallery';
import Gallery2 from '../components/Gallery2';
import Gallery3 from '../components/Gallery3';
import Gallery4 from '../components/Gallery4';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <>
      <HeroSection /> {/* Ensure the path to your image is correct */}
      <Gallery2 />
      <Gallery3 />
      <Gallery4 />
      <Gallery1 />
      <SkillSection />
      <Contact />
    </>
  );
}

export default Home;
