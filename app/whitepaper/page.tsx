import ReactLenis from "lenis/react";
import Link from "next/link";
import React from "react";

function page() {
  return (
    <>
      <ReactLenis options={{ duration: 2 }} root>
        <div className="w-full h-[100vh] flex flex-col items-center justify-center bg-black">
          <h1 className="text-white text-[34px]">COMING SOON</h1>
          <Link href="/">
            <span className="flex w-[216px] h-[38px] items-center justify-center bg-[#D9D9D9] rounded-full">
              Go Back
            </span>
          </Link>
        </div>
      </ReactLenis>
    </>
  );
}

export default page;
