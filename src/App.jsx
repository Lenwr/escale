import React from "react";
import ReactPlayer from "react-player";

const FullScreenVideo = () => {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <ReactPlayer 
        url="https://www.youtube.com/watch?v=qjc2YrJIzUk&ab_channel=ALIJEZZ"
        playing={true} // Auto-play activé
        controls
        width="100vw"
        height="100vh"
      />
    </div>
  );
};

export default FullScreenVideo;
