import React from 'react';
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
    return (
        <section id="contact" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.info}>
                        <h2 className={styles.title}>Stop Overpaying <br />for Electricity.</h2>
                        <p className={styles.subtitle}>Contact us today for a free consultation and customized solar proposal.</p>

                        <div className={styles.details}>
                            <div className={styles.detailItem}>
                                <div className={styles.iconWrapper}><Phone size={24} /></div>
                                <div>
                                    <h4>Call Us</h4>
                                    <a href="tel:+254102378507">+254 102 378 507</a>
                                    <a href="tel:+254752813176">+254 752 813 176</a>
                                </div>
                            </div>

                            <div className={styles.detailItem}>
                                <div className={styles.iconWrapper}><Mail size={24} /></div>
                                <div>
                                    <h4>Email Us</h4>
                                    <a href="mailto:optimasolarrenergy@gmail.com">optimasolarrenergy@gmail.com</a>
                                </div>
                            </div>

                            <div className={styles.detailItem}>
                                <div className={styles.iconWrapper}><Clock size={24} /></div>
                                <div>
                                    <h4>Opening Hours</h4>
                                    <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                                    <p>Sat: 8:00 AM - 1:00 PM</p>
                                </div>
                            </div>
                        </div>

                        <a href="https://wa.me/254752813176" className={styles.whatsappBtn}>
                            <MessageCircle size={20} /> Chat on WhatsApp
                        </a>
                    </div>

                    <form className={styles.form} onSubmit={(e) => {
                        e.preventDefault();
                        const formData = new FormData(e.target);
                        const data = Object.fromEntries(formData.entries());
                        const subject = `New Solar Quote Request - ${data.name}`;
                        const body = `Name: ${data.name}%0D%0APhone: ${data.phone}%0D%0AEmail: ${data.email}%0D%0ASystem Interest: ${data.interest}%0D%0AMessage: ${data.message}`;
                        window.location.href = `mailto:optimasolarrenergy@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
                    }}>
                        <h3 className={styles.formTitle}>Get Free Quote</h3>
                        <div className={styles.formGroup}>
                            <label>Full Name</label>
                            <input type="text" name="name" placeholder="Enter your name" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Phone Number</label>
                            <input type="tel" name="phone" placeholder="Ex: 0712 345 678" required />
                        </div>
                        <div className={styles.formGroup}>
                            <label>Email Address</label>
                            <input type="email" name="email" placeholder="Enter your email" />
                        </div>
                        <div className={styles.formGroup}>
                            <label>System Interest</label>
                            <select name="interest">
                                <option>Select a package...</option>
                                <option>3kW Starter Home</option>
                                <option>5kW Most Popular</option>
                                <option>8kW Executive</option>
                                <option>10kW+ Commercial</option>
                                <option>Not Sure / Other</option>
                            </select>
                        </div>
                        <div className={styles.formGroup}>
                            <label>Message (Optional)</label>
                            <textarea name="message" placeholder="Tell us about your energy needs..." rows="3"></textarea>
                        </div>
                        <button type="submit" className={styles.submitBtn}>Send Request (Email)</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
