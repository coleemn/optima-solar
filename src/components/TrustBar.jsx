import React from 'react';
import { Award, ShieldCheck, Zap, UserCheck, Wrench } from 'lucide-react';
import styles from './TrustBar.module.css';

const TrustBar = () => {
    const features = [
        { icon: <UserCheck size={24} />, text: 'Certified Installers' },
        { icon: <Award size={24} />, text: 'Tier-1 Equipment' },
        { icon: <Zap size={24} />, text: 'Nationwide Coverage' },
        { icon: <ShieldCheck size={24} />, text: 'Warranty Protection' },
        { icon: <Wrench size={24} />, text: 'After-Sales Support' },
    ];

    return (
        <div className={styles.trustBar}>
            <div className={styles.container}>
                {features.map((feature, index) => (
                    <div key={index} className={styles.feature}>
                        <span className={styles.icon}>{feature.icon}</span>
                        <span className={styles.text}>{feature.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TrustBar;
