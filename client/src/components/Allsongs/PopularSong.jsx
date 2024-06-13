import React from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";

const PopularSongs = ({ songs = [], onSongClick }) => {
  return (
    <div className="rounded-3xl shadow-lg bg-[#04030c] p-4">
      <p className="float-right cursor-pointer mb-4 text-white">Show all</p>
      <h2 className="text-xl font-bold mb-4 text-white">Explore</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {songs.map((song) => (
          <div
            key={song.id}
            onClick={() => onSongClick(song)}
            className="bg-black p-2 rounded-lg cursor-pointer relative group hover:bg-opacity-80 transition-opacity duration-300"
          >
            <div className="relative">
              <img
                src={song.image}
                className="rounded-lg h-48 w-full object-cover mb-2"
                style={{ transition: "opacity 0.3s" }}
              />
              <div className="absolute  inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100  transition-opacity duration-300">
                <FaCirclePlay className="text-green-500 text-5xl" />
              </div>
            </div>
            <p className="text-white text-lg overflow-hidden text-ellipsis text-nowrap ">
              {song.title}
            </p>
            <p className="text-gray-300 ">{song.artist}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSongs;
