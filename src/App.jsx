import React from "react";
import ReactPlayer from "react-player";

const FullScreenVideo = () => {
  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center">
      <ReactPlayer 
        url="/animationVideo.mp4"
        playing={true}
        controls
        loop={true}
        width="100vw"
        height="100vh"
      />
    </div>
  );
};

export default FullScreenVideo;
