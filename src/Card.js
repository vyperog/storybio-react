import React, { useRef, useState } from 'react';

const Card = ({ image, link, onSwipe, style }) => {
    const cardRef = useRef(null);
    const [startX, setStartX] = useState(0);

    const handleTouchStart = (e) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e) => {
        const endX = e.changedTouches[0].clientX;
        const deltaX = startX - endX;

        if (Math.abs(deltaX) > 50) { // Threshold for swipe
            onSwipe(deltaX > 0 ? 'next' : 'prev');
        }
    };

    return (
        <div
            ref={cardRef}
            className="absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden border-6 border-white shadow-lg transition-transform duration-300 ease-out"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            style={style}
        >
            <img src={image} alt="Social Media" className="w-full h-full object-cover" />
            <a href={link} className="absolute inset-0 cursor-pointer"></a>
        </div>
    );
};

export default Card;
