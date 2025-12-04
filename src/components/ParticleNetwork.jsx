import React, { useEffect, useRef } from 'react';

const ParticleNetwork = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];
        let mouse = { x: null, y: null, radius: 150 };

        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        // Color palette - dark grays and subtle blues
        const colors = [
            { r: 0, g: 0, b: 0 },           // Black
            { r: 40, g: 40, b: 40 },        // Dark gray
            { r: 60, g: 60, b: 60 },        // Medium dark gray
            { r: 80, g: 80, b: 80 },        // Gray
            { r: 30, g: 40, b: 60 },        // Dark blue-gray
            { r: 40, g: 60, b: 90 },        // Subtle blue
            { r: 50, g: 70, b: 100 },       // Light blue-gray
        ];

        // Particle class
        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2 + 1;
                this.speedX = Math.random() * 0.5 - 0.25;
                this.speedY = Math.random() * 0.5 - 0.25;
                this.opacity = Math.random() * 0.5 + 0.3;
                // Assign random color from palette
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                // Bounce off edges
                if (this.x > canvas.width || this.x < 0) {
                    this.speedX = -this.speedX;
                }
                if (this.y > canvas.height || this.y < 0) {
                    this.speedY = -this.speedY;
                }

                // Mouse interaction
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius) {
                    const force = (mouse.radius - distance) / mouse.radius;
                    const angle = Math.atan2(dy, dx);
                    this.x -= Math.cos(angle) * force * 2;
                    this.y -= Math.sin(angle) * force * 2;
                }
            }

            draw() {
                // Calculate distance from mouse for glow effect
                let glowIntensity = 0;
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < mouse.radius) {
                        glowIntensity = 1 - (distance / mouse.radius);
                    }
                }

                // Draw glow if near mouse
                if (glowIntensity > 0) {
                    const glowSize = this.size + (glowIntensity * 4);
                    const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, glowSize);
                    gradient.addColorStop(0, `rgba(${this.color.r + 100}, ${this.color.g + 100}, ${this.color.b + 150}, ${this.opacity * glowIntensity})`);
                    gradient.addColorStop(1, `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, 0)`);

                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, glowSize, 0, Math.PI * 2);
                    ctx.fill();
                }

                // Draw particle
                const finalOpacity = this.opacity + (glowIntensity * 0.3);
                ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${finalOpacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Initialize particles
        const initParticles = () => {
            particles = [];
            const numberOfParticles = Math.floor((canvas.width * canvas.height) / 15000);
            for (let i = 0; i < numberOfParticles; i++) {
                particles.push(new Particle());
            }
        };
        initParticles();

        // Connect particles
        const connectParticles = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {
                        let opacity = (1 - distance / 120) * 0.15;
                        let lineWidth = 1;

                        // Brighten and thicken lines near mouse
                        if (mouse.x !== null && mouse.y !== null) {
                            const midX = (particles[i].x + particles[j].x) / 2;
                            const midY = (particles[i].y + particles[j].y) / 2;
                            const mouseDx = mouse.x - midX;
                            const mouseDy = mouse.y - midY;
                            const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy);

                            if (mouseDistance < mouse.radius) {
                                const glowFactor = 1 - (mouseDistance / mouse.radius);
                                opacity += glowFactor * 0.3;
                                lineWidth += glowFactor * 1.5;
                            }
                        }

                        ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`;
                        ctx.lineWidth = lineWidth;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            connectParticles();

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        // Mouse move handler
        const handleMouseMove = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        // Event listeners
        window.addEventListener('resize', () => {
            setCanvasSize();
            initParticles();
        });
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        // Cleanup
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', setCanvasSize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 w-full h-full pointer-events-none z-0"
            style={{ background: 'transparent' }}
        />
    );
};

export default ParticleNetwork;
