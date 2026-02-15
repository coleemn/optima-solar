import React, { useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

const Hero = () => {
    const [showPhoneOptions, setShowPhoneOptions] = useState(false);

    return (
        <section id="home" className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <div className={styles.textContent}>
                    <h1 className={styles.headline}>
                        Power Your Home & Business with <span className={styles.highlight}>Reliable Solar Energy.</span>
                    </h1>
                    <p className={styles.subheadline}>
                        Reduce electricity costs and achieve energy independence with expertly installed solar solutions across Kenya.
                    </p>
                    <div className={styles.actions}>
                        <Link to="/contact" className={styles.primaryBtn}>
                            Get Free Quote <ArrowRight size={20} />
                        </Link>
                        <div className={styles.phoneWrapper}>
                            <button
                                className={styles.secondaryBtn}
                                onClick={() => setShowPhoneOptions(!showPhoneOptions)}
                            >
                                <Phone size={20} /> Call Now
                            </button>
                            {showPhoneOptions && (
                                <div className={styles.phoneDropdown}>
                                    <div className={styles.dropdownArrow}></div>
                                    <a href="tel:+254752813176" className={styles.phoneOption}>
                                        <Phone size={16} /> +254 752 813 176
                                    </a>
                                    <a href="tel:+254102378507" className={styles.phoneOption}>
                                        <Phone size={16} /> +254 102 378 507
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>500+</span>
                            <span className={styles.statLabel}>Installations</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>100%</span>
                            <span className={styles.statLabel}>Satisfaction</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statNumber}>Nationwide</span>
                            <span className={styles.statLabel}>Coverage</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
