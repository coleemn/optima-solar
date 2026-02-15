import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Packages from '../components/Packages';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';

const Home = () => {
    return (
        <>
            <Hero />
            <TrustBar />
            <Packages />
            <Projects />
            <Testimonials />
            <FAQ />
        </>
    );
};

export default Home;
