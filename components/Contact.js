import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContent}>
        <div className={styles.textContent}>
          <h2 className={styles.heading}>Contact Me</h2>
          <div className={styles.contactDetails}>
            <div className={styles.detailItem}>
              <p className={styles.emoji}>👤</p>
              <p className={styles.info}>Kamil Wróbel</p>
            </div>
            <div className={styles.detailItem}>
              <p className={styles.emoji}>📞</p>
              <p className={styles.info}>+48 501 608 599</p>
            </div>
            <div className={styles.detailItem}>
              <p className={styles.emoji}>✉️</p>
              <p className={styles.info}>wrobel.k@icloud.com</p>
            </div>
            <div className={styles.detailItem}>
              <p className={styles.emoji}>🌆</p>
              <p className={styles.info}>Łódź, Poland</p>
            </div>
          </div>
        </div>
        <div className={styles.imageBox}>
          {/* Replace with your image URL */}
          <img src="/bg.png" alt="Your description" className={styles.image}/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
