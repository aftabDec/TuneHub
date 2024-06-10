import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setOtherSong } from "../redux/SongSlice";

const BASE_URL = "http://localhost:5000"; // Base URL of your server

export const UseGetSongHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSong = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/songs/get`);
        const formattedData = res.data.map((song) => ({
          ...song,
          image: `${BASE_URL}${song.image}`, // Prepend base URL to image path
        }));
        dispatch(setOtherSong(formattedData));
        console.log(formattedData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSong();
  }, [dispatch]);
};
