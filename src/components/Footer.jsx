import React from 'react';
import { Sun, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.col}>
                        <div className={styles.logo}>
                            <Sun className={styles.logoIcon} size={28} />
                            <span className={styles.logoText}>Optima Solar</span>
                        </div>
                        <p className={styles.description}>
                            Kenya's leading provider of reliable, high-performance solar energy solutions for homes and businesses.
                        </p>
                        <div className={styles.socials}>
                            <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
                            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
                            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    <div className={styles.col}>
                        <h4 className={styles.title}>Quick Links</h4>
                        <ul className={styles.links}>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><Link to="/#packages">Solar Packages</Link></li>
                            <li><Link to="/projects">Our Projects</Link></li>
                            <li><Link to="/contact">Branches</Link></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4 className={styles.title}>Services</h4>
                        <ul className={styles.links}>
                            <li><Link to="/services">Residential Installation</Link></li>
                            <li><Link to="/services">Commercial Solar</Link></li>
                            <li><Link to="/services">Battery Storage</Link></li>
                            <li><Link to="/services">Maintenance & Repair</Link></li>
                            <li><Link to="/services">Energy Audits</Link></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4 className={styles.title}>Contact Us</h4>
                        <ul className={styles.contactInfo}>
                            <li>
                                <MapPin size={18} className={styles.icon} />
                                <span>Solar Plaza, Mombasa Road, Nairobi</span>
                            </li>
                            <li>
                                <Phone size={18} className={styles.icon} />
                                <a href="tel:+254752813176">+254 752 813 176</a>
                            </li>
                            <li>
                                <Mail size={18} className={styles.icon} />
                                <a href="mailto:optimasolarrenergy@gmail.com">optimasolarrenergy@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Optima Solar Kenya. All rights reserved.</p>
                    <div className={styles.legal}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
