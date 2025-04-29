import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import remote from "../assets/remote.png"
import keyboard from "../assets/keyboard.png"
import monitor from "../assets/monitor.png"
import chair from "../assets/chair.png"
import { FaRegEye } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { IoIosStar } from "react-icons/io";

const FlashSale = () => {

  
    const data = [
      {id:1,
        img:remote,
        name: "remote",
        title: "HAVIT HV-G92 Gamepad",
        price:"$120",
        discount:"-40%"
      },
      {id:2,
        img:keyboard,
        name: "remote",
        title: "AK-900 Wired Keyboard",
        price:"$960",
        discount:"-35%"
      },
      {id:3,
        img:monitor,
        name: "remote",
        title: "HAVIT HV-G92 Gamepad",
        price:"$120",
        discount:"-50%"
      },
      {id:4,
        img:chair,
        name: "remote",
        title: "HAVIT HV-G92 Gamepad",
        price:"$120",
        discount:"-20%"
        
      }
    ]
  
  
  return (
    <>
      <section className="my-[80px] md:my-[150px]">
             <div className='container mx-auto px-4 lg:px-8'>
                <ul className="flex gap-4 items-center">
                  <li className="bg-[#DB4444] w-5 h-10 rounded-[4px]"></li>
                  <h4 className="text-[#DB4444]">Today’s</h4>
                </ul>
                 <div className="mt-[26px] mb-10 gap-22 grid grid-cols-2 md:grid-cols-[auto_auto_1fr]">
                          <div>
                            <h2 className="text-[24px] md:text-[36px]  font-semibold">Flash Sale</h2>
                          </div>
                          <div className="hidden md:block">
                            <ul className="flex gap-4 text-center">
                              <li>
                                <p className="text-[12px] font-bold">Days</p>
                                <p className="text-[32px] font-bold">03</p>
                              </li>
                              <span className="text-4xl mt-5 text-red-600">:</span>
                
                              <li>
                                <p className="text-[12px] font-bold">Hours</p>
                                <p className="text-[32px] font-bold">03</p>
                              </li>
                              <span className="text-4xl mt-5 text-red-600">:</span>
                              <li>
                                <p className="text-[12px] font-bold">Minutes</p>
                                <p className="text-[32px] font-bold">19</p>
                              </li>
                              <span className="text-4xl mt-5 text-red-600">:</span>
                              <li>
                                <p className="text-[12px] font-bold">Seconds</p>
                                <p className="text-[32px] font-bold">56</p>
                              </li>
                            </ul>
                          </div>
                
                          <div className="flex justify-end gap-4">
                            <span className="w-[36px] h-[36px] md:w-[46px] md:h-[46px] bg-[#F5F5F5] rounded-full flex items-center justify-center cursor-pointer">
                              <FaArrowLeft />
                            </span>
                            <span className="w-[36px] h-[36px] md:w-[46px] md:h-[46px] bg-[#F5F5F5] rounded-full flex items-center justify-center cursor-pointer">
                              <FaArrowRight />
                            </span>
                          </div>
                        </div>
                         {/* card item */}
                <div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    <div className='py-10  px-[35px] flex items-center justify-center bg-[#F5F5F5] relative'>
                    <div>
                    <img className="" src={remote} alt="" />
                    </div>
                       <div className="">
                       <CiHeart className="text-[30px] font-bold absolute top-[17px] right-[20px]"/>
                       <FaRegEye className="text-[27px] font-bold absolute top-[54px] right-[20px]"/>
                       </div>
                       <h4 className="left-3 w-[55px] h-[26px] text-white absolute top-3 bg-[#DB4444] rounded-[10px] text-[16px] text-center ">-37%</h4>
                    </div>
                    <div>
                     
                    </div>
                  </div>
                       <div>
                       <h3 className="text-4 leading-6 font-[600] mb-2">HAVIT HV-G92 Gamepad</h3>
                      <p className="mr-3 mb-2 text-red-600">$120 <span className="text-gray-400 ml-3 line-through">$160</span></p>
                      <span className="gap-1 flex text-yellow-500">
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <IoIosStar/>
                        <span className='text-gray-500 text-sm ml-2'>
                           (67)
                         </span>
                      </span>
                       </div>
                </div>
               <div className="flex justify-center items-center pt-[51px]">
               <button className="px-12 py-4 bg-[#DB4444] text-[16px] leading-[24px]  text-white">
                View All Products
                </button>
               </div>
                        
                </div>
      </section>
    
    </>
  );
};

export default FlashSale;
