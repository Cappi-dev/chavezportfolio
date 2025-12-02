import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
    return (
        <div className="min-h-screen text-black font-sans selection:bg-black selection:text-white overflow-x-hidden">
            <Navbar />
            <main>
                <Hero />
                <AboutSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
            </main>
        </div>
    );
};

export default Home;
