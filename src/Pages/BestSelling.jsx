import React from "react";
import Card from "./Card";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import gucci from "../assets/gucci.png";
import { IoIosStar } from "react-icons/io";

const BestSelling = () => {
  return (
    <section className="px-4 lg:px-0">
      <div>
        <ul className="flex gap-4 items-center">
          <li className="bg-[#DB4444] w-5 h-10 rounded-[4px]"></li>
          <h4 className="text-[#DB4444]">This Month</h4>
        </ul>
        <div className="flex items-center justify-between my-[40px]">
          <h2 className="md:text-[36px] text-[26px] font-semibold">Browse By Category</h2>
          <div className="flex gap-4">
            <button className="lg:px-12 lg:py-4 px-6 py-3 rounded-[5px]  text-4 leading-6 text-white  bg-[#DB4444] ">
              view All
            </button>
          </div>
        </div>
        <div>
          <div className="mt-[60px]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              <div className="py-10  px-[35px] flex items-center justify-center bg-[#F5F5F5] relative">
                <div>
                  <img className="" src={gucci} alt="" />
                </div>
                <div className="">
                  <CiHeart className="text-[30px] font-bold absolute top-[17px] right-[20px]" />
                  <FaRegEye className="text-[27px] font-bold absolute top-[54px] right-[20px]" />
                </div>
              </div>
              <div></div>
            </div>
            <div className="md:mt-4 ">
              <h3 className="text-4 leading-6 font-[600] mb-2">
                The north coat
              </h3>
              <p className="gap-1 mb-2 text-red-600">
                $260{" "}
                <span className="text-gray-400 ml-3 line-through">$360</span>{" "}
              </p>
              <span className="gap-1 flex text-yellow-500 ">
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <IoIosStar />
                <span className="text-gray-500 text-sm ml-2">(67)</span>
              </span>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default BestSelling;
