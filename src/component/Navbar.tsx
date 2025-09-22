import React from 'react'
import '../app/globals.css'

export default function  () {
  return (
    <div className="bg-[#252424] min-h-screen flex flex-col justify-center items-center p-8">
      {/* Heading */}
          <h1 className="text-5xl  white-bor text-[#ffffff] font-extrabold text-center mb-6">
            <span className="font-margarine ">Hi</span> /{" "}
            <span className="font-noto-jp">こんにちは</span>
          </h1>
    </div>
  )
}
