import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/userAuthenticationPage.css';
import API from '../../axios';

const AuthenticationPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = async () => {
    if (!email || !password) {
      window.alert('Please enter your email and password');
      return;
    }

    await API.post("/user/authenticate-user", {
      "email": email,
      "password": password
    }).then((response) => {
      if (response?.data) {
        navigate(`dashboard/${response.data._id}`);
      } else {
        navigate('/unauthenticated-user');
      }
    }).catch((err) => console.log(err));
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
          required
          className="authentication-page-input"
        />
        <label htmlFor="password">Password:</label>
        <div className="authentication-page-password-input-container">
          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={handlePasswordChange}
            required
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
          type="button"
          onClick={handleLoginClick}
          // style={{ textAlign: "center" }}
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
