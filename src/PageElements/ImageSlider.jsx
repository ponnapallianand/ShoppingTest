import React, { useState, useEffect } from 'react';
import './ImageSlider.css'; // Assuming the CSS provided is saved in this file

const images = [
  'https://cdn.flickeringmyth.com/wp-content/uploads/2022/07/essential-80s-action.jpg',
  'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/12/10-most-violent-action-movies-of-all-time-according-to-reddit.png',
  'https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/06/10-Action-Films-From-Yesteryear-That-Deserve-Legacy-Sequels-Like-Top-Gun-Maverick.jpg',
  'https://cdn.flickeringmyth.com/wp-content/uploads/2022/07/essential-80s-action.jpg',
  'https://i.ytimg.com/vi/sqX-ITyYi6k/maxresdefault.jpg'
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div
          className="slides"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="slide" key={index}>
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="navigation">
          {images.map((_, index) => (
            <button
              key={index}
              className={`nav-button ${
                index === currentIndex ? 'active' : ''
              }`}
              onClick={() => goToSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
