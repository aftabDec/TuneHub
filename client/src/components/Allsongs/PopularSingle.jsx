import React from "react";
import PopularSong from "./PopularSong";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedSong } from "../../redux/SongSlice";

const PopularSingle = () => {
  const dispatch = useDispatch();
  const popularSongs = useSelector((state) => state.song.otherSongs);

  const handleSongClick = (song) => {
    dispatch(setSelectedSong(song));
  };
  return (
    <div>
      <PopularSong songs={popularSongs} onSongClick={handleSongClick} />
    </div>
  );
};

export default PopularSingle;
