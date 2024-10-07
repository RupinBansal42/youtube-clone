import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "./../utils/constants";
import VideoCart, {AdVideoCard} from "./VideoCart";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();
    setVideo(json.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos[0] && <AdVideoCard props = {videos[0]}/>}
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCart props={video} />{" "}
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
