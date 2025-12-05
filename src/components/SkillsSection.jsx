import React from 'react';
import Reveal from './Reveal';
import FadeIn from './FadeIn';

const skills = [
    // Column 1
    { name: 'React.js', icon: 'react', color: 'bg-cyan-500' },
    { name: 'JavaScript', icon: 'javascript', color: 'bg-yellow-400' },

    // Column 2
    { name: 'TypeScript', icon: 'typescript', color: 'bg-blue-600' },
    { name: 'Tailwind CSS', icon: 'tailwind', color: 'bg-cyan-400' },
    { name: 'Figma', icon: 'figma', color: 'bg-purple-500' },

    // Column 3
    { name: 'UI/UX Design', icon: '🎨', color: 'bg-pink-500' },
    { name: 'Vite', icon: 'vite', color: 'bg-purple-600' },
    { name: 'Android Studio', icon: 'android', color: 'bg-green-500' },

    // Column 4
    { name: 'Git & GitHub', icon: 'github', color: 'bg-gray-800' },
    { name: 'Wireframing', icon: '📝', color: 'bg-gray-500' },
    { name: 'Prototyping', icon: '⚙️', color: 'bg-indigo-500' },
];

const Hexagon = ({ skill, index }) => (
    <div
        className="relative w-[120px] h-[104px] md:w-[140px] md:h-[122px] flex items-center justify-center group z-10 shrink-0"
        data-shootable="skill"
        data-target-id={`skill-${skill.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
        style={{
            filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.6))',
            animation: `float 6s ease-in-out infinite`,
            animationDelay: `${index * 0.5}s`
        }}>

        {/* Hexagon Shape Container with Scale Transition */}
        <div className="relative w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:z-20">

            {/* The Glass Hexagon (Flat-Topped) */}
            <div
                className="absolute inset-0 bg-[#111118]/90 backdrop-blur-xl transition-all duration-500 group-hover:bg-[#1A1A2E] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]"
                style={{
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.8)',
                    WebkitBackfaceVisibility: 'hidden',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)',
                    WebkitFontSmoothing: 'antialiased'
                }}
            >
                {/* Inner Highlight/Reflection - Top Gradient */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/8 via-transparent to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>

                {/* Bottom Reflection */}
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Subtle Border Effect - Replaces problematic CSS border */}
                <div
                    className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                    style={{
                        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(59,130,246,0.2) 100%)'
                    }}
                ></div>
            </div>

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 md:gap-3">
                <div className="text-2xl md:text-3xl text-white drop-shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1">
                    {skill.icon === 'react' ? (
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10">
                            <circle cx="16" cy="16" r="2.5" fill="#61DAFB" />
                            <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1" fill="none" />
                            <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(60 16 16)" />
                            <ellipse cx="16" cy="16" rx="12" ry="4.5" stroke="#61DAFB" strokeWidth="1" fill="none" transform="rotate(120 16 16)" />
                        </svg>
                    ) : skill.icon === 'javascript' ? (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10">
                            <rect width="24" height="24" fill="#000" />
                            <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" fill="#F7DF1E" />
                        </svg>
                    ) : skill.icon === 'typescript' ? (
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10">
                            <rect width="24" height="24" rx="2" fill="#FFF" />
                            <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" fill="#3178C6" />
                        </svg>
                    ) : skill.icon === 'tailwind' ? (
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10">
                            <path d="M16 8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.5.9 2.2 1.6 1.1 1.1 2.4 2.4 5.2 2.4 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.5-.9-2.2-1.6-1.1-1.1-2.4-2.4-5.2-2.4zm-6 8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.9.2 1.5.9 2.2 1.6 1.1 1.1 2.4 2.4 5.2 2.4 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.9-.2-1.5-.9-2.2-1.6-1.1-1.1-2.4-2.4-5.2-2.4z" fill="#06B6D4" />
                        </svg>
                    ) : skill.icon === 'figma' ? (
                        <svg width="24" height="36" viewBox="0 0 24 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-6 h-9 md:w-8 md:h-12 drop-shadow-md">
                            <path d="M6 36C2.68629 36 0 33.3137 0 30C0 26.6863 2.68629 24 6 24H12V36H6Z" fill="#0ACF83" />
                            <path d="M0 18C0 14.6863 2.68629 12 6 12H12V24H6C2.68629 24 0 21.3137 0 18Z" fill="#A259FF" />
                            <path d="M0 6C0 2.68629 2.68629 0 6 0H12V12H6C2.68629 12 0 9.31371 0 6Z" fill="#F24E1E" />
                            <path d="M12 0H18C21.3137 0 24 2.68629 24 6C24 9.31371 21.3137 12 18 12H12V0Z" fill="#FF7262" />
                            <path d="M24 18C24 21.3137 21.3137 24 18 24H12V12H18C21.3137 12 24 14.6863 24 18Z" fill="#1ABCFE" />
                        </svg>
                    ) : skill.icon === 'vite' ? (
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10">
                            <path d="M27.5 5.5L17.5 26.5c-.3.6-1.2.6-1.5 0L5.5 5.5c-.3-.6.2-1.2.8-1.2h20.4c.6 0 1.1.6.8 1.2z" fill="url(#vite-gradient)" />
                            <path d="M21 4.3L16.8 13c-.2.4-.8.4-1 0L11.5 4.3c-.2-.4.1-.8.5-.8h8.5c.4 0 .7.4.5.8z" fill="#FFD028" />
                            <defs>
                                <linearGradient id="vite-gradient" x1="16" y1="4.3" x2="16" y2="26.5" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="#41D1FF" />
                                    <stop offset="1" stopColor="#BD34FE" />
                                </linearGradient>
                            </defs>
                        </svg>
                    ) : skill.icon === 'android' ? (
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10">
                            <path d="M5 14h22v10c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V14zm17-4l1.5-2.6c.1-.2 0-.4-.2-.5-.2-.1-.4 0-.5.2L21.3 10h-10.6L9.2 7.1c-.1-.2-.3-.3-.5-.2-.2.1-.3.3-.2.5L10 10c-2.2 1.1-3.7 3.4-3.7 6h19.4c0-2.6-1.5-4.9-3.7-6zM12 13c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1zm8 0c-.6 0-1-.4-1-1s.4-1 1-1 1 .4 1 1-.4 1-1 1z" fill="#3DDC84" />
                        </svg>
                    ) : skill.icon === 'github' ? (
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 md:w-10 md:h-10">
                            <path fillRule="evenodd" clipRule="evenodd" d="M16 4C9.37 4 4 9.37 4 16c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.82.58C24.56 25.8 28 21.3 28 16c0-6.63-5.37-12-12-12z" fill="#FFF" />
                        </svg>
                    ) : (
                        <span className={skill.color === 'bg-black' ? 'text-white' : 'text-blue-400'}>{skill.icon}</span>
                    )}
                </div>
                <span className="text-[10px] md:text-[11px] font-medium text-gray-400 tracking-wide group-hover:text-white transition-colors duration-300">
                    {skill.name}
                </span>
            </div>
        </div>
    </div>
);

const SkillsSection = () => {
    return (
        <section id="skills" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-black overflow-hidden">

            {/* Background Nebula Effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Main Blue Glow */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-blue-900/20 rounded-full blur-[120px] mix-blend-screen animate-pulse duration-[10s]"></div>
                {/* Secondary Purple Glow */}
                <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-indigo-900/10 rounded-full blur-[100px] mix-blend-screen animate-pulse duration-[8s] delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Column: Text */}
                <div className="text-white">
                    <Reveal>
                        <h3 className="text-xl md:text-2xl font-medium mb-4 text-gray-400">What I Do !</h3>
                    </Reveal>
                    <Reveal delay={0.3}>
                        <h2 className="text-5xl md:text-7xl font-bold leading-tight mb-8 tracking-tight">
                            My Specialization <br />
                            <span className="text-gray-500">And Key Skills</span>
                        </h2>
                    </Reveal>
                    <Reveal delay={0.4}>
                        <p className="text-gray-400 text-lg md:text-xl max-w-lg leading-relaxed">
                            I specialize in building clean, responsive, and user-friendly interfaces using modern frontend tools. My focus is on crafting smooth user experiences, writing efficient code, and turning ideas into working designs.
                        </p>
                    </Reveal>
                </div>

                {/* Right Column: Hexagon Grid - Interlocking Honeycomb Layout */}
                <div className="flex justify-center lg:justify-end pl-4 md:pl-0 scale-90 md:scale-100">

                    {/* Column 1 (2 items) - Offset Down */}
                    <div className="flex flex-col gap-1 md:gap-2 mt-12 md:mt-[4rem]">
                        <FadeIn delay={0.1} direction="up">
                            <Hexagon skill={skills[0]} index={0} />
                        </FadeIn>
                        <FadeIn delay={0.2} direction="up">
                            <Hexagon skill={skills[1]} index={1} />
                        </FadeIn>
                    </div>

                    {/* Column 2 (3 items) - No Offset - Negative Margin for Overlap */}
                    <div className="flex flex-col gap-1 md:gap-2 -ml-[1.2rem] md:-ml-[1.6rem]">
                        <FadeIn delay={0.3} direction="up">
                            <Hexagon skill={skills[2]} index={2} />
                        </FadeIn>
                        <FadeIn delay={0.4} direction="up">
                            <Hexagon skill={skills[3]} index={3} />
                        </FadeIn>
                        <FadeIn delay={0.5} direction="up">
                            <Hexagon skill={skills[4]} index={4} />
                        </FadeIn>
                    </div>

                    {/* Column 3 (3 items) - Offset Down - Negative Margin */}
                    <div className="flex flex-col gap-1 md:gap-2 mt-12 md:mt-[4rem] -ml-[1.2rem] md:-ml-[1.6rem]">
                        <FadeIn delay={0.6} direction="up">
                            <Hexagon skill={skills[5]} index={5} />
                        </FadeIn>
                        <FadeIn delay={0.7} direction="up">
                            <Hexagon skill={skills[6]} index={6} />
                        </FadeIn>
                        <FadeIn delay={0.8} direction="up">
                            <Hexagon skill={skills[7]} index={7} />
                        </FadeIn>
                    </div>

                    {/* Column 4 (3 items) - No Offset - Negative Margin */}
                    <div className="flex flex-col gap-1 md:gap-2 -ml-[1.2rem] md:-ml-[1.6rem]">
                        <FadeIn delay={0.9} direction="up">
                            <Hexagon skill={skills[8]} index={8} />
                        </FadeIn>
                        <FadeIn delay={1.0} direction="up">
                            <Hexagon skill={skills[9]} index={9} />
                        </FadeIn>
                        <FadeIn delay={1.1} direction="up">
                            <Hexagon skill={skills[10]} index={10} />
                        </FadeIn>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default SkillsSection;
