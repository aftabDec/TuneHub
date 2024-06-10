import React from "react";
import { FaCirclePlay } from "react-icons/fa6";

const PopularSongs = ({ songs = [], onSongClick }) => {
  return (
    <div className="rounded-3xl shadow-lg bg-gradient-to-r from-gray-950 to-black p-4">
      <p className="float-right cursor-pointer mb-4 text-white">Show all</p>
      <h2 className="text-xl font-bold mb-4 text-white">Popular</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {songs.map((song) => (
          <div
            key={song.id}
            onClick={() => onSongClick(song)}
            className="bg-gray-900 p-2 rounded-lg relative group"
          >
            <img
              src={song.image}
              alt={song.title}
              className="rounded-lg h-48 w-full object-cover mb-2"
            />{" "}
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
              <FaCirclePlay className="text-green-500 text-5xl" />
            </div>
            <p className="text-white">{song.artist}</p>
            <p className="text-gray-400">{song.album}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSongs;
