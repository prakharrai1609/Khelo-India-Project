import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/ThankYouPage.css';

const ThankYouCreateUser = () => {
    return (
        <div className="thank-you-container">
            <h1>Thank You for Registering!</h1>
            <p>We appreciate your interest in Khelo Bharat and hope you enjoy your experience.</p>
            <Link to="/user" className="home-button">Back to Home</Link>
        </div>
    );
};

export default ThankYouCreateUser;
