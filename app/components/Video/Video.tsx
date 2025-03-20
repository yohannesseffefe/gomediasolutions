"use client";
import { useRef, useState, useEffect } from "react";
import "./Video.css";
import { Play, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

function Video() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const handlePlayClick = () => {
    if (videoRef.current) {
      // Store the play promise to handle it properly
      const playPromise = videoRef.current.play();

      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.error("Error playing video:", err);
            setError("Failed to play video. Please try again.");
          });
      }
    }
  };

  const handleVideoError = () => {
    setError(
      "Video could not be loaded. Please check if the file exists and is in a supported format."
    );
    setIsLoaded(false);
  };

  const handleVideoLoaded = () => {
    setIsLoaded(true);
    setError(null);
  };

  // Check if video exists on component mount
  useEffect(() => {
    // Create a new XMLHttpRequest to check if the video file exists
    const xhr = new XMLHttpRequest();
    xhr.open("HEAD", "/video.mp4", true);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        setIsLoaded(true);
      } else {
        setError(
          `Video file not found (${xhr.status}). Check if '/video.mp4' exists in your public directory.`
        );
      }
    };
    xhr.onerror = () => {
      setError("Failed to check if video exists. Network error.");
    };
    xhr.send();
  }, []);

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
            src="/video.MP4"
            onError={handleVideoError}
            onLoadedData={handleVideoLoaded}
            onPause={() => setIsPlaying(false)}
            onEnded={() => setIsPlaying(false)}
          />

          {/* Error message */}
          {/* {error && (
            <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center text-white p-6 text-center">
              <AlertCircle size={48} className="text-red-500 mb-4" />
              <p className="max-w-md">{error}</p>
              <div className="mt-4 text-sm opacity-80">
                <p>Make sure:</p>
                <ul className="list-disc text-left pl-5 mt-2">
                  <li>The video file exists in your public directory</li>
                  <li>The file format is supported (.mp4, .webm, .ogg)</li>
                  <li>The path is correct (/video.mp4)</li>
                </ul>
              </div>
            </div>
          )} */}

          {/* Preview overlay - only show if no error and video is loaded */}
          {!error && isLoaded && (
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
          )}
        </div>
      </div>
    </div>
  );
}

export default Video;
