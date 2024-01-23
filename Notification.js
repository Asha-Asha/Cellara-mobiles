// Notification.js

import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';

const Notification = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');
  const [notificationStatus, setNotificationStatus] = useState(null);

  const handleSendNotification = async () => {
    try {
      const response = await fetch('http://localhost:3001/send-notification', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ phoneNumber, message }),
      });

      const result = await response.json();

      setNotificationStatus(result);
    } catch (error) {
      console.error('Error sending notification:', error);
      setNotificationStatus({ success: false, message: 'Error sending notification.' });
    }
  };

  return (
    <div>
      <Form>
        <Form.Group controlId="phoneNumber">
          <Form.Label>Phone Number:</Form.Label>
          <Form.Control
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message:</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleSendNotification}>
          Send Advertising Message
        </Button>
      </Form>

      {notificationStatus && (
        <Alert variant={notificationStatus.success ? 'success' : 'danger'}>
          {notificationStatus.message}
        </Alert>
      )}
    </div>
  );
};

export default Notification;
