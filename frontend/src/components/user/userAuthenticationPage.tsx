import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/userAuthenticationPage.css';

const AuthenticationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    // Implement login logic here
  };

  const handleCreateUserClick = () => {
    // Implement create user logic here
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="authentication-page-container">
      <h1 className="authentication-page-title">Sign In</h1>
      <form className="authentication-page-form">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
          className="authentication-page-input"
        />
        <label htmlFor="password">Password:</label>
        <div className="authentication-page-password-input-container">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            className="authentication-page-input authentication-page-password-input"
          />
          <button
            type="button"
            onClick={handleShowPasswordToggle}
            className="authentication-page-show-password-button btn btn-sm btn-dark"
          >
            {showPassword ? '👁️' : '😵'}
          </button>
        </div>
        <button
          type="submit"
          onClick={handleLoginClick}
          className="authentication-page-button"
        >
          Login
        </button>
        <Link
          type="button"
          to="create-user"
          style={{ textAlign: "center" }}
          className="authentication-page-button"
        >
          Create New User
        </Link>
      </form>
    </div>
  );
};

export default AuthenticationPage;
