import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-56 h-full rounded-3xl bg-slate-700 text-white p-4 hidden lg:block">
      <h2 className="text-2xl font-bold">Admin Dashboard</h2>
      <ul className="space-y-4 ml-10 mt-5">
        <li>
          <Link to="/user" className="text-lg">
            Users
          </Link>
        </li>
        <li>
          <Link to="/song" className="text-lg">
            Songs
          </Link>
        </li>
        <li>
          <Link to="/album" className="text-lg">
            Albums
          </Link>
        </li>
        <li>
          <Link to="/artist" className="text-lg">
            Artists
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
