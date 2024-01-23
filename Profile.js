import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Profile() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [secondPhoneNumber, setSecondPhoneNumber] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [address, setAddress] = useState('');
  const [secondAddress, setSecondAddress] = useState('');
  const [city, setCity] = useState('');
  const [pinCode, setPinCode] = useState('');
  const [bankName, setBankName] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [profileSaved, setProfileSaved] = useState(false);
  const [editMode, setEditMode] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    // For demonstration purposes, you can simulate a delay (e.g., API request) before showing the success message
    setTimeout(() => {
      setProfileSaved(true);
      setEditMode(false);
    }, 1000);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(file);
  };

  const navigateToHomepage = () => {
    navigate('/homepage');
  };

  const handleEdit = () => {
    setProfileSaved(false);
    setEditMode(true);
  };

  const handleCancel = () => {
    setEditMode(false);
    setFullName('');
    setEmail('');
    setPhoneNumber('');
    setSecondPhoneNumber('');
    setProfileImage(null);
    setAddress('');
    setSecondAddress('');
    setCity('');
    setPinCode('');
    setBankName('');
    setAccountNumber('');
    setIfscCode('');
  };

  const handleLogout = () => {
    // Perform any logout logic here, such as clearing user data, resetting authentication state, etc.
    // For simplicity, let's assume a function `logoutUser` is available for your authentication logic.
    // Replace this with your actual logout logic.
   
    // Navigate to the home page
    navigate('/login');
  };

  const renderEditModeButtons = () => (
    <div className="text-center mt-4">
      <Button variant="success" type="submit" className="mr-2">
        Save Profile
      </Button>
      <Button variant="danger" onClick={handleCancel}>
        Cancel
      </Button>
    </div>
  );

  return (
    <Container
      style={{
        backgroundImage: 'url("your_background_image_url_here")',
        backgroundSize: 'cover',
        height: '100vh',
        width: '100%', // Adjust the width as needed
        padding: '20px',
      }}
    >
      <div className="d-flex justify-content-end mb-3">
      <Button variant="link" className="font-weight-bold" onClick={() => navigate('/homepage')}>
          Home
        </Button>
        <Button variant="link" className="font-weight-bold" onClick={() => navigate('/sell')}>
          Sell on Cellara
        </Button>
        <Button variant="link" className="font-weight-bold" onClick={() => navigate('/notification')}>
          Notification
        </Button>
        <Button variant="link" className="font-weight-bold" onClick={() => navigate('/myorders')}>
          My Orders
        </Button>
        <Button variant="link" className="font-weight-bold" onClick={() => navigate('/wishlist')}>
          Wishlist
        </Button>
        <Link to="/"></Link>
        <Button variant="link" className="font-weight-bold" onClick={handleLogout}>
          LogOut
        </Button><Link/>
      </div>

      {!profileSaved && !editMode && (
        <Button variant="info" onClick={handleEdit} className="mt-3">
          Edit Profile
        </Button>
      )}

      {profileSaved ? (
        <div className="text-center mt-4">
          <h2>Profile Saved!</h2>
          {profileImage && (
            <img
              src={URL.createObjectURL(profileImage)}
              alt="Selected Profile"
              style={{ maxWidth: '200px', marginTop: '10px' }}
            />
          )}
          <Button variant="primary" onClick={navigateToHomepage} className="mt-3">
            Go to Homepage
          </Button>
        </div>
      ) : (
        <div>
          <h1 className="text-center mt-4">Account Profile</h1>

          <Form onSubmit={handleSubmit} disabled={!editMode}>
            <Form.Group controlId="fullName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                style={{ marginBottom: '15px' }}
              />
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginBottom: '15px' }}
              />
            </Form.Group>

            <Form.Group controlId="phoneNumber">
              <Form.Label>Primary Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter primary phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                style={{ marginBottom: '15px' }}
              />
            </Form.Group>

            <Form.Group controlId="secondPhoneNumber">
              <Form.Label>Secondary Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter secondary phone number"
                value={secondPhoneNumber}
                onChange={(e) => setSecondPhoneNumber(e.target.value)}
                style={{ marginBottom: '15px' }}
              />
            </Form.Group>

            <Form.Group controlId="address">
              <Form.Label>Primary Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter primary address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                style={{ marginBottom: '15px' }}
              />
            </Form.Group>

            <Form.Group controlId="secondAddress">
              <Form.Label>Secondary Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter secondary address"
                value={secondAddress}
                onChange={(e) => setSecondAddress(e.target.value)}
                style={{ marginBottom: '15px' }}
              />
            </Form.Group>

            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                style={{ marginBottom: '15px' }}
              />
            </Form.Group>

            <Form.Group controlId="pinCode">
              <Form.Label>Pin Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter pin code"
                value={pinCode}
                onChange={(e) => setPinCode(e.target.value)}
                style={{ marginBottom: '15px' }}
              />
            </Form.Group>

          
            {editMode && renderEditModeButtons()}
          </Form>
        </div>
      )}
    </Container>
  );
}

export default Profile;