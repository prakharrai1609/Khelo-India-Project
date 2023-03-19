import React from 'react';
import '../styles/NotFound.css';

function ErrorNotFoundPage() {
  return (
    <div className="not-found-container">
      <div className="not-found">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
        <a href="/">Go back to the homepage</a>
      </div>
    </div>
  );
}

export default ErrorNotFoundPage;
