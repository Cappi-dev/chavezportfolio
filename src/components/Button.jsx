import React from 'react';

const Button = ({ children, onClick, href, target, rel, className = '' }) => {
    const baseClasses = `bg-[#0a0a0a] text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-black transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center gap-2 group ${className}`;

    if (href) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className={baseClasses}
            >
                {children}
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </a>
        );
    }

    return (
        <button
            onClick={onClick}
            className={baseClasses}
        >
            {children}
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
        </button>
    );
};

export default Button;
