"use client";
import About from "./components/About/About";
import Banner from "./components/Banner/Banner";
import ConnectingDots from "./components/ConnectingDots/ConnectingDots";
import Contact from "./components/Contact/Contact";
import Games from "./components/Games/Games";
import PlayGame from "./components/PlayGame/PlayGame";
import Teams from "./components/Teams/Teams";
import Video from "./components/Video/Video";
import { ReactLenis } from "@studio-freight/react-lenis";
export default function Home() {
  return (
    <>
      <ReactLenis options={{ duration: 2 }} root>
        <Banner />
        <About />
        <Video />
        <PlayGame />
        <ConnectingDots />
        <Games />
        <Teams />
        <Contact />
      </ReactLenis>
    </>
  );
}
