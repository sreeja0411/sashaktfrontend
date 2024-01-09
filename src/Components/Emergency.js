import React from 'react';

const Emergency = () => {
  const bigBoxStyle = {
    backgroundColor: '#4169E1', // Blue color
    borderRadius: '10px',
    boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.5)', // Adding a shadow effect
    color: '#FFFFFF', // Text color
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px', // Space between each h1 box
    maxWidth: '600px',
    margin: '20px auto', // Center align the box
  };

  // Define styles for each h1 element
  const h1Styles = [
    { backgroundColor: '#87CEFA' }, // Tomato color
    { backgroundColor: '#20B2AA' }, // Light Sea Green color
    { backgroundColor: '#9370DB' }, // Medium Purple color
    { backgroundColor: '#F4A460' }, // Orange color
    { backgroundColor: '#1E90FF' }, // Dodger Blue color
    { backgroundColor: '#FA8072' }, // Chartreuse color
    { backgroundColor: '#EE82EE' }, // Deep Pink color
  ];

  return (
    <section className="emergency" id="emergency">
      <div className="important">
        <div className="heading">
          <h3>Emergency</h3>
        </div>
        <div className="important-text">
          <p>
            Call 1098 – Any child or a concerned adult can dial the CHILDLINE 1098 helpline, which operates night and day.
          </p>
          <img src="images/child-line.jpg" alt="" />
        </div>
      </div>

      {/* Styled big box */}
      <div style={bigBoxStyle}>
        <h1 style={h1Styles[0]}>State Control Room : 1070</h1>
        <h1 style={h1Styles[1]}>Police Control Room : 100</h1>
        <h1 style={h1Styles[2]}>Accident Help Line : 108</h1>
        <h1 style={h1Styles[3]}>Fire and Rescue : 101</h1>
        <h1 style={h1Styles[4]}>Ambulance Help Line : 102</h1>
        <h1 style={h1Styles[5]}>Child Help line : 1098</h1>
        <h1 style={h1Styles[6]}>Sexual Harassment : 1091</h1>
      </div>
    </section>
  );
};

export default Emergency;
