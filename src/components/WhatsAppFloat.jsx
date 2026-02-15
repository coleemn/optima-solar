import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import styles from './WhatsAppFloat.module.css';

const WhatsAppFloat = () => {
    const [showOptions, setShowOptions] = useState(false);

    return (
        <div className={styles.wrapper}>
            {showOptions && (
                <div className={styles.dropdown}>
                    <div className={styles.dropdownArrow}></div>
                    <a
                        href="https://wa.me/254752813176"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.option}
                    >
                        <MessageCircle size={16} /> +254 752 813 176
                    </a>
                    <a
                        href="https://wa.me/254102378507"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.option}
                    >
                        <MessageCircle size={16} /> +254 102 378 507
                    </a>
                </div>
            )}
            <button
                className={styles.floatBtn}
                onClick={() => setShowOptions(!showOptions)}
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle size={32} />
            </button>
        </div>
    );
};

export default WhatsAppFloat;
