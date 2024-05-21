import React, { useState } from 'react';
import styles from '../../styles/Navbar.module.css';

const Navbar = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(!isHovered);
    }

    return (
        <nav className={isHovered ? `${styles.navbar} ${styles.hovered}` : styles.navbar} onMouseEnter={handleHover} onMouseLeave={handleHover}>
            <div className={styles.center}>
                <a href="https://www.linkedin.com/in/kamil-wróbel-28932923a/">
                    <img src="/LinkedIn_logo.svg" alt="LinkedIn Logo" className={styles.linkedin} />
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
