"use client";
import { useRef, useState } from "react";
import Button from "../Button/Button";
import "./Video.css";

import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

function Video() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="section video flex justify-center items-center gap-7 pt-[6.25em]">
      <div className="w-full md:h-[700px] h-auto bg-black rounded-[20px] p-[20px] flex flex-col justify-between">
        <div className="font-normal text-white md:text-[45px] text-[22px]">
          How-To Video
        </div>
        <div className="relative flex justify-center items-center">
          {/* Video element */}
          <video
            ref={videoRef}
            className="w-full md:h-[500px] h-auto object-cover rounded-lg"
            src="/video.mp4"
            poster="/placeholder.svg?height=500&width=800"
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          />

          {/* Preview overlay */}
          <div
            className={cn(
              "absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300",
              isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
            )}
            onClick={handlePlayClick}
          >
            <div className="bg-white/20 backdrop-blur-sm p-6 rounded-full cursor-pointer hover:bg-white/30 transition-colors">
              <Play size={48} className="text-white" />
            </div>
          </div>
        </div>
        {/* <div className="w-full justify-center items-center flex mt-4">
          <Button title={"Play Now"} onClick={handlePlayClick} />
        </div> */}
      </div>
    </div>
  );
}

export default Video;
