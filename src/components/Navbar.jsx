import React, { useState } from 'react';
import { Menu, X, Phone, Sun } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const isActive = (path) => {
        return location.pathname === path ? styles.activeLink : '';
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link to="/" className={styles.logo} onClick={closeMenu}>
                    <Sun className={styles.logoIcon} size={32} />
                    <span className={styles.logoText}>Optima Solar</span>
                </Link>

                <div className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                    <Link to="/" className={isActive('/')} onClick={closeMenu}>Home</Link>
                    <Link to="/about" className={isActive('/about')} onClick={closeMenu}>About</Link>
                    <Link to="/services" className={isActive('/services')} onClick={closeMenu}>Services</Link>
                    <Link to="/projects" className={isActive('/projects')} onClick={closeMenu}>Projects</Link>
                    <Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>Contact</Link>
                    <Link to="/contact" className={styles.ctaButtonMobile} onClick={closeMenu}>Get Free Quote</Link>
                </div>

                <div className={styles.actions}>
                    <a href="tel:+254752813176" className={styles.phoneLink}>
                        <Phone size={20} />
                        <span>+254 752 813 176</span>
                    </a>
                    <Link to="/contact" className={styles.ctaButton}>Get Free Quote</Link>
                    <button className={styles.menuToggle} onClick={toggleMenu} aria-label="Toggle menu">
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
