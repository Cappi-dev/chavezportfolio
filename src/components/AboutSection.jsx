import React from 'react';
import FadeIn from './FadeIn';
import Button from './Button';
import profileImg from '../assets/profile.png';

const AboutSection = () => {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-black">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                {/* Left Column: Content */}
                <div className="flex flex-col items-start">
                    <FadeIn direction="right" delay={0.2}>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">About me</h2>
                    </FadeIn>

                    <div className="space-y-6 text-lg md:text-xl leading-relaxed font-medium text-gray-800">
                        <FadeIn direction="right" delay={0.3}>
                            <p>
                                Hello! I'm Jes Emanuel Chavez, a dedicated and creative frontend developer who loves building clean and user-friendly digital experiences. With a fresh perspective and a strong drive to improve, I approach every project with focus, curiosity, and attention to detail.
                            </p>
                        </FadeIn>
                        <FadeIn direction="right" delay={0.4}>
                            <p>
                                I’ve developed my skills in React, UI design, and turning ideas into functional, smooth interfaces. I’m excited to use what I’ve learned to solve real problems, create meaningful projects, and continue growing as a developer.
                            </p>
                        </FadeIn>
                    </div>

                    <FadeIn direction="up" delay={0.5}>
                        <div className="mt-12">
                            <Button>Let's Talk</Button>
                        </div>
                    </FadeIn>
                </div>

                {/* Right Column: Image and Caption */}
                <div className="flex flex-col gap-6 items-center">
                    <FadeIn direction="left" delay={0.4}>
                        <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden bg-gray-100">
                            {/* User image */}
                            <img
                                src={profileImg}
                                alt="Portrait of Jes Emanuel Chavez"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>
                    </FadeIn>
                    <FadeIn direction="left" delay={0.5}>
                        <p className="text-gray-600 text-lg md:text-xl max-w-md text-center italic">
                            "A developer who loves turning simple ideas into smooth and usable interfaces."
                        </p>
                    </FadeIn>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;
