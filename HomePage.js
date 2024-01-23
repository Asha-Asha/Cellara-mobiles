import React from 'react';
import { Container, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function HomePage() {
  const linkStyle = {
    margin: '15px', // Adjust the margin to provide space between links
  };

  const pageStyle = {
    backgroundImage: "url('https://media.istockphoto.com/id/1312767508/photo/businessman-using-tablet-online-banking-exchange-currency-and-payment-digital-marketing.jpg?s=612x612&w=0&k=20&c=r2ZUpvc5X6MXyQDWIiHyY5winELUodL3uIzxASJ9EM8=')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    color: 'white', // Adjust text color based on your background image
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  return (
    <div style={pageStyle}>
      <Navbar bg="light" expand="lg">
        <Container className="d-flex justify-content-between align-items-center">
          {/* Removed Navbar.Brand for Cellara */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-end">
            <Link to="/products" className="nav-link" style={linkStyle}>
              <Button variant="outline-dark">Products</Button>
            </Link>
            <Link to="/my orders" className="nav-link" style={linkStyle}>
              <Button variant="outline-dark">My Orders</Button>
            </Link>
            <Link to="/profile" className="nav-link" style={linkStyle}>
              <Button variant="outline-dark">Profile</Button>
            </Link>
            <Link to="/contact" className="nav-link" style={linkStyle}>
              <Button variant="outline-dark">About</Button>
            </Link>
            <Link to="/" className="nav-link" style={linkStyle}>
              <Button variant="outline-dark">LogOut</Button>
            </Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Footer/>
    </div>
  );
}

export default HomePage;
