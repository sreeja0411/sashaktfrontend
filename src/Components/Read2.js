import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Read2 = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'https://res.cloudinary.com/djpqj3nhr/image/upload/v1705846769/Screenshot_2024-01-21_192207_sigjws.png',
    'https://res.cloudinary.com/djpqj3nhr/image/upload/v1705846897/Screenshot_2024-01-21_192243_ljogwt.png',
    'https://res.cloudinary.com/djpqj3nhr/image/upload/v1705846908/Screenshot_2024-01-21_192255_g58t3e.png',
    'https://res.cloudinary.com/djpqj3nhr/image/upload/v1705846942/Screenshot_2024-01-21_192315_entsot.png',
    'https://res.cloudinary.com/djpqj3nhr/image/upload/v1705846956/Screenshot_2024-01-21_192334_h2exnl.png',
    'https://res.cloudinary.com/djpqj3nhr/image/upload/v1705846989/Screenshot_2024-01-21_192354_qu5qis.png',
    'https://res.cloudinary.com/djpqj3nhr/image/upload/v1705847003/Screenshot_2024-01-21_192418_abdmio.png',
    'https://res.cloudinary.com/djpqj3nhr/image/upload/v1705847025/Screenshot_2024-01-21_192444_io8r3l.png',
    'https://res.cloudinary.com/djpqj3nhr/image/upload/v1705847072/Screenshot_2024-01-21_192504_hdvziy.png',
    'https://res.cloudinary.com/djpqj3nhr/image/upload/v1705847056/Screenshot_2024-01-21_192517_alseim.png',
  ];

  const nextSlide = () => {
    if (currentSlide === images.length - 1) {
      // If it's the last slide, do nothing (stop the carousel)
      return;
    }
    setCurrentSlide((currentSlide + 1) % images.length);
  };

  const prevSlide = () => {
    if (currentSlide === 0) {
      // If it's the first slide, do nothing (prevent going to a previous slide)
      return;
    }
    setCurrentSlide((currentSlide - 1 + images.length) % images.length);
  };

  const lastSlide = (
    <div className="last-slide">
      <h2>Do you want to Learn more?</h2>
      <Link to="/readquiz2">
        <button className="btn btn-primary mr-2">Yes</button>
      </Link>
      <Link to="/Activities">
        <button className="btn btn-secondary">No</button>
      </Link>
    </div>
  );

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <div className="back-container">
                <Link to="/Activities" className="back-button">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
      </div>
      <div className="carousel">
        {currentSlide === images.length - 1 ? (
          <div className="last-slide-container">{lastSlide}</div>
        ) : (
          <img className="carousel-image" src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
        )}
        <button className="carousel-btn prev" onClick={prevSlide}>
          Prev
        </button>
        <button className="carousel-btn next" onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Read2;
