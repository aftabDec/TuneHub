import { Outlet } from "react-router-dom";
import SideHeader from "./SideHeader";
import MusicPlayer from "./MusicPlay";

const Layout = () => {
  return (
    <div className="flex w-auto h-screen p-4 bg-[#0d0d0d] text-white">
      <div className="w-52 mr-4 h-full">
        <SideHeader />
      </div>
      <div className="flex-grow h-full overflow-hidden">
        <div className="h-full  bg-[#0d0d0d] text-white rounded-3xl overflow-y-auto">
          <Outlet />
        </div>
      </div>
      <div className="w-[22%] ml-4 h-full min-w-[314px]">
        <MusicPlayer />
      </div>
    </div>
  );
};

export default Layout;
