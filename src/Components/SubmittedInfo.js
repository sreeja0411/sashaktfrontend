import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios  from 'axios';

const SubmittedInfo = () => {
  const { emojiUrl, name } = useParams();

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
    position: "absolute",
    top: "12%", // Adjusted for responsiveness
    left: "50%",
    fontSize: "clamp(24px, 10vw, 60px)", // Responsive font size using clamp()
    color: "#222",
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
    transform: "translateX(-50%)",
  };

  const imgStyle = {
    width: "300px",
    height: "300px",
    marginTop: "50px", // Adjusted margin for the image
  };

  const text2Style = {
    fontSize: "clamp(16px, 8vw, 60px)", // Responsive font size using clamp()
    color: "#222",
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)',
  };


  const buttonStyle2 = {
    position: "absolute",
    bottom: "3%", // Adjusted positions for responsiveness
    left: "50%",
    transform: "translateX(-50%)",
    height: "6%",
    width: "10%",
    fontSize: "clamp(10px, 3vw, 18px)", // Responsive font size using clamp()
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    outline: "none",
  };

  let clickHandler = (e) => {
    e.preventDefault();
    console.log(' clicked');
    //make an axios call to store the emoji url with username
    //let storeinDB = async () =>{
    //let resp = await axios.get("http://localhost:5000/");
    //console.log(resp);
   // }
    //storeinDB();
    sessionStorage.setItem("Name",decodeURIComponent(name))
    sessionStorage.setItem("emoji",decodeURIComponent(emojiUrl))
  }
  const handleNavigation = () => {
    // Your logic (e.g., axios call, session storage setting) goes here...
    sessionStorage.setItem("Name", decodeURIComponent(name));
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
      </div>
      <div>
      <Link to="/Activities" onClick={handleNavigation}>
            <button style={buttonStyle2}>NEXT</button>
      </Link>
      </div>
    </div>
  );
};

export default SubmittedInfo;
