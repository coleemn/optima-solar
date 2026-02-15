import React from 'react';
import TrustBar from '../components/TrustBar';

const About = () => {
    return (
        <div style={{ paddingTop: '80px', paddingBottom: '40px' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#1a365d' }}>About Optima Solar</h1>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '40px' }}>
                    Optima Solar is a leading provider of sustainable energy solutions in Kenya.
                    We are dedicated to empowering homes and businesses with reliable, efficient,
                    and affordable solar power systems. Our mission is to accelerate the transition
                    to clean energy, reducing carbon footprints while saving our customers money.
                </p>

                <h2 style={{ fontSize: '2rem', marginBottom: '15px', color: '#1a365d' }}>Our Vission</h2>
                <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '40px' }}>
                    To be the most trusted and innovative solar energy partner in East Africa,
                    driving a future where clean energy is accessible to everyone.
                </p>

                <h2 style={{ fontSize: '2rem', marginBottom: '15px', color: '#1a365d' }}>Why Choose Us?</h2>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '1.1rem', lineHeight: '1.8', color: '#4a5568', marginBottom: '40px' }}>
                    <li>Expert installation by certified technicians.</li>
                    <li>High-quality, durable solar components.</li>
                    <li>Comprehensive warranty and after-sales support.</li>
                    <li>Customized solutions tailored to your specific energy needs.</li>
                </ul>
            </div>
            <TrustBar />
        </div>
    );
};

export default About;
