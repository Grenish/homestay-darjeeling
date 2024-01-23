import React from "react";
import * as image from "../assets/index";

const Navbar = () => {
  return (
    <div>
      <header className="w-full p-4">
        <nav className=" w-[85%] m-auto flex justify-between items-center">
          <div className="">
            <img src={image.ADs} alt="" className="w-28" />
          </div>
          <div className="">
            <ul className="flex gap-10">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About Us</li>
              {/* <li>Rooms</li> */}
              <li className="cursor-pointer">Gallery</li>
            </ul>
          </div>
          <div className="">
            <button className="bg-indigo-500 p-2 rounded-xl px-5">Book Now</button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
