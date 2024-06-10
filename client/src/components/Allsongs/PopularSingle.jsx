import React from "react";
import PopularSong from "./PopularSong";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSong } from "../../redux/SongSlice";
import axios from "axios";
import { UseGetSongHook } from "../../hook/GetSong";
import PopularSongs from "./PopularSong";

const PopularSingle = () => {
  UseGetSongHook();

  const dispatch = useDispatch();
  const popularSongs = useSelector((state) => state.song.otherSongs) || []; // Ensure it's an array

  const handleSongClick = (song) => {
    dispatch(setSelectedSong(song));
  };

  return (
    <div>
      <PopularSongs songs={popularSongs} onSongClick={handleSongClick} />
    </div>
  );
};

export default PopularSingle;
