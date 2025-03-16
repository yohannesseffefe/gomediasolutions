import React from "react";

function Works() {
  return (
    <div className="w-full flex align-middle md:flex-row flex-col justify-center bg-black gap-8">
      <img src="/game1.PNG" className="w-[300px]" />
      <img src="/game2.PNG" className="w-[300px]" />
      <img src="/game1.PNG" className="w-[300px] md:flex hidden" />
      <img src="/game2.PNG" className="w-[300px] md:flex hidden" />
    </div>
  );
}

export default Works;
