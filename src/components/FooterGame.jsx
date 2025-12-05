import React, { useEffect, useRef, useState } from 'react';

const FooterGame = ({ onHitButton, onExit }) => {
    const canvasRef = useRef(null);
    const [isMobile, setIsMobile] = useState(false);
    const gameStateRef = useRef({
        ship: { x: 0, y: 0 },
        bullets: [],
        particles: [],
        mouse: { x: 0, y: 0 },
        lastShot: 0,
        animationId: null,
        targetHealth: {}, // Track health of all targets
        respawnTimers: {} // Track respawn timers
    });

    // Cleanup function to restore all targets
    const cleanupGame = () => {
        const game = gameStateRef.current;

        // Clear all respawn timers
        Object.values(game.respawnTimers).forEach(timer => clearTimeout(timer));
        game.respawnTimers = {};

        // Restore all destroyed targets
        const shootableElements = document.querySelectorAll('[data-shootable]');
        shootableElements.forEach(element => {
            element.classList.remove('health-3', 'health-2', 'health-1', 'health-0', 'target-destroyed', 'target-respawn', 'animate-shake');
        });

        // Reset health tracking
        game.targetHealth = {};
    };

    useEffect(() => {
        // Detect mobile
        setIsMobile(window.innerWidth < 768);

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const game = gameStateRef.current;

        // Initialize all shootable targets
        const initializeTargets = () => {
            const shootableElements = document.querySelectorAll('[data-shootable]');
            shootableElements.forEach(element => {
                const targetId = element.getAttribute('data-target-id');
                if (targetId && !game.targetHealth[targetId]) {
                    game.targetHealth[targetId] = {
                        health: 3,
                        maxHealth: 3,
                        destroyed: false
                    };
                }
            });
        };
        initializeTargets();

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // Initialize ship position
            if (isMobile) {
                game.ship.x = canvas.width / 2;
                game.ship.y = canvas.height - 100;
            }
        };
        resizeCanvas();

        // Mouse move handler (desktop)
        const handleMouseMove = (e) => {
            if (!isMobile) {
                game.mouse.x = e.clientX;
                game.mouse.y = e.clientY;
                game.ship.x = e.clientX;
                game.ship.y = e.clientY;
            }
        };

        // Touch/Click handler (mobile)
        const handleTouch = (e) => {
            e.preventDefault();
            const touch = e.touches ? e.touches[0] : e;
            const rect = canvas.getBoundingClientRect();
            const targetX = touch.clientX - rect.left;
            const targetY = touch.clientY - rect.top;

            // Shoot bullet toward touch point
            shootBullet(targetX, targetY);
        };

        // Shoot bullet
        const shootBullet = (targetX, targetY) => {
            const angle = Math.atan2(targetY - game.ship.y, targetX - game.ship.x);
            game.bullets.push({
                x: game.ship.x,
                y: game.ship.y,
                vx: Math.cos(angle) * 8,
                vy: Math.sin(angle) * 8,
                size: 4
            });
        };

        // Auto-shoot for desktop
        const autoShoot = () => {
            if (!isMobile) {
                const now = Date.now();
                if (now - game.lastShot > 200) {
                    shootBullet(game.ship.x, game.ship.y - 50);
                    game.lastShot = now;
                }
            }
        };

        // Apply visual damage to target
        const applyDamage = (element, targetId) => {
            const targetData = game.targetHealth[targetId];
            if (!targetData) return;

            // Remove old health classes
            element.classList.remove('health-3', 'health-2', 'health-1', 'health-0');

            // Add new health class
            element.classList.add(`health-${targetData.health}`);

            // If destroyed, hide and schedule respawn (but NOT for social buttons)
            if (targetData.health === 0 && !targetData.destroyed) {
                targetData.destroyed = true;
                element.classList.add('target-destroyed');

                // Only respawn if NOT a social button
                const isSocialButton = targetId.startsWith('social-');
                if (!isSocialButton) {
                    // Schedule respawn after 5 seconds
                    game.respawnTimers[targetId] = setTimeout(() => {
                        targetData.health = 3;
                        targetData.destroyed = false;
                        element.classList.remove('target-destroyed', 'health-0');
                        element.classList.add('target-respawn', 'health-3');

                        // Remove respawn animation class after animation completes
                        setTimeout(() => {
                            element.classList.remove('target-respawn');
                        }, 500);
                    }, 5000);
                }
            }
        };

        // Check collisions with ALL shootable targets
        const checkCollisions = () => {
            const shootableElements = document.querySelectorAll('[data-shootable]:not(.target-destroyed)');

            game.bullets.forEach((bullet, bulletIndex) => {
                shootableElements.forEach((element) => {
                    const rect = element.getBoundingClientRect();

                    if (
                        bullet.x > rect.left &&
                        bullet.x < rect.right &&
                        bullet.y > rect.top &&
                        bullet.y < rect.bottom
                    ) {
                        const targetId = element.getAttribute('data-target-id');
                        if (!targetId) return;

                        const targetData = game.targetHealth[targetId];
                        if (!targetData || targetData.destroyed) return;

                        // Hit detected!
                        game.bullets.splice(bulletIndex, 1);

                        // Reduce health
                        targetData.health = Math.max(0, targetData.health - 1);

                        // Apply visual damage
                        applyDamage(element, targetId);

                        // Add shake animation directly to element (avoids React re-renders)
                        element.classList.remove('animate-shake');
                        void element.offsetWidth; // Trigger reflow
                        element.classList.add('animate-shake');

                        // Remove shake class after animation
                        setTimeout(() => {
                            element.classList.remove('animate-shake');
                        }, 500);

                        // Spawn particles
                        const particleCount = targetData.health === 0 ? 25 : 15;
                        for (let i = 0; i < particleCount; i++) {
                            game.particles.push({
                                x: bullet.x,
                                y: bullet.y,
                                vx: (Math.random() - 0.5) * 8,
                                vy: (Math.random() - 0.5) * 8,
                                size: Math.random() * 4 + 2,
                                life: 1,
                                color: targetData.health === 0
                                    ? `hsl(${Math.random() * 60}, 100%, 50%)` // Red/orange for destruction
                                    : `hsl(${Math.random() * 60 + 180}, 100%, 50%)` // Cyan/blue for hits
                            });
                        }
                    }
                });
            });
        };

        // Update game state
        const update = () => {
            // Update bullets
            game.bullets = game.bullets.filter(bullet => {
                bullet.x += bullet.vx;
                bullet.y += bullet.vy;
                return bullet.y > 0 && bullet.y < canvas.height &&
                    bullet.x > 0 && bullet.x < canvas.width;
            });

            // Update particles
            game.particles = game.particles.filter(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;
                particle.vy += 0.2; // Gravity
                particle.life -= 0.02;
                return particle.life > 0;
            });

            // Auto-shoot on desktop
            autoShoot();

            // Check collisions
            checkCollisions();
        };

        // Draw game
        const draw = () => {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw ship (retro triangle)
            ctx.fillStyle = '#00ff00';
            ctx.beginPath();
            ctx.moveTo(game.ship.x, game.ship.y - 10);
            ctx.lineTo(game.ship.x - 8, game.ship.y + 10);
            ctx.lineTo(game.ship.x + 8, game.ship.y + 10);
            ctx.closePath();
            ctx.fill();

            // Draw bullets (RED)
            ctx.fillStyle = '#ff0000';
            game.bullets.forEach(bullet => {
                ctx.fillRect(bullet.x - bullet.size / 2, bullet.y - bullet.size / 2, bullet.size, bullet.size);
            });

            // Draw particles
            game.particles.forEach(particle => {
                ctx.globalAlpha = particle.life;
                ctx.fillStyle = particle.color;
                ctx.fillRect(particle.x - particle.size / 2, particle.y - particle.size / 2, particle.size, particle.size);
            });
            ctx.globalAlpha = 1;
        };

        // Game loop
        const gameLoop = () => {
            update();
            draw();
            game.animationId = requestAnimationFrame(gameLoop);
        };

        // Event listeners
        window.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('click', handleTouch);
        canvas.addEventListener('touchstart', handleTouch);
        window.addEventListener('resize', resizeCanvas);

        // Start game loop
        gameLoop();

        // Cleanup
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('click', handleTouch);
            canvas.removeEventListener('touchstart', handleTouch);
            window.removeEventListener('resize', resizeCanvas);

            // Clear all respawn timers
            Object.values(game.respawnTimers).forEach(timer => clearTimeout(timer));

            if (game.animationId) {
                cancelAnimationFrame(game.animationId);
            }
        };
    }, [isMobile, onHitButton]);

    // Handle exit with cleanup
    const handleExit = () => {
        cleanupGame();
        onExit();
    };

    return (
        <>
            {/* Game Canvas - NO BACKGROUND OVERLAY */}
            <canvas
                ref={canvasRef}
                className="fixed inset-0 z-40 cursor-crosshair pointer-events-none"
                style={{ background: 'transparent' }}
            />

            {/* Exit Button */}
            <button
                onClick={handleExit}
                className="fixed top-4 right-4 z-50 px-4 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700 transition-colors pointer-events-auto"
            >
                ✕ Exit Game
            </button>

            {/* Instructions */}
            <div className="fixed top-4 left-4 z-50 bg-black/80 text-green-400 px-4 py-2 rounded-lg font-mono text-sm pointer-events-none">
                {isMobile ? '👆 TAP TO SHOOT' : '🎯 SHOOT EVERYTHING!'}
            </div>
        </>
    );
};

export default FooterGame;
