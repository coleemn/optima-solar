import React from 'react';
import { Check, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Packages.module.css';

const Packages = () => {
    const packages = [
        {
            name: 'Starter Home',
            power: '3kW',
            badge: 'FAST SELLER',
            price: 'KSh 225,000 – 245,000',
            includes: [
                '6–8 high-efficiency solar panels',
                '3kW hybrid inverter',
                '5kWh lithium battery',
                'Mounting structure',
                'Basic installation',
            ],
            powers: ['Full house lighting', 'TV & WiFi', 'Fridge', 'Laptop charging'],
            idealFor: 'Young families, first-time buyers',
            level: 'Good',
        },
        {
            name: 'Most Popular',
            power: '5–6kW',
            badge: 'MOST POPULAR',
            isPopular: true,
            price: 'KSh 400,000 – 460,000',
            includes: [
                '10–14 solar panels',
                '5–6kW hybrid inverter',
                '10kWh lithium battery',
                'Smart monitoring system',
                'Professional installation',
            ],
            powers: ['Modern homes', 'Washing machine', 'Microwave', 'Multiple fridges'],
            idealFor: 'Middle & upper-middle income homes',
            level: 'Better',
        },
        {
            name: 'Executive',
            power: '8kW',
            badge: 'HIGH PERFORMANCE',
            price: 'KSh 560,000 – 620,000',
            includes: [
                '16–18 solar panels',
                '8kW inverter',
                '15kWh lithium battery',
                'Advanced protections',
                'Professional installation',
            ],
            powers: ['Air conditioning', 'Salon equipment', 'Borehole pump', 'Home office'],
            idealFor: 'Large homes and businesses',
            level: 'Best',
        },
        {
            name: 'Energy Independence',
            power: '10kW',
            badge: 'PREMIUM',
            price: 'KSh 650,000 – 750,000',
            includes: [
                '20+ premium panels',
                '10kW hybrid inverter',
                '20kWh lithium battery',
                'Smart energy monitoring',
                'Priority installation',
            ],
            powers: ['Villas', 'Hospitals', 'Schools', 'Farms'],
            idealFor: 'Institutions & high-energy users',
            level: 'Elite',
        },
    ];

    return (
        <section id="packages" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Solar Packages</h2>
                    <p className={styles.subtitle}>Compare our most requested solar solutions and choose what fits your energy needs.</p>
                </div>

                <div className={styles.grid}>
                    {packages.map((pkg, index) => (
                        <div key={index} className={`${styles.card} ${pkg.isPopular ? styles.popularCard : ''}`}>
                            {pkg.isPopular && <div className={styles.popularBadge}>⭐ MOST POPULAR — BEST VALUE</div>}
                            <div className={styles.levelBadge}>{pkg.level}</div>
                            <h3 className={styles.cardTitle}>{pkg.name} <span className={styles.power}>({pkg.power})</span></h3>
                            <div className={styles.price}>{pkg.price}</div>

                            <div className={styles.badgeContainer}>
                                <span className={`${styles.badge} ${styles[pkg.badge.toLowerCase().replace(' ', '')]}`}>{pkg.badge}</span>
                            </div>

                            <div className={styles.features}>
                                <h4>Includes:</h4>
                                <ul>
                                    {pkg.includes.map((item, i) => (
                                        <li key={i}><Check size={16} className={styles.checkIcon} /> {item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className={styles.powers}>
                                <h4>Powers:</h4>
                                <p>{pkg.powers.join(', ')}</p>
                            </div>

                            <div className={styles.idealFor}>
                                <strong>Ideal For:</strong> {pkg.idealFor}
                            </div>

                            <Link to="/contact" className={styles.ctaButton}>Get Free Quote</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;
