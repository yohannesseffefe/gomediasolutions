import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import type React from "react"; // Import React

const helvetica1 = localFont({
  src: "./fonts/helvetica1.woff2",
  variable: "--font-helvetica1",
});

const helvetica2 = localFont({
  src: "./fonts/helvetica2.woff2",
  variable: "--font-helvetica2",
});

const helvetica3 = localFont({
  src: "./fonts/helvetica3.woff2",
  variable: "--font-helvetica3",
});

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
    <html
      lang="en"
      className={`${helvetica1.variable} ${helvetica2.variable} ${helvetica3.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
