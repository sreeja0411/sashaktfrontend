import React from 'react';
import './DosAndDonts.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const DosAndDonts = () => {
    return (
        <div className="dandd-container">
            <div className="back-container">
                <Link to="/Activities" className="back-button">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
            </div>
            <img src="https://media.gettyimages.com/id/1354839527/photo/dos-and-donts-concept-white-and-pink-speech-bubble-pair-with-dos-and-donts-text-sitting-over.jpg?b=1&s=170667a&w=0&k=20&c=Lwq07XqD9TyzLvuJWwUxneqdau2U50BO9mUCcFnmhRg=" alt="Do and dont" className="dandd-image" />
            <Link to="/D">
            <button className="cute-button">Click Me</button>
            </Link>
        </div>
    );
}

export default DosAndDonts;