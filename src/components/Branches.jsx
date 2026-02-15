import React from 'react';
import { MapPin, Clock } from 'lucide-react';
import styles from './Branches.module.css';

const Branches = () => {
    const branches = [
        {
            city: 'Nairobi (HQ)',
            address: 'Solar Plaza, Mombasa Road',
        },
        {
            city: 'Mombasa',
            address: 'Coastal Energy Hub, Nyali',
        },
        {
            city: 'Kisumu',
            address: 'Lakeside Tower, Oginga Odinga St',
        },
        {
            city: 'Nakuru',
            address: 'Rift Valley Centre',
        },
    ];

    return (
        <section id="branches" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Serving Homes & Businesses Across Kenya</h2>
                    <p className={styles.subtitle}>Visit our branches or contact our regional teams for specialized support.</p>
                </div>

                <div className={styles.content}>
                    <div className={styles.mapContainer}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.278384566835!2d36.8219461!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d22f22f77d%3A0x673d325a7a7a3038!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1645519827612!5m2!1sen!2sus"
                            width="100%"
                            height="400"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Maps"
                        ></iframe>
                    </div>

                    <div className={styles.branchList}>
                        {branches.map((branch, index) => (
                            <div key={index} className={styles.branchCard}>
                                <h3 className={styles.cityName}>{branch.city}</h3>
                                <div className={styles.detail}>
                                    <MapPin size={18} className={styles.icon} />
                                    <span>{branch.address}</span>
                                </div>
                                <div className={styles.detail}>
                                    <Clock size={18} className={styles.icon} />
                                    <span>Mon - Sat: 8:00 AM - 5:00 PM</span>
                                </div>
                                <button className={styles.directionsBtn}>Get Directions</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Branches;
