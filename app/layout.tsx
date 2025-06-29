import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import type React from "react"; // Import React
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Gomida Solutions",
  description: "Innovative solutions for your business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="gradient-bg"></div>
        <div className="border-top">
          <div className="logo">
            <img src="/gomidalogo.png" width={100} />
          </div>
          <div className="nav"></div>
          <img
            src="/66603af083943342fe214cf9_border-right-top-new.svg"
            className="border-right-top"
          />
          <img
            src="/65f2ff660acfee8ba5cd3b36_border-left-top.svg"
            className="border-left-top"
          />
          <img
            src="/6602ebd9ae42af7d61b21839_border-right-top-mobile.svg"
            className="border-right-top-mobile"
          />
          <img
            src="/6602ebcc33f08a6c0c9d0393_border-left-top-mobile.svg"
            className="border-left-top-mobile"
          />
        </div>
        <div className="border-left-container">
          <img
            src="/65f3025ed598b85f146d736d_border-left-center.svg"
            className="border-left-center"
          />
        </div>
        <div className="border-right-container">
          <img
            src="/65f302f74ee53940c8b3ece4_border-right-center.svg"
            className="border-right-center"
          />
        </div>
        <div className="border-bottom">
          <img
            src="/65f3036a2e2eb26578681d49_border-left-bottom.svg"
            className="border-left-bottom"
          />
          <img
            src="/65f3033284a9b1ecad6ccfc2_border-right-bottom.svg"
            className="border-right-bottom"
          />
        </div>
        <main>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
