import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
function SideBar() {
  return (
    <div>
        <div className='w-[217px]  border-[#00000033] pr-4'>
                    <ul className='md:flex flex-col gap-5 hidden '>
                        <li className="flex items-center justify-between  leading-[24px] cursor-pointer">
                            <a>Woman’s Fashion</a>
                            <IoIosArrowForward />
                        </li>
                        <li className="flex items-center justify-between leading-[24px] cursor-pointer">
                            <a>Men’s Fashion</a>
                            <IoIosArrowForward />
                        </li>
                        <li className='leading-[24px] cursor-pointer'>
                            <a>Electronics</a>
                        </li>
                        <li className='leading-[24px] cursor-pointer'>
                            <a>Home & Lifestyle</a>
                        </li>
                        <li className='leading-[24px] cursor-pointer'>
                            <a>Medicine</a>
                        </li>
                        <li className='leading-[24px] cursor-pointer'>
                            <a>Sports & Outdoor</a>
                        </li>
                        <li className='leading-[24px] cursor-pointer'>
                            <a>Baby’s & Toys</a>
                        </li>
                        <li className='leading-[24px]cursor-pointer'>
                            <a>Health & Beauty</a>
                        </li>
                        <li className='leading-[24px]cursor-pointer'>
                            <a>Health & Beauty</a>
                        </li>
                    </ul>
                </div>
    </div>
  )
}

export default SideBar