// Footer.js

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { Instagram, Telegram, Facebook, Twitter, Linkedin } from 'react-bootstrap-icons';
import './App.css'; // Make sure to import your CSS file

const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row>
        {/* Mobile Advertisement Column */}
        <Col xs={12} md={4}>
          <Link to="/contact"> {/* Update the path here */}
            <h5> Cellara Mobile's</h5>
          </Link>
          <p>Advertise your products and services here. Reach out to a wide audience on mobile devices.</p>
            <p>we have best products to you! </p>
        </Col>

        {/* Follow Us Column */}
        <Col xs={12} md={4}>
          <h5>Follow Us</h5>
          <p>Stay connected with us on social media for the latest updates and promotions.</p>
          {/* Add your social media icons/links here */}
          <div>
            <Link to="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} className="mr-3" />
            </Link>
            <Link to="https://t.me" target="_blank" rel="noopener noreferrer">
              <Telegram size={24} className="mr-3" />
            </Link>
            <Link to="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={24} className="mr-3" />
            </Link>
            <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Twitter size={24} className="mr-3" />
            </Link>
            <Link to="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </Link>
          </div>
        </Col>

        {/* Contact Column */}
        <Col xs={12} md={4}>
          <Link to="/contact"> {/* Update the path here */}
            <h5>Contact</h5>
          </Link>
          <p>Email: example@email.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Street, City, Country</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
