import React from "react";
import PopularSingle from "./Allsongs/PopularSingle";

const SongSection = () => {
  return (
    <div className="h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-custom scrollbar-thumb-gray-600 scrollbar-track-gray-900">
      <PopularSingle />
    </div>
  );
};

export default SongSection;
