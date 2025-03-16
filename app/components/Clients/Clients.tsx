import React from "react";
import { Marquee } from "./marquee";

function Clients() {
  const clients = [
    {
      img: "/clients/1.png",
    },
    {
      img: "/clients/2.png",
    },
    {
      img: "/clients/3.png",
    },
    {
      img: "/clients/4.png",
    },
  ];

  return (
    <>
      <h1 className="md:text-[45px] text-[22px] font-normal text-white mb-[50px]">
        Our Partners
      </h1>
      <Marquee pauseOnHover className="[--duration:20s]">
        {clients.map((client) => (
          <div className="w-[200px] h-[100px] flex align-middle justify-center bg-gray-200 rounded-sm p-[20px]">
            <img
              key={client.img}
              src={client.img}
              width={100}
              className="object-contain"
            />
          </div>
        ))}
      </Marquee>
    </>
  );
}

export default Clients;
