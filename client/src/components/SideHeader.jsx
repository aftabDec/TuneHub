import React from "react";

const SideHeader = () => {
  return (
    <div className="rounded-3xl  shadow-lg bg-indigo-950 text-white p-4 h-full">
      <h1 className="text-2xl ml-5 font-bold mb-4">Softify</h1>
      <nav className="ml-5">
        <ul>
          <li className="mb-2 my-7">
            <a href="#home" className="text-white">
              Home
            </a>
          </li>
          <li className="mb-2 my-7">
            <a href="#trending" className="text-white">
              Trending
            </a>
          </li>
          <li className="mb-2 my-7">
            <a href="#popular" className="text-white">
              Popular
            </a>
          </li>
          <li className="mb-2 my-7">
            <a href="#library" className="text-white">
              Library
            </a>
          </li>
          <li className="mb-2 my-7">
            <a href="#library" className="text-white">
              Login
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SideHeader;
