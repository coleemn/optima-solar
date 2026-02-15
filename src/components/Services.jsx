import React from 'react';
import { Home, Factory, Battery, Wrench, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Services.module.css';

const Services = () => {
    const services = [
        {
            icon: <Home size={40} />,
            title: 'Residential Installation',
            description: 'Complete solar solutions for homes of all sizes, ensuring energy independence and savings.',
        },
        {
            icon: <Factory size={40} />,
            title: 'Commercial Solar',
            description: 'Scalable energy systems for businesses, factories, and institutions to cut operational costs.',
        },
        {
            icon: <Battery size={40} />,
            title: 'Battery Storage',
            description: 'Advanced lithium battery backup systems to keep your power on during blackouts.',
        },
        {
            icon: <Wrench size={40} />,
            title: 'Solar Maintenance',
            description: 'Regular cleaning, monitoring, and servicing to ensure peak performance of your system.',
        },
        {
            icon: <Lightbulb size={40} />,
            title: 'Energy Consultation',
            description: 'Expert audits and planning to optimize your energy consumption and system design.',
        },
    ];

    return (
        <section id="services" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Our Services</h2>
                    <p className={styles.subtitle}>Comprehensive solar energy solutions tailored to your specific requirements.</p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>{service.icon}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.description}>{service.description}</p>
                            <Link to="/contact" className={styles.link}>Learn More &rarr;</Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
