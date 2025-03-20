import React from "react";
import "./Banner.css";
import Button from "../Button/Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
function Banner() {
  const router = useRouter();

  const handleClick = () => {
    router.push("https://t.me/houseofchewataBot");
  };
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let scrollTrigger;
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero",
        start: "top 80%", // Start animation when the top of the section hits 80% from the top of viewport
        end: "bottom 20%", // End animation when the bottom of the section hits 20% from the top of viewport
        toggleActions: "play none none reverse", // play on enter, reverse on leave
        markers: false, // Set to true for debugging
      },
    });
    scrollTrigger = ScrollTrigger.getAll().pop();
    tl.fromTo(
      ".hero img",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8 }
    )
      .fromTo(
        ".hero h1",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        ".hero p",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        "-=0.6"
      );
    return () => {
      if (scrollTrigger) {
        scrollTrigger.kill();
      }
    };
  }, []);
  return (
    <div className="section hero flex justify-center flex-col items-center text-white gap-5">
      <img src="/logo.webp" className="w-[400px] h-auto" />
      <h1 className="md:text-[45px] text-[35px] font-extrabold text-center">
        Gomida solutions
      </h1>
      <p className="md:text-[16px] text-[13px]">Connecting the dots!</p>
      <Button title={"Play Now"} onClick={handleClick} />
    </div>
  );
}

export default Banner;
