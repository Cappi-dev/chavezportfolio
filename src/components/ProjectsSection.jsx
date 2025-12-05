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
        image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop',
        role: 'Frontend Developer & Designer',
        technologies: ['JavaScript', 'Java', 'Kotlin'],
        challenge: 'Communities lack an organized platform to share local updates, alerts, and connect with neighbors safely.',
        solution: 'Develop a neighborhood social network where residents can post local news, events, and alerts, interact securely, and build stronger community engagement.'
    },
    {
        id: 2,
        title: 'SavorSpace',
        subtitle: '"A recipe-sharing platform where users can upload, browse, and discover dishes from different creators."',
        githubUrl: 'https://github.com/karl2522/SavorSpace-Frontend.git',
        image: savorSpaceImg,
        role: 'Frontend Developer & Designer',
        technologies: ['JavaScript', 'CSS', 'HTML'],
        challenge: 'Food enthusiasts struggle to discover and share recipes in a structured and interactive way. Existing platforms may lack social engagement or personalization.',
        solution: 'Create a social recipe-sharing platform where users can upload recipes with images, comment, rate, and search for personalized recipes based on ingredients or preferences.'
    },
    {
        id: 3,
        title: 'CryptoPulse',
        subtitle: '"A crypto tracking app that shows real-time coin data, market trends, and price movements."',
        githubUrl: 'https://github.com/Cappi-dev/CryptoPulse.git',
        image: cryptoPulseImg,
        role: 'Frontend Developer & Designer',
        technologies: ['JavaScript', 'CSS', 'HTML'],
        challenge: 'Investors and traders struggle with tracking cryptocurrency trends, price alerts, and portfolio management across multiple platforms.',
        solution: 'A crypto analytics platform that aggregates real-time cryptocurrency data, provides price alerts, market insights, and portfolio management tools for seamless tracking and decision-making.'
    },
    {
        id: 4,
        title: 'Payroll System',
        subtitle: '"Payroll System is designed to automate the process of managing employee compensation, including salary calculation, tax deductions, and distribution of payments."',
        githubUrl: 'https://github.com/Cappi-dev/Payroll_System.git',
        image: payrollImg,
        role: 'Frontend Developer & Designer',
        technologies: ['HTML', 'Python'],
        challenge: 'Manual payroll processing leads to errors, delayed payments, and difficulty tracking employee records. Companies also face compliance issues with taxation and labor laws.',
        solution: 'Develop an automated payroll management system that calculates salaries, taxes, and deductions accurately, generates payslips, and provides real-time reporting for employees and HR managers.'
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
                        <div
                            className="group flex flex-col gap-4"
                            data-shootable="project"
                            data-target-id={`project-${project.id}`}
                        >
                            {/* Image Card with Hover Overlay */}
                            <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-100 relative">
                                {/* Image */}
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:blur-sm"
                                />

                                {/* Hover Overlay with Case Study Details */}
                                <div className="absolute inset-0 bg-black/80 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-start pt-12 p-8 text-white">
                                    <div className="space-y-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {/* Role */}
                                        <div>
                                            <h4 className="text-xs font-semibold text-blue-400 uppercase tracking-wider mb-1">Role</h4>
                                            <p className="text-sm font-medium">{project.role}</p>
                                        </div>

                                        {/* Technologies */}
                                        <div>
                                            <h4 className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-2">Technologies</h4>
                                            <div className="flex flex-wrap gap-2">
                                                {project.technologies.map((tech, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium border border-white/20">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Challenge */}
                                        <div>
                                            <h4 className="text-xs font-semibold text-orange-400 uppercase tracking-wider mb-1">Challenge</h4>
                                            <p className="text-xs text-gray-300 leading-relaxed">{project.challenge}</p>
                                        </div>

                                        {/* Solution */}
                                        <div>
                                            <h4 className="text-xs font-semibold text-green-400 uppercase tracking-wider mb-1">Solution</h4>
                                            <p className="text-xs text-gray-300 leading-relaxed">{project.solution}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* View Code Button (Bottom Left) - Always Visible */}
                                <div className="absolute bottom-6 left-6 z-10">
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
