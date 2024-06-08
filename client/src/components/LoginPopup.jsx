import React from "react";
import { Link } from "react-router-dom";
const LoginPopup = ({ show, onClose }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed  z-10 inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="relative  flex flex-col items-center bg-gray-900 p-6 rounded shadow-lg w-96">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-gray-700 rounded-full w-6 h-6 flex items-center justify-center"
        >
          &times;
        </button>
        <h1 className="text-2xl mt-3 text-center font-bold text-purple-600 mb-4">
          Softify
        </h1>
        <h3 className="text-2xl font-bold text-center text-white mb-4">
          Millions of song on sofitfy
        </h3>
        <Link to="/login">
          <button className="btn h-5 mt-5  rounded-full w-32 btn-primary">
            Login
          </button>
        </Link>
        <p className="mt-5">
          New to sofitfy ?{" "}
          <span className="font-bold mb-5 text-white">
            <Link to="/register">Sign up free</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPopup;
