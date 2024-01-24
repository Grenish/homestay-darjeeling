import React from "react";
import * as image from "../assets/index";

const Navbar = () => {
  return (
    <div className="">
      <header className="w-full p-4">
        <nav className=" w-[85%] m-auto flex justify-between items-center">
          <div className="">
            <img src={image.ADs} alt="" className="w-28" />
          </div>
          <div className="">
            <ul className="flex gap-10">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About Us</li>
              <li className="cursor-pointer">Gallery</li>
              <li className="cursor-pointer">Services</li>
            </ul>
          </div>
          <div className="">
            <button className="bg-cool-500 p-2 rounded-xl px-5 text-primary">
              Book Now
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
