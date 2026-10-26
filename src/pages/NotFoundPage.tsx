import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="wrap notfound">
      <span className="code">ERROR 404 — SET FAILED</span>
      <h1>Missed the bar.</h1>
      <p>That page doesn't exist, or the link is broken. Head back and pick up where you left off.</p>
      <Link to="/" className="btn btn-primary">Back to Apex Calisthenics</Link>
    </div>
  );
};
