import React from "react";
import PopularSingle from "./Allsongs/PopularSingle";

const SongSection = () => {
  return (
    <div className="h-[575px]  mt-3 overflow-y-auto scrollbar-thin scrollbar-thumb-custom scrollbar-thumb-gray-600 rounded-3xl scrollbar-track-gray-900">
      <PopularSingle />
    </div>
  );
};

export default SongSection;
