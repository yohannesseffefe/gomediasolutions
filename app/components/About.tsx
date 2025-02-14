import React from "react";
import Particles from "../bangrounds/Particles/Particles";
function About() {
  return (
    <div className="bg-black w-full flex gap-5 justify-between ">
      <div className="relative w-1/3 h-[350px] border-[1px] border-[#fcadfe] rounded-[12px] overflow-hidden bg-black">
        {/* Particles background */}
        <div className="absolute top-0 left-0 z-20 h-full w-full">
          <Particles
            particleColors={["#fcadfe]", "#fcadfe]"]}
            particleCount={100}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            className={""}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full h-full flex flex-col justify-between items-start p-8">
          <h1 className="text-[#fcadfe] text-[2.25rem] font-helvetica1 m-0 mb-4">
            Who we are
          </h1>
          <p className="font-helvetica3 text-[#fcadfe] max-w-2xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
      <div className="bg-[#61d3ff] rounded-[12px] flex-col gap-5 justify-between flex p-[20px] h-[350px] w-1/3">
        <h1 className="text-black text-[2.25rem] font-helvetica1">
          Who we done
        </h1>
        <p className="font-helvetica3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.{" "}
        </p>
      </div>
      <div className="bg-[#9381f5] rounded-[12px] flex-col gap-5 justify-between flex p-[20px] h-[350px] w-1/3">
        <h1 className="text-black text-[2.25rem] font-helvetica1">
          Our Vision
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.{" "}
        </p>
      </div>
    </div>
  );
}

export default About;
