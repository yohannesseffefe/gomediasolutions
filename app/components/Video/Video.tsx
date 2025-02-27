import { useRef } from "react";
import Button from "../Button/Button";
import "./Video.css";

function Video() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <div className="section video flex justify-center items-center gap-7 pt-[6.25em]">
      <div className="w-full md:h-[700px] h-auto bg-black rounded-[20px] p-[20px] flex flex-col justify-between">
        <div className="font-normal text-white md:text-[45px] text-[22px]">
          How-To Video
        </div>
        <div className="flex justify-center items-center">
          <video
            ref={videoRef}
            className="w-full md:h-[500px] h-auto object-cover rounded-lg"
            src="your-video-url.mp4"
            controls
          />
        </div>
        <div className="w-full justify-center items-center flex">
          <Button title={"Play Now"} onClick={handlePlayClick} />
        </div>
      </div>
    </div>
  );
}

export default Video;
