import React, { useState } from 'react';
import styles from './HeaderStyles.module.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClick = (id) => {
        setActiveLink(id);
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false); // Ferme le menu burger après un clic
    };

    return (
        <header className={styles.container}>
            <nav>
                {/* Bouton Menu Burger */}
                <button
                    className={`${styles.burgerMenu} ${menuOpen ? styles.open : ''}`}
                    onClick={toggleMenu}
                >
                    ☰
                </button>

                {/* Menu */}
                <ul className={`${styles.menu} ${menuOpen ? styles.open : ''}`}>
                    <li>
                        <a
                            href="#projects"
                            className={activeLink === 'projects' ? styles.active : ''}
                            onClick={() => handleClick('projects')}
                        >
                            Projets
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className={activeLink === 'skills' ? styles.active : ''}
                            onClick={() => handleClick('skills')}
                        >
                            Mes Compétences
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={activeLink === 'contact' ? styles.active : ''}
                            onClick={() => handleClick('contact')}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
