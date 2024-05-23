import React from 'react';
import HeroSection from '../components/HeroSection';
import SkillSection from '../components/SkillSection';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <>
      <HeroSection /> {/* Ensure the path to your image is correct */}
      <Gallery />
      <SkillSection />
      <div id="contact">
        <h2>Contact</h2>
        {/* Add your contact content here */}
      </div>
    </>
  );
}

export default Home;
