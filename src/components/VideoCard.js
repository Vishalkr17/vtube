import React from "react";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  const formatViewCount = (viewCount) => {
    if (viewCount >= 1000000) {
      return (viewCount / 1000000).toFixed(1) + "M views";
    } else if (viewCount >= 1000) {
      return (viewCount / 1000).toFixed(1) + "K views";
    } else {
      return viewCount + " views";
    }
  };

  return (
    <div className="p-2 m-2 shadow-md cursor-pointer w-60 h-80 transform hover:scale-105 transition duration-300 ease-in-out">
      <img
        className="rounded-lg hover:rounded-none"
        src={thumbnails.medium.url}
        alt="thumbnail"
      />
      <ul className="flex flex-col justify-between overflow-hidden">
        <li className="font-bold line-clamp-2">{title}</li>
        <li className="text-gray-400 text-base line-clamp-1">{channelTitle}</li>
        <li className="text-gray-400 text-base">
          {formatViewCount(statistics.viewCount)}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
