
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Footer from './Footer';
function Home() {
  const greenButtonStyle = {
    backgroundColor: 'green',
    borderColor: 'green',
    marginRight: '10px',
  };

  const headerContainerStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%', // Adjust the left position
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: "url('https://media.istockphoto.com/id/1465188429/photo/business-performance-monitoring-concept-businessman-using-smartphone-online-survey-filling.jpg?s=612x612&w=0&k=20&c=7c47U-ZeTVL4H1_jPyO-8V3mKVPbeDb25oOxIV7NoEE=')", // Replace with the actual path to your background image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%', // Set width to cover the full window
    height: '100vh', // Set height to cover the full window height
    color: 'black', // Text color
    padding: '20px',
    borderRadius: '15px',
  };

  const headerButtonStyle = {
    backgroundColor: 'brown',
    borderColor: 'black',
    color: 'white',
    textDecoration: 'none',
    marginBottom: '40px',
    fontSize: '30px',
    padding: '10px 20px',
    borderRadius: '8px',
  };

  const welcomeTextStyle = {
    fontSize: '60px', // Adjust the font size for the welcome text
  };

  return (
    <div>
      <div style={headerContainerStyle}>
        <h3 style={welcomeTextStyle}>Welcome to Cellara!</h3>
        <Link to='/login'>
          <Button variant="primary" style={headerButtonStyle}>
            Login
          </Button>
        </Link>
        <Link to='/register'>
          <Button variant="danger" style={headerButtonStyle}>
            Register
          </Button>
        </Link>
      </div>
      <div style={{ position: 'absolute', top: '10px', right: '25px' }}>
        <Link to='/login'>
          <Button variant="success" style={greenButtonStyle}>
            <h4> Get Started </h4>
          </Button>
        </Link>
      </div>
     
    </div>
  );
}

export default Home;