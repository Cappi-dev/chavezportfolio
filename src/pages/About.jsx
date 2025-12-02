import React from 'react';
import Navbar from '../components/Navbar';
import AboutSection from '../components/AboutSection';

const About = () => {
    return (
        <div className="min-h-screen bg-white text-black font-sans">
            <Navbar />
            <main>
                <AboutSection />
            </main>
        </div>
    );
};

export default About;
