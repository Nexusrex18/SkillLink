import React from 'react';
import { Home, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center space-y-8">
        <div className="flex justify-center">
          <AlertCircle className="h-24 w-24 text-red-500" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-8xl font-bold text-gray-900">404</h1>
          <h2 className="text-3xl font-semibold text-gray-700">Page Not Found</h2>
        </div>
        
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          Oops! It seems like the page you're looking for has gone on vacation. Let's get you back to familiar territory.
        </p>
        
        <Link to="/" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200">Go back to Home</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;