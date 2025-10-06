"use client";
// add a smooth right to left closing pagee after its timeout
import { useState, useEffect } from "react";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowPreloader(false), 1500); // show for 1.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body>
        {showPreloader ? (
          <div className="bg-[#252424] min-h-screen flex flex-col justify-center items-center p-8">
            <h1 className="text-5xl font-extrabold text-white text-center mb-6">
              <span className="font-margarine">Hi</span> /{" "}
              <span className="font-noto-jp">こんにちは</span>
            </h1>
          </div>
        ) : (
          children
        )}
      </body>
    </html>
  );
}
