import React, { useState } from "react";
import { FaHome, FaFire, FaStar, FaBook, FaSignInAlt } from "react-icons/fa";
import LoginPopup from "./LoginPopup";
import { useSelector } from "react-redux";

const SideHeader = () => {
  const { authUser } = useSelector((store) => store.auth);
  const [showLoginPopup, setShowLoginPopup] = useState(false);

  const handleLoginClick = () => {
    setShowLoginPopup(true);
  };

  const handleClosePopup = () => {
    setShowLoginPopup(false);
  };
  return (
    <div className="rounded-3xl shadow-lg bg-[#06002B] text-white p-4 h-full">
      <h1 className="text-2xl ml-5 font-bold mb-4">Softify</h1>
      <nav className="ml-5 mt-12">
        <ul>
          <li className="mb-7 transition-all duration-300 hover:ml-2">
            <a
              href="#home"
              className="flex items-center text-white hover:text-gray-300"
            >
              <FaHome className="mr-3" /> Home
            </a>
          </li>
          <li className="mb-7 transition-all duration-300 hover:ml-2">
            <a
              href="#trending"
              className="flex items-center text-white hover:text-gray-300"
            >
              <FaFire className="mr-3" /> Trending
            </a>
          </li>
          <li className="mb-7 transition-all duration-300 hover:ml-2">
            <a
              href="#popular"
              className="flex items-center text-white hover:text-gray-300"
            >
              <FaStar className="mr-3" /> Popular
            </a>
          </li>
          <li className="mb-7 transition-all duration-300 hover:ml-2">
            <a
              href="#library"
              className="flex items-center text-white hover:text-gray-300"
            >
              <FaBook className="mr-3" /> Library
            </a>
          </li>
          <li className="mb-7 transition-all duration-300 hover:ml-2">
            <a
              href="#login"
              onClick={handleLoginClick}
              className="flex items-center text-white hover:text-gray-300"
            >
              <FaSignInAlt className="mr-3" />
              {authUser ? "Logout" : "Login"}
            </a>
          </li>
        </ul>
      </nav>
      <LoginPopup show={showLoginPopup} onClose={handleClosePopup} />
    </div>
  );
};

export default SideHeader;
