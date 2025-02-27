import Link from "next/link";
import "./Contact.css";
import { Icon } from "@iconify/react";
function Contact() {
  return (
    <div className="section contact">
      <div className="flex flex-col gap-5 md:w-1/2 w-full">
        <span className="flex w-[216px] h-[38px] items-center justify-center bg-[#D9D9D9] rounded-full">
          Gomida Solutions
        </span>
        <h1 className="text-[45px] font-normal text-white">Lets talk</h1>

        <p className="text-white text-[12px]">info@gomediasolutions.com</p>
        <p className="text-white text-[12px]">+251 911 123456</p>
        <p className="text-white text-[12px]">Addis Abeba, Ethiopia</p>
        <div className="flex gap-3">
          <Link href={""}>
            <Icon icon="ic:round-facebook" className="text-white text-[30px]" />
          </Link>
          <Link href={""}>
            <Icon
              icon="mingcute:instagram-fill"
              className="text-white text-[30px]"
            />
          </Link>
          <Link href={""}>
            <Icon
              icon="mingcute:linkedin-fill"
              className="text-white text-[30px]"
            />
          </Link>
          <Link href={""}>
            <Icon icon="ic:sharp-telegram" className="text-white text-[30px]" />
          </Link>
        </div>
        <p className="text-white text-[12px]">
          Copyright 2025. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Contact;
