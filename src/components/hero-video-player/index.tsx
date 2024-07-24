import { useRef, useState } from "react";
import { PauseIcon_Rounded, PlayIcon_Rounded } from "@/assets/svg";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  width?: string;
  height?: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src, poster, width = "100%", height = "680px" }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative h-[350px] w-full overflow-hidden bg-black lg:h-[680px]">
      <video ref={videoRef} controls={false} poster={poster} className="h-full w-full object-cover">
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute bottom-5 left-5 flex items-center gap-x-4 rounded-[21px] bg-[#00000054] p-5 backdrop-blur-md backdrop-filter md:bottom-10 md:left-10 md:gap-x-7">
        <button onClick={handlePlayPause} className="cursor-pointer">
          {isPlaying ? (
            <img src={PauseIcon_Rounded} alt="play icon" className="w-10 lg:w-14" />
          ) : (
            <img src={PlayIcon_Rounded} alt="play icon" className="w-10 lg:w-14" />
          )}
        </button>

        <div>
          <p className="text-lg font-bold leading-none lg:text-[34px]">Play this video</p>
          <p className="text-xs lg:text-xl">To see why we built Oriz</p>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
