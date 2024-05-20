import React from 'react';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.center}>
                <a href="https://www.linkedin.com">
                    <img src="/LinkedIn_logo.svg" alt="LinkedIn Logo" className={styles.linkedin} />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
