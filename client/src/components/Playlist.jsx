import React, { useState } from "react";
import { UseGetPlaylist } from "../hook/GetPlaylist";

const Playlist = () => {
  const items = [
    {
      image: "robin4.png",
      PlaylistName: "Another Playlist",
      ArtistName: "Artist1",
    },
    {
      image: "ost.png",
      PlaylistName: "Another",
      ArtistName: "Artist2",
    },
    {
      image: "sick.jpg",
      PlaylistName: "Another Playlist dsdsdsds",
      ArtistName: "Artist3",
    },
    // Add more items as needed
  ];
  UseGetPlaylist();

  return (
    <div className="my-7 flex flex-col justify-center cursor-pointer items-center">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative w-36 h-[54px] my-1 rounded-lg flex items-center"
        >
          <img
            src={item.image}
            className="w-12 h-13 object-contain rounded-lg mr-4"
            alt="Playlist Cover"
          />
          <div>
            <p className="font-medium text-sm overflow-hidden line-clamp-2">
              {item.PlaylistName}
            </p>
            <p className="text-gray-500 line-clamp-1">{item.ArtistName}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Playlist;
