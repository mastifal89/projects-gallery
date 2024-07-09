import { useState, useEffect } from 'react';

export const useTextWriting = (text, speed) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setDisplayedText(''); // Reset displayed text when text or speed changes
        setIndex(0); // Reset index when text or speed changes
    }, [text, speed]);

    useEffect(() => {
        if (index < text.length) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text.charAt(index));
                setIndex((prevIndex) => prevIndex + 1);
            }, speed);

            // Cleanup function to clear the timeout
            return () => clearTimeout(timeoutId);
        }
    }, [index, text, speed]);

    return displayedText;
};