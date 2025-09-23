import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Preloader from '../component/Preloader'
import "./globals.css";
import { preload } from "react-dom";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aman_Portfolio",
  description: "Generated Aman Nakoti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Preloader>{children}</Preloader>
      </body>
    </html>
  );
}
