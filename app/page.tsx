"use client";
import Image from "next/image";
import Banner from "./components/Banner";
import About from "./components/About";

export default function Home() {
  return (
    <div className="p-5 bg-black">
      <Banner />
      {/* <About /> */}
    </div>
  );
}
