import React from 'react';
import Reveal from './Reveal';
import FadeIn from './FadeIn';

const ContactSection = () => {
    return (
        <footer id="contact" className="relative">

            {/* Contact Info Section */}
            <div className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
                <Reveal width="100%">
                    <h3 className="text-xl md:text-2xl font-medium mb-4 text-gray-800">Contact</h3>
                </Reveal>

                <Reveal delay={0.2} width="100%">
                    <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-16 tracking-tighter">
                        Let's rock <span className="text-gray-300">with me</span>
                    </h2>
                </Reveal>

                <Reveal delay={0.4} width="100%">
                    <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-32 text-lg md:text-xl font-medium underline decoration-1 underline-offset-4 text-gray-600">
                        <a href="tel:+919176085729" className="hover:text-black transition-colors">
                            (+63) 9670092113
                        </a>
                        <a href="mailto:sathyadev2404@gmail.com" className="hover:text-black transition-colors">
                            chavezjes71@gmail.com
                        </a>
                    </div>
                </Reveal>
            </div>

            {/* Dark Footer Section */}
            <div className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">

                {/* Background Glow */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">

                    {/* Logo */}
                    <FadeIn direction="up">
                        <div className="flex items-center gap-2 mb-16">
                            <div className="w-8 h-8 border-2 border-white rounded-full flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                            <div className="flex flex-col leading-none">
                                <span className="font-bold tracking-widest text-sm">Cappi</span>
                                <span className="font-bold tracking-widest text-sm">Dev</span>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Social Links */}
                    <FadeIn direction="up" delay={0.2}>
                        <div className="flex flex-wrap justify-center gap-6 mb-20">
                            <a
                                href="https://www.linkedin.com/in/jes-chavez-234434398/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-white transition-all duration-300 text-sm font-medium min-w-[140px] text-center"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://www.facebook.com/JesEmChavez/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-white transition-all duration-300 text-sm font-medium min-w-[140px] text-center"
                            >
                                Facebook
                            </a>
                            <a
                                href="https://github.com/Cappi-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 rounded-full border border-gray-700 text-gray-400 hover:text-white hover:border-white transition-all duration-300 text-sm font-medium min-w-[140px] text-center"
                            >
                                GitHub
                            </a>
                        </div>
                    </FadeIn>

                    {/* Copyright */}
                    <FadeIn direction="up" delay={0.4} fullWidth>
                        <div className="w-full border-t border-gray-800 pt-8 text-center">
                            <p className="text-gray-500 text-sm">
                                © Jes Emanuel Chavez. All Rights Reserved.
                            </p>
                        </div>
                    </FadeIn>

                </div>
            </div>
        </footer>
    );
};

export default ContactSection;
