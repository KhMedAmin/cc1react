import React, { useState } from 'react';
import './Slider.css';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import image5 from './images/image5.png';
import image6 from './images/image6.png';
import previousImage from './images/prev.png';
import nextImage from './images/next.png';

const Slider = () => {
  const images = [
    image4, image2, image6, image3, image1, image5,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    
      
      <div className="slider-container">
      <img
        className="slider-button"
        src={previousImage}
        alt="Previous"
        onClick={goToPreviousImage}
      />
        <img
          className="slider-image"
          src={images[currentImageIndex]}
          alt="Slider"
          width="666"
          height="500"
        />
        <img
        className="slider-button"
        src={nextImage}
        alt="Next"
        onClick={goToNextImage}
      />
      </div>
    
  );
};

export default Slider;
