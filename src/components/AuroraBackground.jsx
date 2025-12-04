import React from 'react';

const AuroraBackground = () => {
    return (
        <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-white">
            {/* Blob 1 - Light Gray */}
            <div
                className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-gray-300/25 rounded-full mix-blend-multiply filter blur-[80px] opacity-60 animate-blob"
            ></div>

            {/* Blob 2 - Medium Gray */}
            <div
                className="absolute top-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-gray-400/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-50 animate-blob animation-delay-2000"
            ></div>

            {/* Blob 3 - Soft Gray */}
            <div
                className="absolute bottom-[-20%] left-[20%] w-[50vw] h-[50vw] bg-gray-200/30 rounded-full mix-blend-multiply filter blur-[80px] opacity-65 animate-blob animation-delay-4000"
            ></div>

            {/* Blob 4 - Dark Gray (Center) */}
            <div
                className="absolute top-[20%] left-[20%] w-[40vw] h-[40vw] bg-gray-500/15 rounded-full mix-blend-multiply filter blur-[100px] opacity-45 animate-blob animation-delay-6000"
            ></div>
        </div>
    );
};

export default AuroraBackground;
