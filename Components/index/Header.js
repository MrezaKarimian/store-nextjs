import React from "react";
import Slider from "../Common/Slider";
import Image from 'next/image'
import background from '../../public/background2.png'
function Header() {
  return (
    <>
      <div className="h-[calc(100vh-80px)]">
        <Slider />
        <div className="absolute h-full w-1/4 top-0 left-0 -z-50 bg-gray-900">
          <Image layout="fill" src={background} alt="background" className="relative"/>
        </div>
        <div
          className=" bg-gray-700 absolute -top-56 right-10 w-72 h-72 rotate-45 blur-xl
          -z-50"
        />
        <div
          className=" bg-gray-700 absolute right-10 w-72 h-72 rotate-45 blur-xl
          -z-50"
        />

      </div>
    </>
  );
}

export default Header;
