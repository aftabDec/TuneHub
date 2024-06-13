import React, { useState } from "react";
import {
  FaCompactDisc,
  FaListAlt,
  FaHome,
  FaFire,
  FaStar,
  FaBook,
  FaSignInAlt,
  FaUserAlt,
  FaPlus,
} from "react-icons/fa";

import LoginPopup from "./LoginPopup";
import { useSelector } from "react-redux";
import Playlist from "./Playlist";
import { Link, useNavigate } from "react-router-dom";
import {} from "react-router-dom";

const SideHeader = () => {
  const { authUser } = useSelector((store) => store.auth);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [showLibraryPopup, setShowLibraryPopup] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setShowLoginPopup(true);
  };

  const handleClosePopup = () => {
    setShowLoginPopup(false);
  };

  const toggleLibraryPopup = () => {
    setShowLibraryPopup((prev) => !prev);
  };

  const handleCreatePlaylist = () => {
    setShowLibraryPopup(false);
    navigate("/playlist");
  };
  const homeNavigate = () => {
    navigate("/");
    setShowLibraryPopup(false);
  };

  return (
    <div className="rounded-3xl shadow-lg bg-[#04030c] text-white p-6 h-full">
      <h1 className="text-4xl ml-5 font-bold pb-1 mb-6 from-purple-600 via-indigo-500 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
        Softify
      </h1>

      <nav className="ml-5 mt-8">
        <ul>
          <li className="mb-10 transition-all duration-300">
            <a
              onClick={homeNavigate}
              href="#home"
              className="flex items-center text-white text-lg hover:text-gray-300"
            >
              <FaHome className="mr-4" /> Home
            </a>
          </li>
          <li className="mb-10 transition-all duration-300 ">
            <a
              href="#trending"
              className="flex items-center text-white text-lg hover:text-gray-300"
            >
              <FaFire className="mr-4" /> Trending
            </a>
          </li>
          <li className="mb-10 transition-all duration-300 ">
            <a
              href="#popular"
              className="flex items-center text-white text-lg hover:text-gray-300"
            >
              <FaStar className="mr-4" /> Popular
            </a>
          </li>
          <li className="mb-10 transition-all duration-300 relative">
            <a
              onClick={toggleLibraryPopup}
              href="#library"
              className="flex items-center text-white text-lg hover:text-gray-300"
            >
              <FaBook className="mr-5" /> Library
            </a>
            <div className="overflow-y-auto my-3 scrollbar-thumb-custom h-52 w-40 ">
              <Playlist />
            </div>

            {showLibraryPopup && (
              <ul className="menu absolute  left-28 top-0 mt-4 w-52 rounded-box bg-[#04030c] p-4 shadow-lg z-10">
                <li className="mb-4">
                  <a className="flex items-center text-white text-lg hover:text-gray-300">
                    <FaListAlt className="mr-3" />
                    Playlist
                  </a>
                </li>
                <li className="mb-4">
                  <a className="flex items-center text-white text-lg hover:text-gray-300">
                    <FaUserAlt className="mr-3" />
                    Artist
                  </a>
                </li>
                <li className="mb-4">
                  <a className="flex items-center text-white text-lg hover:text-gray-300">
                    <FaCompactDisc className="mr-3" />
                    Album
                  </a>
                </li>
                <li>
                  <Link to="/Playlist">
                    {" "}
                    <button
                      onClick={handleCreatePlaylist}
                      className="flex items-center text-white text-lg hover:text-gray-300"
                    >
                      <FaPlus className="mr-3" />
                      Create Playlist
                    </button>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="mb-10 transition-all duration-300 hover:ml-2">
            <a
              href="#login"
              onClick={handleLoginClick}
              className="flex items-center text-white text-lg hover:text-gray-300"
            >
              <FaSignInAlt className="mr-4" />
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
