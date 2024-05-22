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
            Jestem grafikiem z pasją do tworzenia. Posiadam umiejętność współpracy z zespołem w kreatywnym procesie tworzenia.
            Poszukuję stałego rozwoju zawodowego. Jestem komunikatywny i otwarty na naukę, sumiennie wykonuję powierzone mi zadania.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
