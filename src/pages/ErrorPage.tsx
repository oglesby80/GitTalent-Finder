import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  return (
    <section>
      <h1>404: Page Not Found</h1>
      <h2>¯\_(ツ)_/¯</h2>
      <p>The page you are looking for does not exist.</p>
      <Link to="/candidate-search" style={{ textDecoration: 'none', color: 'blue' }}>
        Go Back to Candidate Search
      </Link>
    </section>
  );
};
Location: src/pages/ErrorPage.tsx
export default ErrorPage;

