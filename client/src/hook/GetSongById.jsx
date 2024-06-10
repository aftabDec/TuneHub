import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

export const useGetSongById = (songId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSongById = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/songs/${songId}`
        );
        dispatch(setSelectedSong(res.data));
      } catch (error) {
        console.error("Failed to fetch song by ID", error);
      }
    };

    if (songId) {
      fetchSongById();
    }
  }, [songId, dispatch]);
};
