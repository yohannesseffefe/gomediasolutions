import Link from "next/link";
import "./Contact.css";
import { Icon } from "@iconify/react";
import Clients from "../Clients/Clients";
function Contact() {
  return (
    <div className="section contact flex  flex-col-reverse gap-10 ">
      <div className="flex flex-col gap-5 md:w-1/2 w-full">
        <Link href={"/whitepaper"}>
          <span className="flex w-[216px] h-[38px] items-center justify-center bg-[#D9D9D9] rounded-full">
            White Paper
          </span>
        </Link>
        <h1 className="text-[45px] font-normal text-white">Lets talk</h1>

        <p className="text-white text-[12px]">info@gomidasolutions.com</p>
        <p className="text-white text-[12px]">+251 913 592636</p>
        <p className="text-white text-[12px]">Addis Abeba, Ethiopia</p>
        <div className="flex gap-3">
          <Link
            href={"https://www.facebook.com/share/12FmJn14Wpg/?mibextid=wwXIfr"}
          >
            <Icon icon="ic:round-facebook" className="text-white text-[30px]" />
          </Link>
          <Link
            href={
              "https://www.instagram.com/houseofchewata?igsh=MXZ3bnE2eWFxYWQ4Ng%3D%3D&utm_source=qr"
            }
          >
            <Icon
              icon="mingcute:instagram-fill"
              className="text-white text-[30px]"
            />
          </Link>
          <Link href={"https://www.linkedin.com/company/house-of-chewata/"}>
            <Icon
              icon="mingcute:linkedin-fill"
              className="text-white text-[30px]"
            />
          </Link>
          <Link href={"https://t.me/houseofchewataBot"}>
            <Icon icon="ic:sharp-telegram" className="text-white text-[30px]" />
          </Link>

          <Link
            href={
              "https://www.tiktok.com/@house.of.chewata?_t=ZM-8uU84F11FzD&_r=1"
            }
          >
            <Icon icon="ic:sharp-tiktok" className="text-white text-[30px]" />
          </Link>

          <Link
            href={"https://x.com/houseofchewata_?s=21&t=4WwEkHbpbzPn5ZRUvVNvuQ"}
          >
            <Icon icon="prime:twitter" className="text-white text-[30px]" />
          </Link>

          <Link
            href={"https://youtube.com/@gomidasolutions?si=801sbWwQxvmVId_q"}
          >
            <Icon
              icon="mingcute:youtube-line"
              className="text-white text-[30px]"
            />
          </Link>
        </div>
        <p className="text-white text-[12px]">
          Copyright 2025. All Rights Reserved
        </p>
      </div>
      <div className="pb-[100px]">
        <Clients />
      </div>
    </div>
  );
}

export default Contact;
