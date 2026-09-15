import React, { useRef, useState } from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const VideoPlayer = () => {
  let vidRef = useRef(null);
  let [isPlaying, setIsPlaying] = useState(false);
  let handlePlayPause = () => {
    isPlaying ? vidRef.current.pause() : vidRef.current.play();
    setIsPlaying(!isPlaying);
  };
  let handleForward = () => {
    console.log(vidRef.current.duration);
    console.log(vidRef.current.currentTime);
    vidRef.current.currentTime += 5;
  };
  let handleBackward = () => {
    console.log(vidRef.current.duration);
    console.log(vidRef.current.currentTime);
    vidRef.current.currentTime = Math.max(0, (vidRef.current.currentTime -= 5));
  };
  return (
    <div>
      <video ref={vidRef} src="/snowfall.mp4" className="w-200"></video>
      <button
        onClick={handleBackward}
        className="m-2 p-2 bg-blue-200 cursor-pointer"
      >
        <FaBackward />
      </button>
      <button
        onClick={handlePlayPause}
        className="m-2 p-2 bg-blue-200 cursor-pointer"
      >
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
      <button
        onClick={handleForward}
        className="m-2 p-2 bg-blue-200 cursor-pointer"
      >
        <FaForward />
      </button>
    </div>
  );
};

export default VideoPlayer;
