import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
      </Head>

      <main className={styles.main}>
        <section id="about" className={styles.section}>
          <h1>Kilka słów o mnie</h1>
          <p>
            Jestem grafikiem z pasją do tworzenia. Posiadam umiejętność współpracy
            z zespołem w kreatywnym procesie tworzenia. Poszukuję stałego rozwoju
            zawodowego. Jestem komunikatywny i otwarty na naukę, sumiennie wykonuję
            powierzone mi zadania.
          </p>
        </section>

        <section id="projects" className={styles.section}>
          <Gallery />
        </section>

        <section id="skills" className={styles.section}>
          <h1>Skills</h1>
          <ul>
            <li>Modelowanie</li>
            <li>Projektowanie</li>
            <li>Animacja</li>
          </ul>
        </section>

        <section id="contact" className={styles.section}>
          <h1>Contact</h1>
          <p>Email: wrobel.k@icloud.com</p>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>© 2024 Kamil Wróbel. All rights reserved.</p>
      </footer>
    </div>
  );
}
