import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [uniqueName, setUniqueName] = useState('');
  const [age, setAge] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleUniqueNameChange = (event) => {
    setUniqueName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/login', {
        username: uniqueName,
        age: age,
      });
  
      if (response.status === 200) {
        // Set emojiUrl and username in session storage
        sessionStorage.setItem('emoji', response.data.emojiUrl);
        sessionStorage.setItem('username', response.data.username);
        // Redirect to Activities page
        window.location.href = '/Activities';
      } else {
        setShowPopup(true);
      }
    } catch (error) {
      setShowPopup(true);
      console.error(error);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const popupStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#ffffff',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
    zIndex: '999',
    maxWidth: '400px',
    width: '80%',
    textAlign: 'center',
  };
  
  const popupHeaderStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#333',
  };
  
  const popupContentStyle = {
    fontSize: '16px',
    marginBottom: '20px',
    color: '#555',
  };
  
  const popupButtonStyle = {
    backgroundColor: '#4169E1',
    color: '#ffffff',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    border: 'none',
  };

  return (
    <div className="background175">
      <div className="back-container">
        <Link to="/loginsignup" className="back-button">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </div>
      <section className="login-section">
        <img
          src="https://i.pinimg.com/originals/f9/35/e5/f935e5bba08c301cfac42235a419c54a.gif"
          alt="Left Image"
          className="login-image"
        />
        <form className="login-form">
          <h1>Login</h1>
          <div className="inputbox">
            <label className={uniqueName ? 'active' : ''}>User Name</label>
            <ion-icon name="mail-outline"></ion-icon>
            <input
              type="text"
              value={uniqueName}
              onChange={handleUniqueNameChange}
            />
          </div>
          <div className="inputbox">
            <label className={age ? 'active' : ''}>Age</label>
            <ion-icon name="lock-closed-outline"></ion-icon>
            <input
              type="number"
              value={age}
              onChange={handleAgeChange}
            />
          </div>
          <button type="submit" className="login2-button" onClick={handleLogin}>
            Log in
          </button>
        </form>
        {showPopup && (
          <div style={popupStyle}>
          <div style={popupHeaderStyle}>Invalid credentials</div>
          <div style={popupContentStyle}>
            <p>Please try again</p>
          </div>
          <button style={popupButtonStyle} onClick={closePopup}>
            OK
          </button>
        </div>
        )}
      </section>
    </div>
  );
};

export default Login;
