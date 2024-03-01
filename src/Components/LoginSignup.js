import React from 'react';
import './LoginSignup.css'; // Import your stylesheet
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const LoginSignup = () => {
  return (
    <div className="container85">
      <div className="back-container">
                <Link to="/" className="back-button">
                    <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
      </div>
      <Link to='/login'>
      <div className="box85">
        <img src="images/doraemon2.png" alt="Image 1" style={{width:'350px',height:'350px',marginTop:'20px'}}/>
        <p>LOGIN</p>
      </div>
      </Link>
      <Link to='/select'>
      <div className="box85" style={{background: '#3498db'}}>
        <img src="https://img-10.stickers.cloud/packs/9bae4a8f-888f-420d-8e41-a8c0e553d485/webp/9701c34a-fccc-4a87-a9ac-9699d3c74c90.webp" alt="Image 2" style={{width:'380px',height:'380px',marginTop:'20px'}}/>
        <p>SIGNUP</p>
      </div>
      </Link>
    </div>
  );
}

export default LoginSignup;
