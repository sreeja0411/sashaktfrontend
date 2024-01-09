import { Link } from "react-router-dom";

const Home = () => {
  // Define a function to handle the click event on the "Get Started" button
  const handleGetStarted = () => {
    // Add logic here for what should happen when the button is clicked
    // For example, you can redirect to another page or trigger an action.
    // For now, let's log a message to the console.
    console.log("Get Started button clicked!");
  };

  return (
    <section className="home" id="home">
      <div
        className="swiper-slide"
        style={{
          background: 'url(images/home-bg-1.jpg) no-repeat',
          backgroundSize: 'cover',
          position: 'relative', // Set position to relative
        }}
      >
        <div
          className="content"
          style={{
            position: 'absolute', // Set position to absolute
            top: '20px', // Adjust top spacing as needed
            left: '52%', // Center the content horizontally
            transform: 'translateX(-50%)', // Center the content horizontally
            textAlign: 'center', // Align content to center
            color: '#FFFFFF', // Set text color
          }}
        >
          <h3>sashakt</h3>
          <p>app for child empowerment</p>
          <Link to='/select'>
          <button
            onClick={handleGetStarted}
            style={{
              marginTop: '20px', // Adjust top margin as needed
              padding: '10px 20px', // Adjust padding as needed
              backgroundColor: '#FF4500', // Button background color
              color: '#FFFFFF', // Button text color
              border: 'none', // Remove button border
              borderRadius: '5px', // Apply border radius
              cursor: 'pointer', // Show pointer on hover
            }}
          >
            GET STARTED!
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
