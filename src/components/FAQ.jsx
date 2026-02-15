import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from './FAQ.module.css';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: 'How much can I save with solar?',
            answer: 'Most homeowners save between 50% to 90% on their electricity bills immediately after installation. The exact amount depends on your current usage and the system size you choose.',
        },
        {
            question: 'How long do solar panels last?',
            answer: 'Our Tier-1 solar panels come with a 25-year performance warranty and can last 30+ years. Inverters and batteries typically have 5-10 year warranties.',
        },
        {
            question: 'Do you offer financing options?',
            answer: 'Yes, we partner with leading financial institutions to offer flexible payment plans. Contact our sales team to discuss installment options that fit your budget.',
        },
        {
            question: 'What happens when there is a blackout?',
            answer: 'With our hybrid systems including battery storage, your essential appliances will continue to run seamlessly during a KPLC blackout.',
        },
        {
            question: 'Do you install nationwide?',
            answer: 'Yes, Optima Solar has installation teams across Kenya. We have successfully completed projects in Nairobi, Mombasa, Kisumu, Nakuru, Eldoret, and many remote locations.',
        },
    ];

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section id="faq" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Frequently Asked Questions</h2>
                    <p className={styles.subtitle}>Get answers to common questions about switching to solar energy.</p>
                </div>

                <div className={styles.faqList}>
                    {faqs.map((faq, index) => (
                        <div key={index} className={`${styles.faqItem} ${activeIndex === index ? styles.active : ''}`}>
                            <button className={styles.question} onClick={() => toggleFAQ(index)}>
                                {faq.question}
                                {activeIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </button>
                            <div className={styles.answerWrapper} style={{ maxHeight: activeIndex === index ? '200px' : '0' }}>
                                <div className={styles.answer}>{faq.answer}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
