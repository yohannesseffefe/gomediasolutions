import React from "react";
import "./Banner.css";
import Button from "../Button/Button";
function Banner() {
  return (
    <div className="section hero flex justify-center flex-col items-center text-white gap-5">
      <img src="/logo.webp" className="w-[400px] h-auto" />
      <h1 className="md:text-[45px] text-[35px] font-extrabold text-center">
        Gomedia Solutions
      </h1>
      <p className="md:text-[16px] text-[13px]">
        join our platform at house of chewata{" "}
      </p>
      <Button title={"Play Now"} onClick={() => {}} />
    </div>
  );
}

export default Banner;
