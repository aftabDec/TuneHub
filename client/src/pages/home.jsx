import React from "react";
import SideHeader from "../components/SideHeader";
import PopularSection from "../components/Popular";
import MusicPlayer from "../components/MusicPlay";
import Carousal from "../components/Carousal";
const Home = () => {
  return (
    <div className="flex h-screen p-4 bg-black text-white">
      {/* Sideheader */}
      <div className="w-44 mr-4 h-full">
        <SideHeader />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <Carousal />
        <PopularSection />
      </div>

      {/* Music Player */}
      <div className="w-1/4 ml-4 h-full">
        <MusicPlayer />
      </div>
    </div>
  );
};

export default Home;
