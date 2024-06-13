import React, { useState, useEffect, useRef } from "react";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaHeart,
  FaVolumeMute,
  FaVolumeUp,
} from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { togglePlayPause } from "../redux/SongSlice";

const MusicPlayer = () => {
  const dispatch = useDispatch();
  const isPlaying = useSelector((state) => state.song.isPlaying);
  const selectedSong = useSelector((state) => state.song.selectedSong);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);

  // Handle play/pause button click
  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
      dispatch(togglePlayPause(true)); // Dispatch action to set isPlaying to true
    } else {
      audioRef.current.pause();
      dispatch(togglePlayPause(false)); // Dispatch action to set isPlaying to false
    }
  };

  // Handle volume change
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    audioRef.current.volume = newVolume;
    if (newVolume === 0) {
      setIsMuted(true);
    } else {
      setIsMuted(false);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      audioRef.current.volume = volume;
      setIsMuted(false);
    } else {
      audioRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  // Handle time slider change
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

  // Update current time as audio plays
  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  // Handle metadata loaded (duration available)
  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // Handle audio ended (loop or reset)
  const handleEnded = () => {
    setCurrentTime(0);
    audioRef.current.currentTime = 0;
    audioRef.current.play(); // Restart playing
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.addEventListener("timeupdate", handleTimeUpdate);
    audio.addEventListener("loadedmetadata", handleLoadedMetadata);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", handleTimeUpdate);
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []); // Run effect only once on component mount

  // Calculate progress bar style based on current time and duration
  const progressPercentage = (currentTime / duration) * 100;
  const rangeStyle = {
    background: `linear-gradient(to right,#5D3FD3 ${progressPercentage}%, #120021 ${progressPercentage}%)`,
  };

  if (!selectedSong) return <div>No song selected</div>;

  const audioUrl = `http://localhost:5000${selectedSong.fileUrl}`;

  return (
    <div className="h-full bg-black text-white rounded-3xl p-4 flex flex-col items-center shadow-lg">
      <div className="w-full mb-4">
        <img
          src={selectedSong.image}
          alt="Cover"
          className="w-full h-72 object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col justify-between w-full px-2 mb-2">
        <h1 className="text-2xl overflow-hidden text-ellipsis text-nowrap w-52 font-bold">
          {selectedSong.title}
        </h1>
        <p className="text-gray-300 font-medium text-lg float-left">
          {selectedSong.artist}
        </p>
        <button className="text-green-500 flex flex-col absolute right-12 mt-2">
          <FaHeart size={24} />
        </button>
      </div>

      <div className="w-full mt-4">
        <input
          type="range"
          style={rangeStyle}
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
        <button className="bg-indigo-600 0 p-2 rounded-full mx-2">
          <FaStepBackward size={20} />
        </button>
        <button
          onClick={handlePlayPause}
          className="bg-indigo-600 transition-all ease-in-out p-2 rounded-full mx-2"
        >
          {audioRef.current && !audioRef.current.paused ? (
            <FaPause size={25} />
          ) : (
            <FaPlay size={25} />
          )}
        </button>
        <button className="bg-indigo-600 p-2 rounded-full mx-2">
          <FaStepForward size={20} />
        </button>
      </div>

      <audio autoPlay={true} ref={audioRef} src={audioUrl} />
      <div className="flex  right-28 items-center mt-10 relative  group">
        <button
          onClick={toggleMute}
          className="bg-indigo-600 p-2 rounded-full mx-2"
        >
          {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
        </button>{" "}
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={handleVolumeChange}
          className="range  bg-white range-xs range-primary volume-slider absolute left-4 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:left-16 w-0 group-hover:w-24"
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
