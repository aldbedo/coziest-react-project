import React, { useState, useEffect } from 'react';

function AppCarousel({ images }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(intervalId);
    }, [currentIndex, images]);

    const nextSlide = () => {
        setSlideDirection('next');
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setSlideDirection('prev');
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    // const firstSlide = () => {
    //     setSlideDirection('next');
    //     setCurrentIndex(0);
    // }

    // const secondSlide = () => {
    //     setSlideDirection('next');
    //     setCurrentIndex(1);
    // }

    // const thirdSlide = () => {
    //     setSlideDirection('next');
    //     setCurrentIndex(2);
    // }

    const handleIndicatorClick = (index) => {
        setSlideDirection('next');
        setCurrentIndex(index);
    };


    return (
        <div className="carousel-container">
            <div className="carousel-indicators">
                {images.map((image, index) => (
                    <button
                        key={index}
                        type="button" 
                        className={`indicator-button ${currentIndex === index ? 'active' : ''}`} 
                        onClick={() => handleIndicatorClick(index)}
                />
                ))}
            </div>
            <div>
                {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt="carousel"
                        className={`carousel-img ${index === currentIndex ? 'active' : ''} ${slideDirection === 'next' ? 'next-slide' : 'prev-slide'}`}
                    />
                ))}
            </div>
            <button
                className="carousel-button prev"
                onClick={prevSlide}>
                    &#10094;
                </button>
            <button
                className="carousel-button prev"
                onClick={nextSlide}>
                    &#10095;
                </button>
                {/* <button 
                    type="button" 
                    className={`indicator-button ${currentIndex === 1 ? 'active' : ''}`} 
                    onClick={secondSlide}
                />
                <button 
                    type="button" 
                    className={`indicator-button ${currentIndex === 2 ? 'active' : ''}`} 
                    onClick={thirdSlide}
                />
            <div>
                {images.map((image, index) => (
                    <img
                    key={index}    
                    src={images[currentIndex]} 
                    alt="carousel" 
                    className={`carousel-img ${index === currentIndex ? 'active' : ''} ${slideDirection === 'next' ? 'next-slide' : 'prev-slide'}`}
                />
                ))}
            </div>
            <button 
                    className="carousel-button prev"
                    onClick={prevSlide}>&#10094;
            </button>
            <button 
                className="carousel-button next" 
                onClick={nextSlide}>&#10095;
            </button> */}
        </div>
    );
}

export default AppCarousel