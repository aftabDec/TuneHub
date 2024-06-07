import React, { useState, useEffect } from "react";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaHeart,
} from "react-icons/fa";

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(200); // Set the duration of the song in seconds

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleRangeChange = (e) => {
    setCurrentTime((e.target.value / 100) * duration);
  };

  // Format time to mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    let interval = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentTime((prevTime) => {
          if (prevTime < duration) {
            return prevTime + 1;
          } else {
            clearInterval(interval);
            setIsPlaying(false);
            return prevTime;
          }
        });
      }, 1000);
    } else if (!isPlaying && currentTime !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTime, duration]);

  return (
    <div className="h-full w-full bg-black text-white p-4 flex flex-col items-center rounded-3xl shadow-lg">
      <div className="w-full mb-4">
        <img
          src="/robin4.png"
          alt="Cover"
          className="w-full h-72 object-cover rounded-lg"
        />
      </div>
      <div className="flex items-center justify-between w-full px-2 mb-2">
        <h2 className="text-xl font-bold">Welcome to my world</h2>
        <button className="text-red-500">
          <FaHeart size={24} />
        </button>
      </div>
      <p className="text-gray-400 float-left">Artist</p>

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
      {/* Add more player controls and details here */}
    </div>
  );
};

export default MusicPlayer;
