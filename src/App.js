import React, { useState, useEffect } from 'react';
import './index.css';
import Card from './Card';
import xImage from './assets/x.png';
import instagramImage from './assets/instagram.png';
import tiktokImage from './assets/tiktok.png';
import snapchatImage from './assets/snapchat.png';
import threadsImage from './assets/threads.png';

const cardData = [
    { image: xImage, link: 'https://x.com/youraccount' },
    { image: instagramImage, link: 'https://instagram.com/youraccount' },
    { image: tiktokImage, link: 'https://tiktok.com/@youraccount' },
    { image: snapchatImage, link: 'https://snapchat.com/add/youraccount' },
    { image: threadsImage, link: 'https://threads.net/@youraccount' }
];

function App() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const navigate = (direction) => {
        if (direction === 'next' && currentIndex < cardData.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if (direction === 'prev' && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                navigate('next');
            } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                navigate('prev');
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [currentIndex]);

    return (
        <div className="flex flex-col justify-start items-center min-h-screen bg-gray-200 p-4">
            <h1 className="text-center mb-4 text-2xl">Connect With Us</h1>
            <div className="relative w-full max-w-md aspect-[10/16] overflow-hidden">
                {cardData.map((data, index) => (
                    <Card
                        key={index}
                        image={data.image}
                        link={data.link}
                        onSwipe={navigate}
                        style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
