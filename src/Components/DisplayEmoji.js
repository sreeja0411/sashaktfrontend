import { useState } from "react";
import { useParams, Link } from "react-router-dom";

const DisplayEmoji = () => {
  const { emojiUrl } = useParams();
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    // Perform any action with the submitted name here
    // For example, navigate to a new page with both emoji and submitted name
    // Using Link to navigate to the new page with parameters
  };


  const textStyle = {
    position: "absolute",
    top: "15%", // Adjusted for responsiveness
    left: "52%", // Centered horizontally
    fontSize: "clamp(24px, 8vw, 60px)", // Responsive font size using clamp()
    color: "#222",
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
    transform: "translateX(-50%)" // Centering horizontally using transform
  };

  const homeContainerStyle = {
    minHeight: "100vh",
    backgroundColor: "#F7DFF1", // Blue color for the entire page
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px", // Add padding as needed
  };

  const submitButtonStyle = {
    backgroundColor: "#4169E1", // Orange color for the button
    color: "#FFFFFF", // White text color
    padding: "20px 60px", // Padding for the button
    borderRadius: "5px", // Rounded corners
    marginTop: "20px", // Adjust margin as needed
    textDecoration: "none", // Remove default link underline
    position: "relative", // Set button's position to relative
    top: "30px", // Move the button 10px from its default position from the top
    fontSize: "16px", // Increase font size for the submit text
  };
  
  

  return (
    <div style={homeContainerStyle}>
      <h1 style={textStyle}>ENTER YOUR USERNAME</h1>
      {emojiUrl && (
        <div>
          <img
            src={decodeURIComponent(emojiUrl)}
            alt="Selected Emoji"
            style={{ width: "300px", height: "300px", top: "30%"}}
          />
          <div>
            <input
              type="text"
              placeholder="Enter your Username"
              value={name}
              onChange={handleNameChange}
              style={{ width: "250px", height: "50px", top: "30%"}}
            />
            {name && (
              // Render the styled button on name submission
              <div>
                <Link
                  to={`/submitted/${encodeURIComponent(emojiUrl)}/${encodeURIComponent(name)}`}
                  style={submitButtonStyle}
                >
                  Submit 
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayEmoji;
