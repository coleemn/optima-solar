import React from 'react';
import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';

const Testimonials = () => {
    const testimonials = [
        {
            name: 'John Kamau',
            role: 'Homeowner, Karen',
            text: 'Optima Solar transformed our home energy. The team was professional, and we saw immediate savings on our electricity bill. Highly recommended!',
        },
        {
            name: 'Sarah Ochieng',
            role: 'Business Owner, Westlands',
            text: 'Reliable power for my salon was critical. Optima delivered a robust 8kW system that runs everything smoothly during outages.',
        },
        {
            name: 'David Mwangi',
            role: 'Farm Manager, Naivasha',
            text: 'The solar water pump solution has cut our irrigation costs by 80%. A fantastic investment for any farmer.',
        },
    ];

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>What Our Clients Say</h2>
                    <p className={styles.subtitle}>Join thousands of satisfied Kenyans running on clean energy.</p>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={20} fill="#FFB800" color="#FFB800" />
                                ))}
                            </div>
                            <p className={styles.text}>"{testimonial.text}"</p>
                            <div className={styles.author}>
                                <div className={styles.initials}>{testimonial.name.charAt(0)}</div>
                                <div>
                                    <h4 className={styles.name}>{testimonial.name}</h4>
                                    <p className={styles.role}>{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
