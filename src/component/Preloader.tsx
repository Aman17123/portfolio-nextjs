"use client";

import React, { useEffect, useState } from "react";

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="bg-[#252424] min-h-screen flex flex-col justify-center items-center p-8">
        <h1 className="text-5xl  font-extrabold white-bor text-center mb-6">
          <span className="font-margarine">Hi</span> /{" "}
          <span className="font-noto-jp">こんにちは</span>
        </h1>
        <h2 className="font-margarine">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse cum soluta dolores perferendis sequi deleniti magnam quisquam! Totam, quod ad, corrupti, maxime quia libero quam perspiciatis neque consequuntur voluptates obcaecati?</h2>
      </div>
    );
  }

  return <>{children}</>;
}
