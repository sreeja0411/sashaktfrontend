import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const DisplayEmoji = () => {
  const { emojiUrl } = useParams();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();


  const handleNameChange = (e) => {
    setName(e.target.value);
    if (!/\d/.test(e.target.value)) {
      setUsernameError('Username must contain at least one digit');
    } else {
      setUsernameError('');
    }
  };
  
  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  

  const handleSaveUserInfo = async (e) => {
    e.preventDefault(); // Prevent the default link behavior
  
    if (!/\d/.test(name)) {
      setUsernameError('Username must contain at least one digit');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:5000/save-user-info', {
        username: name,
        age: age,
        emojiUrl: decodeURIComponent(emojiUrl),
      });
  
      if (response.data.exists) {
        setShowPopup(true);
      } else {
        // Use history.push to navigate without full page reload
        navigate(`/submitted/${encodeURIComponent(emojiUrl)}/${encodeURIComponent(name)}/${encodeURIComponent(age)}`);
      }
    } catch (error) {
      console.error(error);
      // Handle errors
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const textStyle = {
    position: "absolute",
    top: "15%",
    left: "50%",
    fontSize: "clamp(24px, 8vw, 54px)",
    color: "#222",
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
    transform: "translateX(-50%)"
  };

  const homeContainerStyle = {
    minHeight: "100vh",
    backgroundColor: "#F7DFF1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };

  const submitButtonStyle = {
    backgroundColor: "#4169E1",
    color: "#FFFFFF",
    padding: "20px 60px",
    borderRadius: "5px",
    marginTop: "20px",
    textDecoration: "none",
    position: "relative",
    top: "30px",
    fontSize: "16px",
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
    <div style={homeContainerStyle}>
      <div className="back-container">
        <Link to="/select" className="back-button">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>
      </div>
      <h1 style={textStyle}>ENTER YOUR INFORMATION</h1>
      {emojiUrl && (
        <div>
          <img
            src={decodeURIComponent(emojiUrl)}
            alt="Selected Emoji"
            style={{ width: "300px", height: "300px", top: "30%" }}
          />
          <div>
            <div style={{ marginBottom: "20px" }}>
              <input
                type="text"
                placeholder="Enter your Username"
                value={name}
                onChange={handleNameChange}
                style={{ width: "250px", height: "50px" }}
              />
              {usernameError && (
                <p style={{ color: "red" }}>{usernameError}</p>
              )}
            </div>
            <div>
              <input
                type="number"
                placeholder="Enter your Age"
                value={age}
                onChange={handleAgeChange}
                style={{ width: "250px", height: "50px" }}
              />
            </div>
            {name && age && !usernameError && (
              <div>
                {showPopup ? (
                  <div style={popupStyle}>
                  <div style={popupHeaderStyle}>Username already exists</div>
                  <div style={popupContentStyle}>
                    <p>Please choose a different username.</p>
                  </div>
                  <button style={popupButtonStyle} onClick={closePopup}>
                    OK
                  </button>
                </div>
                ) : (
                  <Link
                    to={`/submitted/${encodeURIComponent(emojiUrl)}/${encodeURIComponent(name)}/${encodeURIComponent(age)}`}
                    style={submitButtonStyle}
                    onClick={handleSaveUserInfo}
                  >
                    Submit
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayEmoji;
