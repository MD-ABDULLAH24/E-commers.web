import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [bar, setBar] = useState(false);
  const barToggle = ()=>{

    setBar((prevBar)=>!prevBar)
  }
  
  return (
    <div className="border-b-[1px] border-[#00000033] p-6 md:p-0  top-0 z-[9999]  w-full">
      <div className="bg-white ">
        <div className=" flex container justify-between md:py-10 py-5 gap-[20px]  ">
          <h1 className="text-2xl font-bold text-[#000000]">Exclusive</h1>
          <ul className="md:flex hidden gap-12 ">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Sign Up</li>
          </ul>
          <div className="flex gap-6 items-center md:justify-end">
            <span className="relative">
              <input
                type="text"
                placeholder="What are you looking for?"
                className="pl-4 pr-10 py-2 rounded-md bg-gray-100 text-gray-700 hidden md:block "
              />
              <CiSearch className="absolute right-[12px] top-[11px] hidden md:block" />
            </span>
            <span className="flex gap-4">
              <button  className="relative">
                <CiHeart className="hidden md:block" />
              </button>
              <button  className="relative">
                <IoCartOutline className="hidden md:block"/>
              </button>
            </span>
          </div>
          <div className="items-center border-[2px] block md:hidden  text-center  rounded-full md:border-none  py-2 w-[48px] h-[44px]">
              <button onClick={barToggle}>
                {
                  bar? (<FaBars className="block md:hidden text-[24px] font-bold"/>): (<IoClose className="font-bold text-[18px] block md:hidden" />)
                }
              </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
