import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-6xl font-bold text-red-500">404</h1>
      <p className="text-2xl mt-4">Oops! Page not found.</p>
      <Link to="/" className="mt-6 btn btn-primary">Go Home</Link>
    </div>
  );
};

export default NotFound;
