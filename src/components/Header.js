import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_URL } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";


const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_URL+searchQuery)
    const json = await data.json();
    setSuggestions(json[1])

    //update cache
    dispatch(cacheResults({[searchQuery]: json[1]}))
  }
  
  const searchCache = useSelector((store) => store.search)
  
  useEffect(() => {
    // Make an api call after every key press but if the
    // difference between two api calls is 200ms - Decline the request
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }else{
        getSearchSuggestions();
      }
    },200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);


  return (
    <div className="grid grid-cols-12 gap-4 p-5 shadow-sm bg-white">
      <div className="col-span-2 flex items-center">
        <img
          className="h-8 mr-4 p-1 rounded-full cursor-pointer hover:bg-gray-300"
          alt="hamburger icon"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Hamburger_icon.svg"
          onClick={() => toggleMenuHandler()}
        />
        <a href="/">
          <img
            className="h-8 cursor-pointer"
            alt="youtube logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          />
        </a>
      </div>

      <div className="col-span-8 flex justify-center">
        <div className="w-1/2">
          <input
            className="p-2 h-8 w-full border border-gray-400 rounded-l-full focus:outline-none"
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
        </div>
        
        <button className="relative p-2 h-8 w-8 border border-gray-400 rounded-r-full cursor-pointer hover:bg-gray-200">
          <img
            className="absolute inset-0 w-full h-full p-2"
            alt="search-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Ads.png"
          />
        </button>
        
        {showSuggestions && <div className="absolute z-10 bg-white py-2 px-2 mt-8 w-[27rem] shadow-lg rounded-lg border border-gray-100 ">
          <ul>{suggestions.map((s) => {
            return <li key={s} className="flex items-center py-2 px-3 shadow-sm hover:bg-gray-100" ><img
            className="w-4 mr-2"
            alt="search-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Ads.png"
          />{s}</li> 
          })}
          </ul>
        </div>}
      </div>

      <div className="col-span-2 flex justify-end items-center">
        <img
          className="h-8 cursor-pointer"
          alt="user-avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Round_account_circle_black_24dp.png"
        />
      </div>
      
    </div>
  );
};

export default Header;
