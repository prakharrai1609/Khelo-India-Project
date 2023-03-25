import React, { useEffect, useState } from 'react';
import '../../styles/createNewUser.css';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import API from '../../axios';

const CreateNewUserPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleNameChange = (event: any) => {
    setName(event.target.value);
  }

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
    setPasswordsMatch(event.target.value === confirmPassword);
  };

  const handleConfirmPasswordChange = (event: any) => {
    setConfirmPassword(event.target.value);
    setPasswordsMatch(event.target.value === password);
  };

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (event: any) => {
    // event.preventDefault();

    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    API.post("/user/create-user", {
      "name": name,
      "email": email,
      "password": password
    }).catch((e) => console.log(e));

    // axios.post('http://127.0.0.1:8080/users/create-user'

    navigate("/user/thank-you");
  };

  return (
    <div className="create-new-user-page-container">
      <h1 className="create-new-user-page-title">Create New User</h1>
      <form className="create-new-user-page-form" onSubmit={handleSubmit}>
        <label className="create-new-user-page-label" htmlFor="name-input">Full Name</label>
        <input
          className="create-new-user-page-input"
          id="name-input"
          type="name"
          value={name}
          onChange={handleNameChange}
          required
        />

        <label className="create-new-user-page-label" htmlFor="email-input">Email</label>
        <input
          className="create-new-user-page-input"
          id="email-input"
          type="email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <label className="create-new-user-page-label" htmlFor="password-input">Password</label>
        <div className="create-new-user-page-password-input-container">
          <input
            className="create-new-user-page-input create-new-user-page-password-input"
            id="password-input"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          <i className="create-new-user-page-password-icon fas fa-lock"></i>
        </div>

        <label className="create-new-user-page-label" htmlFor="confirm-password-input">Confirm Password</label>
        <div className="create-new-user-page-password-input-container">
          <input
            className="create-new-user-page-input create-new-user-page-password-input"
            id="confirm-password-input"
            type={showPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
          <i className="create-new-user-page-password-icon fas fa-lock"></i>
        </div>
        <button
          type="button"
          onClick={handleShowPasswordToggle}
          className="authentication-page-show-password-button btn btn-sm"
        >
          {showPassword ? '👁️' : '😵'}
        </button>
        {!passwordsMatch && <p className="create-new-user-page-password-mismatch-message">Passwords do not match</p>}
        <button className="create-new-user-page-button" type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateNewUserPage;
