import React from "react";

const MusicPlayer = () => {
  return (
    <div className="h-full w-full bg-gray-900 text-white p-4 flex flex-col items-center rounded-3xl  shadow-lg">
      <div className="w-full mb-4">
        <img
          //   src="/robin3.jpg"
          src="/w.jpg"
          alt="Cover"
          className="w-full h-52 object-cover rounded-lg"
        />
      </div>
      <h2 className="text-xl font-bold">Song Name</h2>
      <p className="text-gray-400">Artist</p>
      <div className="flex items-center mt-4">
        <button className="bg-gray-700 p-2 rounded-full mr-2">Play</button>
        <button className="bg-gray-700 p-2 rounded-full">Stop</button>
      </div>
      {/* Add more player controls and details here */}
    </div>
  );
};

export default MusicPlayer;
