import React, { useState, useEffect } from 'react';
import Badge from './Badge';
import Button from './Button';
import Reveal from './Reveal';
import FadeIn from './FadeIn';
import Typewriter from './Typewriter';

const Hero = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-12 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center overflow-hidden">

            {/* Mouse Follower Spotlight */}
            <div
                className="absolute w-[500px] h-[500px] bg-gradient-to-r from-blue-100/40 to-purple-100/40 rounded-full blur-[100px] pointer-events-none transition-transform duration-200 ease-out -z-10"
                style={{
                    left: -250,
                    top: -250,
                    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                }}
            ></div>

            {/* Header */}
            <Reveal>
                <h2 className="text-xl md:text-2xl font-medium mb-4 text-gray-800">
                    Hi! There, I'm Jes,
                </h2>
            </Reveal>

            {/* Main Title */}
            <div className="flex flex-col items-center justify-center leading-none mb-8 w-full">
                <Reveal delay={0.3}>
                    <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter uppercase mb-2">
                        UI UX DESIGNER
                    </h1>
                </Reveal>
                <Reveal delay={0.4}>
                    <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter uppercase">
                        <span className="text-black">&</span>
                        <Typewriter
                            text="FRONTEND DEV"
                            speed={100}
                            delay={1000}
                            className="text-transparent [-webkit-text-stroke:1px_black] md:[-webkit-text-stroke:2px_black]"
                            cursorClassName="text-black text-5xl md:text-7xl lg:text-9xl"
                        />
                    </div>
                </Reveal>
            </div>

            {/* Subtitle */}
            <Reveal delay={0.5}>
                <p className="text-base md:text-lg text-gray-600 max-w-2xl mb-16 font-medium">
                    I Design Beautifully Simple Things And I Love What I Do. Just Simple Like That!
                </p>
            </Reveal>

            {/* Badge positioned absolutely or relatively depending on layout */}
            <div className="absolute bottom-0 right-4 md:right-10 md:bottom-10 hidden md:block">
                <FadeIn delay={0.8} direction="left">
                    <Badge />
                </FadeIn>
            </div>

            {/* Mobile Badge */}
            <div className="md:hidden mt-8">
                <FadeIn delay={0.8} direction="up">
                    <Badge />
                </FadeIn>
            </div>

        </section>
    );
};

export default Hero;
