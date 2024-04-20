import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Sidebar.css"; 


const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if (!isMenuOpen) return null;

  return (
    <div className="col-span-2 p-2 shadow-lg w-[13rem] overflow-hidden">
      <div className="bg-white pb-4 fixed h-full overflow-y-auto custom-scrollbar">
        <ul className="border-b pt-2 pb-3">
          <li className="flex items-center cursor-pointer hover:bg-gray-100 rounded-full py-2">
            <img
              className="mr-4 p-2"
              width="50"
              height="50"
              src="https://img.icons8.com/fluency-systems-filled/50/home.png"
              alt="home"
            />
            <span>
              <Link to={"/"}>Home</Link>
            </span>
          </li>
          <li className="flex items-center cursor-pointer hover:bg-gray-100 rounded-full py-2">
            <img
              className="mr-4 p-2"
              width="50"
              height="50"
              src="https://img.icons8.com/material-outlined/50/youtube-shorts.png"
              alt="youtube-shorts"
            />
            <span>Shorts</span>
          </li>
          <li className="flex items-center cursor-pointer hover:bg-gray-100 rounded-full py-2">
            <img
              className="mr-4 p-2"
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/video-playlist.png"
              alt="video-playlist"
            />
            <span>Subscriptions</span>
          </li>
        </ul>
        <ul className="border-b pb-3">
          <li className="flex items-center cursor-pointer hover:bg-gray-100 rounded-full py-2">
            <img
              className="mr-4 p-2"
              width="50"
              height="50"
              src="https://img.icons8.com/material-outlined/50/video-playlist.png"
              alt="video-playlist"
            />
            <span>You</span>
          </li>
          <li className="flex items-center cursor-pointer hover:bg-gray-100 rounded-full py-2">
            <img
              className="mr-4 p-2"
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/time-machine--v1.png"
              alt="time-machine--v1"
            />
            <span>History</span>
          </li>
        </ul>
        <h1 className="font-bold pt-2 pb-1">Explore</h1>
        <ul>
          <li className="flex items-center cursor-pointer hover:bg-gray-100 rounded-full py-2">
            <img
              className="mr-4 p-2"
              width="50"
              height="50"
              src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/50/000000/external-trending-multimedia-anggara-basic-outline-anggara-putra.png"
              alt="external-trending-multimedia-anggara-basic-outline-anggara-putra"
            />
            <span>Trending</span>
          </li>
          <li className="flex items-center cursor-pointer hover:bg-gray-100 rounded-full py-2">
            <img
              className="mr-4 p-2"
              width="50"
              height="50"
              src="https://img.icons8.com/dotty/50/shopping-bag.png"
              alt="shopping-bag"
            />
            <span>Shopping</span>
          </li>
          <li className="flex items-center cursor-pointer hover:bg-gray-100 rounded-full py-2">
            <img
              className="mr-4 p-2"
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/musical.png"
              alt="musical"
            />
            <span>Music</span>
          </li>
          <li className="flex items-center cursor-pointer hover:bg-gray-100 rounded-full py-2">
            <img
              className="mr-4 p-2"
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/clapperboard.png"
              alt="clapperboard"
            />
            <span>Movies</span>
          </li>
          <li className="flex items-center cursor-pointer hover:bg-gray-100 rounded-full py-2">
            <img
              className="mr-4 p-2"
              width="50"
              height="50"
              src="https://img.icons8.com/ios/50/youtube-live.png"
              alt="youtube-live"
            />
            <span>Live</span>
          </li>
        </ul>
        </div>      
    </div>
  );
};

export default Sidebar;
