import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <a href="https://www.linkedin.com/in/kamil-wróbel-28932923a/" target="_blank" rel="noopener noreferrer">
        <img className={styles.alchemy_logo} src="/Linkedin_logo.svg" alt="LinkedIn"></img>
      </a>
    </nav>
  );
}
