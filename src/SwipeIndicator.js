import React, { useEffect, useState } from 'react';

const SwipeIndicator = ({ direction }) => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(false), 3000); // Changed to 3000ms (3 seconds)
        return () => clearTimeout(timer);
    }, []);

    if (!isVisible) return null;

    return (
        <div className={`absolute ${direction === 'left' ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow-lg animate-pulse`}>
            <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={direction === 'left' ? "M15 19l-7-7 7-7" : "M9 5l7 7-7 7"} />
            </svg>
        </div>
    );
};

export default SwipeIndicator;