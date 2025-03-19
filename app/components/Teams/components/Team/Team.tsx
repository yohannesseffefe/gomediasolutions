import React from "react";

function Team({ name, photo, position }: any) {
  return (
    <div className="md:w-[325px] w-full flex flex-col bg-white rounded-[20px] p-[20px] ">
      <img
        className="w-full h-[254px] object-cover  object-top rounded-[20px] overflow-hidden"
        src={photo}
      />
      <h1 className="text-black md:text-[16px] text-[13px] mt-[20px]">
        {name}
      </h1>
      <p className="text-black md:text-[14px] text-[12px]">{position}</p>
    </div>
  );
}

export default Team;
