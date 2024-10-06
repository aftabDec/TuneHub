import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getPlaylist } from "../redux/SongSlice";

const BASE_URL = "http://localhost:5000";

export const UseGetPlaylist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/playlists`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        console.log("Response from API:", response.data);
        const formattedData = response.data.map((songs) => ({
          ...songs,
        }));
        dispatch(getPlaylist(formattedData)); // Dispatch only the playlist data
        console.log(formattedData); // Log the fetched playlist data
      } catch (error) {
        console.log("Error fetching playlists:", error);
      }
    };

    fetchPlaylist();
  }, [dispatch]);

  return null; // Return null or appropriate JSX if needed
};
