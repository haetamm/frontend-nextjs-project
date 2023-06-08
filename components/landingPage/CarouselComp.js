import carouselStyles  from '../../src/styles/carousel.module.css';
import React, { useState, useEffect } from 'react';

const CarouselComp = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [
        `http://fakeimg.pl/2000x800/84D2C5/080202/?text=Pasang Iklan?`,
        'http://fakeimg.pl/2000x800/E4C988/080202/?text=Hubungi',
        'http://fakeimg.pl/2000x800/C27664/080202/?text=082260283200'
    ];

    const handleRadioChange = (index) => {
        setActiveIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const nextIndex = (activeIndex + 1) % images.length;
            setActiveIndex(nextIndex);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, [activeIndex, images.length]);

    return (
        <div className={`${carouselStyles.carousel} container mx-auto rounded-2xl p-0 lg:px-8`}>
            <div className={` ${carouselStyles.carouselInner}`}>
                
                {images.map((image, index) => (
                    <React.Fragment key={index}>
                        <input 
                            className={`${carouselStyles.carouselOpen} form-checkbox appearance-none`}
                            type="radio"
                            id={`carousel${index + 1}`}
                            name="carousel"
                            aria-hidden="true"
                            hidden=""
                            checked={index === activeIndex}
                            onChange={() => handleRadioChange(index)}
                        />
                        <div className={`container mx-auto p-0.5 md:p-4 shadow-lg rounded-sm lg:rounded-2xl ${carouselStyles.carouselItem}`}>
                            <img src={image} alt={`Carousel ${index + 1}`} className='rounded-sm lg:rounded-2xl shadow-md'/>
                        </div>
                    </React.Fragment>
                ))}

                {images.map((_, index) => (
                    <label key={index}
                        htmlFor={`carousel${index + 1}`}
                        className={`${carouselStyles.carouselControl} ${index === activeIndex ? `${carouselStyles.prev}`: `${carouselStyles.next}`} ${carouselStyles.carouselControl}${index % 3 + 1}}`}
                        >
                        {index === activeIndex ? '‹' : '›'}
                    </label>
                ))}

                <ol className={carouselStyles.carouselIndicators}>
                    {images.map((_, index) => (
                        <li key={index}>
                        <label
                            htmlFor={`carousel${index + 1}`}
                            className={`${carouselStyles.carouselBullet}} ${index === activeIndex ? 'active' : ''}`}
                        >
                            o
                        </label>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default CarouselComp