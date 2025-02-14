import React from "react";
import GradientText from "@/app/components/GradientText/GradientText";
import SplashCursor from "@/app/animations/SplashCursor/SplashCursor";
import StarBorder from "@/app/animations/StarBorder/StarBorder";
import Squares from "../bangrounds/Squares/Squares";
import Link from "next/link";
function Banner() {
  return (
    <>
      {" "}
      <div className=" w-full flex items-center justify-center h-screen overflow-hidden">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#5b5b5b"
          hoverFillColor="#222"
        />
        {/* <SplashCursor /> */}
        <div className="flex absolute items-center justify-center flex-col gap-6">
          <GradientText
            colors={["#61d3ff", "#fcadfe", "#9381f5 ", "#e8f0d0", "#61d3ff"]}
            animationSpeed={8}
            showBorder={false}
            className="text-[5.625rem] leading-[1.3em] font-helvetica1 "
          >
            Gomida Solutions
          </GradientText>
          <p className="text-[#b7b7b7] text-center text-[1.125rem] leading-[1.6em] font-helvetica3">
            Lorem ipsum is placeholder text commonly
          </p>
          <Link
            href="/"
            className="bg-white text-[1rem] w-[13.25rem] px-[1.25rem] py-[1.4375rem] flex items-center justify-center rounded-full font-helvetica3 mt-[2.75rem]"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}

export default Banner;
