import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrollProgress, setScrollProgress] = useState(0);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About me', href: '#about' },
        { name: 'Project', href: '#project' },
        { name: 'What i do', href: '#skills' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            // Handle navbar shadow on scroll
            setScrolled(window.scrollY > 20);

            // Calculate scroll progress
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            setScrollProgress(scrolled);

            // Detect active section
            const sections = navLinks.map(link => link.href.substring(1));
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setIsOpen(false);
        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md transition-all duration-300 ${scrolled ? 'shadow-lg shadow-black/5' : ''}`}>
            {/* Scroll Progress Bar */}
            <div className="absolute top-0 left-0 h-0.5 bg-black transition-all duration-300" style={{ width: `${scrollProgress}%` }}></div>

            <div className="flex justify-between items-center py-5 px-6 md:px-16 max-w-7xl mx-auto">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 text-black no-underline group">
                        <div className="relative flex items-center justify-center">
                            {/* Gradient glow on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"></div>
                            <div className="relative w-9 h-9 rounded-full border-2 border-black group-hover:border-transparent bg-gradient-to-br group-hover:from-purple-600 group-hover:via-blue-600 group-hover:to-pink-600 flex items-center justify-center transition-all duration-300">
                                <div className="w-2 h-2 bg-black group-hover:bg-white rounded-full transition-colors duration-300"></div>
                            </div>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-xs font-bold tracking-[0.2em] group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:via-blue-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Cappi</span>
                            <span className="text-lg font-bold tracking-widest group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:via-blue-600 group-hover:to-pink-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Dev</span>
                        </div>
                    </a>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => {
                        const isActive = activeSection === link.href.substring(1);
                        return (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="relative text-sm font-medium text-gray-600 hover:text-black transition-colors group py-2"
                            >
                                {link.name}
                                {/* Animated underline */}
                                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                            </a>
                        );
                    })}

                    {/* CTA Button */}
                    <a
                        href="#contact"
                        onClick={(e) => handleNavClick(e, '#contact')}
                        className="relative px-6 py-2.5 bg-black text-white text-sm font-bold rounded-full overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                        <span className="relative z-10">Let's Talk</span>
                        <div className="absolute inset-0 bg-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden z-50 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden z-40 animate-fade-in"
                            onClick={() => setIsOpen(false)}
                        ></div>

                        {/* Menu Panel */}
                        <div className="fixed top-0 right-0 bottom-0 w-64 bg-white/95 backdrop-blur-xl shadow-2xl flex flex-col md:hidden z-40 animate-slide-in-right">
                            <div className="flex flex-col gap-2 p-8 pt-24">
                                {navLinks.map((link) => {
                                    const isActive = activeSection === link.href.substring(1);
                                    return (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) => handleNavClick(e, link.href)}
                                            className={`text-lg font-medium px-4 py-3 rounded-xl transition-all ${isActive
                                                    ? 'bg-gradient-to-r from-purple-600 via-blue-600 to-pink-600 text-white'
                                                    : 'text-gray-700 hover:bg-gray-100'
                                                }`}
                                        >
                                            {link.name}
                                        </a>
                                    );
                                })}

                                {/* Mobile CTA */}
                                <a
                                    href="#contact"
                                    onClick={(e) => handleNavClick(e, '#contact')}
                                    className="mt-4 px-6 py-3 bg-black text-white text-center font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                                >
                                    Let's Talk ✨
                                </a>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
