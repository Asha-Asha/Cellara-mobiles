import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


const LoginComponent = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [emailForReset, setEmailForReset] = useState('');

  const handleForgotPassword = () => {
    setShowForgotPassword(true);
  };

  const handleResetSubmit = (e) => {
    e.preventDefault();
    // Implement logic here to send reset link using 'emailForReset'
    alert(`Password reset link will be sent to ${emailForReset}`);
    setEmailForReset('');
  };

  return (
    <div className='login'>
      <span className="loginTitle" style={{ color: 'black', fontSize: '55px', fontWeight: 'bold' }}>Login</span>
      <form className="loginForm">
        <div style={{ marginBottom: '10px' }}>
          <label style={{ fontSize: '25px', color: 'Black', fontWeight: 'bold' }}>UserName</label>
          <input className="loginInput" type="username" placeholder="Enter your username..." />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <label style={{ fontSize: '25px', color: 'Black', fontWeight: 'bold' }}>Password</label>
          <input className="loginInput" type="password" placeholder="Enter your password..." />
        </div>
        <div style={{ marginBottom: '25px', marginTop: '100px' }}>
          <Link to='/homepage'>
            <button className="loginButton">Login</button>
          </Link>
        </div>

      </form>

      <div className="forgotPasswordContainer">
        <span className="forgotPasswordText" onClick={handleForgotPassword}>
          Forgot Password?
        </span>
      </div>

      {showForgotPassword && (
        <div className="forgotPasswordForm">
          <form onSubmit={handleResetSubmit}>
            <label style={{ fontSize: '27px', color: 'white' }}>Enter your email to reset password</label>
            <input
              className="forgotPasswordInput"
              type="text"
              placeholder="Enter your email..."
              value={emailForReset}
              onChange={(e) => setEmailForReset(e.target.value)}
            />
            <button type="submit" className="forgotPasswordSubmitButton">
              Submit
            </button>
          </form>
        </div>
      )}

      <div className="link">
        <p>
          Don't have an account?{' '}
          <Link to="/register">Register here</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginComponent;
