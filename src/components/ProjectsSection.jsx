import React from 'react';
import Reveal from './Reveal';
import FadeIn from './FadeIn';
import Button from './Button';
import cryptoPulseImg from '../assets/cryptopulse.png';
import savorSpaceImg from '../assets/savorspace.png';
import payrollImg from '../assets/payroll.png';

const projects = [
    {
        id: 1,
        title: 'Neighbornet',
        subtitle: '"A simple community app that keeps neighbors connected."',
        githubUrl: 'https://github.com/Penguinmans32/IT342-G3-NeighborNet.git',
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop', // Mobile app placeholder
    },
    {
        id: 2,
        title: 'SavorSpace',
        subtitle: '"A recipe-sharing platform where users can upload, browse, and discover dishes from different creators."',
        githubUrl: 'https://github.com/karl2522/SavorSpace-Frontend.git',
        image: savorSpaceImg, // Food e-commerce visualization
    },
    {
        id: 3,
        title: 'CryptoPulse',
        subtitle: '"A crypto tracking app that shows real-time coin data, market trends, and price movements."',
        githubUrl: 'https://github.com/Cappi-dev/CryptoPulse.git',
        image: cryptoPulseImg, // Crypto dashboard visualization
    },
    {
        id: 4,
        title: 'Payroll System',
        subtitle: '"Payroll System is designed to automate the process of managing employee compensation, including salary calculation, tax deductions, and distribution of payments."',
        githubUrl: 'https://github.com/Cappi-dev/Payroll_System.git',
        image: payrollImg, // Payroll dashboard visualization
    },
];

const ProjectsSection = () => {
    return (
        <section id="project" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-black">
            <Reveal>
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
            </Reveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
                {projects.map((project, index) => (
                    <FadeIn key={project.id} delay={index * 0.1} direction="up">
                        <div className="group flex flex-col gap-4">
                            {/* Image Card */}
                            <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-100 relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* View Code Button (Bottom Left) */}
                                <div className="absolute bottom-6 left-6">
                                    <a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gradient-to-r from-blue-600 to-purple-600 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold text-white hover:from-blue-700 hover:to-purple-700 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 inline-flex items-center gap-2 group/btn"
                                    >
                                        <span>View Code</span>
                                        <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="transition-transform group-hover/btn:translate-x-0.5"
                                        >
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                            <polyline points="15 3 21 3 21 9"></polyline>
                                            <line x1="10" y1="14" x2="21" y2="3"></line>
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex justify-between items-start mt-2">
                                <div>
                                    <h3 className="text-xl font-bold text-black mb-1">{project.title}</h3>
                                    <p className="text-gray-500 text-sm font-medium">{project.subtitle}</p>
                                </div>
                                <button className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white hover:border-black transition-colors">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </FadeIn>
                ))}
            </div>

            {/* View All Works Button */}
            <Reveal delay={0.4} width="100%">
                <div className="flex justify-center mt-20">
                    <Button
                        href="https://github.com/Cappi-dev?tab=repositories"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View All Works
                    </Button>
                </div>
            </Reveal>
        </section>
    );
};

export default ProjectsSection;
