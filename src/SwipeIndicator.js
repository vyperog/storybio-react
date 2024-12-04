import React, { useEffect, useState } from 'react';
import swipeForwardSVG from './assets/swipe_forward.svg';
import swipeBackSVG from './assets/swipe_back.svg';

const SwipeIndicator = ({ direction }) => {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        // Fade in
        const fadeInTimer = setTimeout(() => setOpacity(1), 500);

        // Fade out
        const fadeOutTimer = setTimeout(() => setOpacity(0), 5000);

        return () => {
            clearTimeout(fadeInTimer);
            clearTimeout(fadeOutTimer);
        };
    }, []);

    return (
        <div
            className={`absolute ${direction === 'left' ? 'left-4' : 'right-4'} top-1/2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-2 shadow-lg transition-opacity duration-1000 ease-in-out`}
            style={{ opacity }}
        >
            <img
                src={direction === 'left' ? swipeBackSVG : swipeForwardSVG}
                alt={`Swipe ${direction}`}
                className="w-8 h-8 filter invert"
            />
        </div>
    );
};

export default SwipeIndicator;
