import React, { useState, useEffect } from 'react';

const Typewriter = ({
    texts = [],  // Array of texts to cycle through
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
    const [currentIndex, setCurrentIndex] = useState(0);

    // Support both single text (backwards compatibility) and array of texts
    const textArray = Array.isArray(texts) ? texts : [texts];
    const currentText = textArray[currentIndex] || '';

    useEffect(() => {
        const timeout = setTimeout(() => setStarted(true), delay);
        return () => clearTimeout(timeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        const handleTyping = () => {
            if (!isDeleting) {
                // Typing
                if (displayedText.length < currentText.length) {
                    setDisplayedText(currentText.slice(0, displayedText.length + 1));
                } else {
                    // Finished typing, wait before deleting
                    setTimeout(() => setIsDeleting(true), waitBeforeDelete);
                }
            } else {
                // Deleting
                if (displayedText.length > 0) {
                    setDisplayedText(currentText.slice(0, displayedText.length - 1));
                } else {
                    // Finished deleting, move to next text
                    setIsDeleting(false);
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
                    setTimeout(() => { }, waitBeforeType);
                }
            }
        };

        const timer = setTimeout(
            handleTyping,
            isDeleting ? deleteSpeed : speed
        );

        return () => clearTimeout(timer);

    }, [displayedText, isDeleting, started, currentText, speed, deleteSpeed, waitBeforeDelete, waitBeforeType, textArray.length]);

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
