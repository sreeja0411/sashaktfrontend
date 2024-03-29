import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Read = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    'https://res.cloudinary.com/djpqj3nhr/image/upload/v1700888086/carimg1_fs92jl.jpg',
    'https://res.cloudinary.com/djpqj3nhr/image/upload/v1700888194/carimg2_hib2ua.jpg',
    'https://res.cloudinary.com/djpqj3nhr/image/upload/v1700888249/carimg3_e3xnej.jpg',
    'https://res.cloudinary.com/djpqj3nhr/image/upload/v1700892155/carimg4_f8wrlx.jpg',
    'https://res.cloudinary.com/djpqj3nhr/image/upload/v1700892817/carimg5_qgvcrs.jpg',
    'https://res.cloudinary.com/djpqj3nhr/image/upload/v1700892936/carimg6_rs9v2o.jpg',
    'https://res.cloudinary.com/djpqj3nhr/image/upload/v1700893012/carimg7_dyacml.jpg',
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
      <Link to="/readquiz">
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

export default Read;
