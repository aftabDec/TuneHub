import React, { useState, useEffect, useRef } from "react";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaHeart,
} from "react-icons/fa";
import { useSelector } from "react-redux";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0); // Duration will be set dynamically
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleRangeChange = (e) => {
    const newTime = (e.target.value / 100) * duration;
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  // Format time to mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const audio = audioRef.current;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleError = (e) => {
      console.error("Error loading audio source", e);
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("error", handleError);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("error", handleError);
    };
  }, []);

  const selectedSong = useSelector((state) => state.song.selectedSong);

  if (!selectedSong) return <div>No song selected</div>;

  const audioUrl = `http://localhost:5000${selectedSong.fileUrl}`;
  console.log("Selected song URL:", audioUrl);

  return (
    <div className="h-full w-full bg-black text-white p-4 flex flex-col items-center rounded-3xl shadow-lg">
      <div className="w-full mb-4">
        <img
          src={selectedSong.image}
          alt="Cover"
          className="w-full h-72 object-cover rounded-lg"
        />
      </div>
      <div className="flex items-center justify-between w-full px-2 mb-2">
        <h2 className="text-xl font-bold">{selectedSong.title}</h2>
        <button className="text-red-500">
          <FaHeart size={24} />
        </button>
      </div>
      <p className="text-gray-400 float-left">{selectedSong.artist}</p>

      <div className="w-full mt-4">
        <input
          type="range"
          value={(currentTime / duration) * 100}
          className="w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer"
          onChange={handleRangeChange}
        />
      </div>
      <div className="w-full flex justify-between text-gray-400 text-sm mt-2">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>
      <div className="flex items-center mt-5">
        <button className="bg-purple-700 p-2 rounded-full mx-2">
          <FaStepBackward size={20} />
        </button>
        <button
          onClick={handlePlayPause}
          className="bg-purple-700 p-2 rounded-full mx-2"
        >
          {isPlaying ? <FaPause size={25} /> : <FaPlay size={25} />}
        </button>
        <button className="bg-purple-700 p-2 rounded-full mx-2">
          <FaStepForward size={20} />
        </button>
      </div>
      <audio ref={audioRef} src={selectedSong.fileUrl} />
    </div>
  );
};

export default MusicPlayer;
