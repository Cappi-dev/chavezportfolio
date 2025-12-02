import React from 'react';

const Badge = () => {
    return (
        <a href="#project" className="relative w-32 h-32 md:w-40 md:h-40 flex items-center justify-center animate-spin-slow group cursor-pointer">
            <svg viewBox="0 0 100 100" className="w-full h-full transition-transform duration-500 group-hover:scale-110">
                <defs>
                    <path
                        id="circlePath"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                </defs>
                <text className="text-[10px] font-bold tracking-[0.2em] uppercase fill-black transition-colors duration-300 group-hover:fill-blue-600">
                    <textPath href="#circlePath" startOffset="0%">
                        My Projects — My Projects —
                    </textPath>
                </text>
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-8 h-8 text-black transform rotate-0 transition-all duration-300 group-hover:translate-y-1 group-hover:text-blue-600"
                >
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <polyline points="19 12 12 19 5 12"></polyline>
                </svg>
            </div>
        </a>
    );
};

export default Badge;
