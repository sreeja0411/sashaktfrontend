import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'; // Import the arrow-left icon
import './Stories.css'; 

const Stories = () => {
    return (
        <section className="activities">
            <div className="back-container" style={{top:'138px'}}>
                <Link to="/Activities" className="back-button">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
            </div>
            <div className="heading7-container"> {/* Wrap heading in a container */}
                <h1 className="heading7">READ ALONG STORIES</h1>
            </div>
            <div className="box-container">
                <div className="box-button">
                    <Link to="/read" className="card">
                        <div className="image7-wrapper">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9bggGi-fKGaLB3imcxnGzdMthRcX4zplXPQ&usqp=CAU" alt="Pikachu" />
                        </div>
                        <div className="card7-content">
                            <h3>CHILD LABOUR</h3>
                        </div>
                    </Link>
                </div>
                <div className="box-button">
                    <Link to="/read2" className="card">
                        <div className="image7-wrapper">
                            <img src="https://res.cloudinary.com/djpqj3nhr/image/upload/v1705850493/xzohfu8qjz1fnhshjuhf.jpg" alt="Jumping Frog" />
                        </div>
                        <div className="card7-content">
                            <h3>CHILD PROTECTION</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Stories;
