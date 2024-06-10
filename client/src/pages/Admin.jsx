import React from "react";
import UserList from "../components/Admin/Userlist";
import SongManager from "../components/Admin/Songmanger";
import AlbumManager from "../components/Admin/AlbumManage";
import ArtistManager from "../components/Admin/ArtistManage";
import Header from "../components/Admin/Header";
import Sidebar from "../components/Admin/Sidebar";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const AdminPage = () => {
  return (
    <div className="flex min-h-screen bg-black text-white">
      <div className="p-4   space-y-4">
        <Sidebar />
      </div>

      <div className="flex-1 flex flex-col p-4 space-y-4">
        <Header />
        <main className="flex-1 space-y-4">
          <UserList />
          <SongManager />
          {/* <AlbumManager />
          <ArtistManager /> */}
        </main>
      </div>
    </div>
  );
};

export default AdminPage;
