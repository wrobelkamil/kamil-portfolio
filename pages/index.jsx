import React from 'react';
import HeroSection from '../components/HeroSection';
import Gallery from '../components/Gallery';

const Home = () => {
  return (
    <>
      <HeroSection imageSrc="/path_to_your_image.jpg" /> {/* Ensure the path to your image is correct */}
      <Gallery />
      <div id="skills">
        <h2>Skills</h2>
        {/* Add your skills content here */}
      </div>
      <div id="contact">
        <h2>Contact</h2>
        {/* Add your contact content here */}
      </div>
    </>
  );
}

export default Home;
