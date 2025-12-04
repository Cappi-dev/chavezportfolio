import React, { useState, useEffect } from 'react';

const Typewriter = ({
    text,
    speed = 150,
    deleteSpeed = 100,
    delay = 0,
    waitBeforeDelete = 2000,
    waitBeforeType = 500,
    className = "",
    cursorClassName = "text-black",
    showCursor = true
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [started, setStarted] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setStarted(true), delay);
        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        const handleTyping = () => {
            if (!isDeleting) {
                // Typing
                if (displayedText.length < text.length) {
                    setDisplayedText(text.slice(0, displayedText.length + 1));
                } else {
                    // Finished typing, wait before deleting
                    setTimeout(() => setIsDeleting(true), waitBeforeDelete);
                }
            } else {
                // Deleting
                if (displayedText.length > 0) {
                    setDisplayedText(text.slice(0, displayedText.length - 1));
                } else {
                    // Finished deleting, wait before typing again
                    setTimeout(() => setIsDeleting(false), waitBeforeType);
                }
            }
        };

        const timer = setTimeout(
            handleTyping,
            isDeleting ? deleteSpeed : speed
        );

        return () => clearTimeout(timer);

    }, [displayedText, isDeleting, started, text, speed, deleteSpeed, waitBeforeDelete, waitBeforeType]);

    return (
        <span className="inline-flex items-center">
            <span className={className}>{displayedText}</span>
            {showCursor && (
                <span className={`${cursorClassName} animate-pulse ml-1 font-light`}>|</span>
            )}
        </span>
    );
};

export default Typewriter;
