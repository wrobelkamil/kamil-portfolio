import React from 'react';
import styles from '../styles/Home.module.css';

const HeroSection = () => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.leftColumn}></div>
      <div className={styles.rightColumn}>
        <h1>Kamil Wróbel</h1>
        <div className={styles.textContainer}>
          <p>
          I'm a passionate graphic designer with a keen eye for creativity. I excel in collaborative environments, contributing effectively to the creative process within a team. I'm constantly seeking opportunities for professional growth and development. I'm communicative, open to learning, and dedicated to completing my tasks with meticulous attention to detail.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
