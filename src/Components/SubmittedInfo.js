import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SubmittedInfo = () => {
  const { emojiUrl, name, age } = useParams();

  const homeContainerStyle = {
    minHeight: "100vh",
    backgroundColor: "#F7DFF1",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };

  const textStyle = {
    fontSize: "clamp(16px, 4vw, 60px)", // Responsive font size using clamp()
    color: "#222",
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
    textAlign: "center",
    position: "relative",
    top: "-45px",
  };

  const imgStyle = {
    width: "50vw", // Adjusted width for responsiveness
    height: "auto",
    maxWidth: "300px", // Maximum width for larger screens
    position: "relative",
    top: "-50px",
  };

  const text2Style = {
    fontSize: "clamp(14px, 3vw, 24px)", // Responsive font size using clamp()
    color: "#222",
    textShadow: '2px 2px 10px rgba(0, 0, 0, 0.4)',
    textAlign: "center",
    position: "relative",
    top: "-30px",
  };

  const text3Style = {
    fontSize: "clamp(14px, 3vw, 24px)", // Responsive font size using clamp()
    color: "#222",
    textShadow: '2px 2px 10px rgba(0, 0, 0, 0.4)',
    textAlign: "center",
    position: "relative",
    top: "-25px",
    
  };

  const buttonStyle2 = {
    height: "6vh", // Adjusted height for responsiveness
    width: "20vw", // Adjusted width for responsiveness
    fontSize: "clamp(12px, 2vw, 18px)", // Responsive font size using clamp()
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    outline: "none",
    position: "relative",
    top: "-10px",
  };

  const handleNavigation = () => {
    // Your logic (e.g., axios call, session storage setting) goes here...
    sessionStorage.setItem("username", decodeURIComponent(name));
    sessionStorage.setItem("Age", decodeURIComponent(age));
    sessionStorage.setItem("emoji", decodeURIComponent(emojiUrl));
  };

  return (
    <div style={homeContainerStyle}>
      <div>
        <h2 style={textStyle}>WELCOME</h2>
        <img src={decodeURIComponent(emojiUrl)} alt="Submitted Emoji" style={imgStyle} />
      </div>
      <div>
        <p style={text2Style}>{decodeURIComponent(name)}</p>
        <p style={text3Style}>Age: {decodeURIComponent(age)}</p>
      </div>
      <div className="profile-display">
        <Link to="/Activities" onClick={handleNavigation}>
          <button style={buttonStyle2}>NEXT</button>
        </Link>
      </div>
    </div>
  );
};

export default SubmittedInfo;
