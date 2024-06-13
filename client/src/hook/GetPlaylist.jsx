import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getPlaylist } from "../redux/SongSlice";

const BASE_URL = "http://localhost:5000";

const useGetPlaylist = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPlaylist = async () => {
      try {
        const res = await axios.get("");
        dispatch(getPlaylist(res.data));
      } catch (error) {}
    };
  }, []);
};
