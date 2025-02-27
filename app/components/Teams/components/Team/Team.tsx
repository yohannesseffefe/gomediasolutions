import React from "react";

function Team() {
  return (
    <div className="md:w-[325px] w-full flex flex-col bg-white rounded-[20px] p-[20px] ">
      <img className="w-full h-[254px] object-cover rounded-[20px] overflow-hidden" />
      <h1 className="text-black md:text-[25px] text-[18px]">Jane Doe</h1>
      <p className="text-black md:text-[14px] text-[12px]">CEO</p>
    </div>
  );
}

export default Team;
