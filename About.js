// About.js

import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const titleStyle = {
    color: 'Black',
    marginBottom: '20px',
    fontSize: '2em',
  };

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [issue, setIssue] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted data:', { name, phoneNumber, issue });
    navigate('/homepage');
  };

  return (
    <Container className="d-flex flex-column align-items-center justify-content-center text-center" style={{ height: '100vh', backgroundImage: 'url("https://media.istockphoto.com/id/1294730070/vector/communication-on-smartphone.jpg?s=612x612&w=0&k=20&c=Bwa_0r7D2QNWkV5R71SK7X9tO7A5XLFkhB2oZtNRmx8=")', backgroundSize: 'cover' }}>
      <h1 style={titleStyle}>About</h1>
      <p>
        Welcome to our online store, where you can find a variety of mobile phones to meet your needs.
      </p>
      <p>
        Our mission is to provide high-quality products with the latest technology at affordable prices.
      </p>
      <p>
        If you have any questions or need assistance, feel free to contact us.
      </p>

      <div style={{ marginTop: '20px', fontWeight: 'bold', color: 'black' }}>
        <p>Contact Us:</p>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group controlId="name">
            <Form.Label>Your Name:</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="phoneNumber">
            <Form.Label>Your Phone Number:</Form.Label>
            <Form.Control
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="issue">
            <Form.Label>Describe your issue or question:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default About;
