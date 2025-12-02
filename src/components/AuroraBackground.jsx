import React from 'react';

const AuroraBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-white">
            {/* Blob 1 - Blue/Purple */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-blue-400/30 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob"
            ></div>

            {/* Blob 2 - Purple/Pink */}
            <div
                className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-purple-400/30 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-2000"
            ></div>

            {/* Blob 3 - Pink/Yellow */}
            <div
                className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-pink-400/30 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-4000"
            ></div>

            {/* Blob 4 - Cyan/Blue (Center) */}
            <div
                className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-cyan-300/20 rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-6000"
            ></div>
        </div>
    );
};

export default AuroraBackground;
