import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

const PopularSection = () => {
  return (
    <div className="rounded-3xl shadow-lg bg-gradient-to-r from-purple-900 to-black p-4 h-[430px] overflow-y-auto scrollbar-thin scrollbar-thumb-custom scrollbar-thumb-gray-600 scrollbar-track-gray-800">
      <p className="float-right cursor-pointer mb-4 text-white">Show all</p>
      <h2 className="text-xl font-bold mb-4 text-white">Popular 🔥</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Replace with dynamic content */}
        <div className="bg-purple-700 p-2 rounded-lg relative group">
          <img
            src="we.jpg"
            alt="Song 1"
            className="rounded-lg h-48 w-full object-cover mb-2"
          />
          <p className="text-white">Die for you</p>
          <p className="text-gray-400">Weekend</p>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <FaCirclePlay className="text-green-500 text-5xl" />
          </div>
        </div>
        <div className="bg-purple-700 p-2 rounded-lg relative group">
          <img
            src="robin4.png"
            alt="Song 2"
            className="rounded-lg h-48 w-full object-cover mb-2"
          />
          <p className="text-white whitespace-nowrap text-ellipsis overflow-hidden">
            Hope is the Thing with Feathers
          </p>
          <p className="text-gray-400">Robin</p>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <FaCirclePlay className="text-green-500 text-5xl" />
          </div>
        </div>
        <div className="bg-purple-700 p-2 rounded-lg relative group">
          <img
            src="es.png"
            alt="Song 3"
            className="rounded-lg h-48 w-full object-cover mb-2"
          />
          <p className="text-white">La espada</p>
          <p className="text-gray-400">Bleach</p>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <FaCirclePlay className="text-green-500 text-5xl" />
          </div>
        </div>
        <div className="bg-purple-700 p-2 rounded-lg relative group">
          <img
            src="sairat.jpg"
            alt="Song 4"
            className="rounded-lg h-48 w-full object-cover mb-2"
          />
          <p className="text-white">Sairat</p>
          <p className="text-gray-400">Ajay-Atul</p>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <FaCirclePlay className="text-green-500 text-5xl" />
          </div>
        </div>
        <div className="bg-purple-700 p-2 rounded-lg relative group">
          <img
            src="es.png"
            alt="Song 3"
            className="rounded-lg h-48 w-full object-cover mb-2"
          />
          <p className="text-white">La espada</p>
          <p className="text-gray-400">Bleach</p>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <FaCirclePlay className="text-green-500 text-5xl" />
          </div>
        </div>
        <div className="bg-purple-700 p-2 rounded-lg relative group">
          <img
            src="sairat.jpg"
            alt="Song 4"
            className="rounded-lg h-48 w-full object-cover mb-2"
          />
          <p className="text-white">Sairat</p>
          <p className="text-gray-400">Ajay-Atul</p>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <FaCirclePlay className="text-green-500 text-5xl" />
          </div>
        </div>
        <div className="bg-purple-700 p-2 rounded-lg relative group">
          <img
            src="es.png"
            alt="Song 3"
            className="rounded-lg h-48 w-full object-cover mb-2"
          />
          <p className="text-white">La espada</p>
          <p className="text-gray-400">Bleach</p>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <FaCirclePlay className="text-green-500 text-5xl" />
          </div>
        </div>
        <div className="bg-purple-700 p-2 rounded-lg relative group">
          <img
            src="sairat.jpg"
            alt="Song 4"
            className="rounded-lg h-48 w-full object-cover mb-2"
          />
          <p className="text-white">Sairat</p>
          <p className="text-gray-400">Ajay-Atul</p>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <FaCirclePlay className="text-green-500 text-5xl" />
          </div>
        </div>
        {/* Add more songs as needed */}
      </div>
    </div>
  );
};

export default PopularSection;
