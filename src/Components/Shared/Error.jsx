import React from "react";
import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const Error= () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center px-4">
      <FaExclamationTriangle className="text-red-500 text-6xl mb-4" />
      <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops! Page not found</h1>
      <p className="text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded-md transition"
      >
        Go back home
      </Link>
    </div>
  );
};

export default Error;
