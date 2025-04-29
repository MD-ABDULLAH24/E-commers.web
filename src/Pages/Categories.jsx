import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import phone from "../assets/phone.png"
import computer from "../assets/computer.png"
import smartWatch from "../assets/smartwatch.png"
import camera from "../assets/Category-Camera.png"
import headphone from "../assets/Category-Headphone.png"
import gaming from "../assets/Category-Gamepad.png"
import CategoryCard from './CategoryCard'

const Categories = () => {
  return (
    <section className='px-4 lg:px-0'>
      <div className='container '>
      <ul className="flex gap-4 items-center">
                  <li className="bg-[#DB4444] w-5 h-10 rounded-[4px]"></li>
                  <h4 className="text-[#DB4444]">Categories</h4>
                </ul>
        <div className='flex items-center justify-between md:my-[40px] my-5'>
            <h2 className='md:text-[36px] text-[24px] font-semibold'>Browse By Category</h2>
            <div className='flex gap-4'>
            <span className="md:w-[46px] md:h-[46px] w-[36px] h-[36px] bg-[#F5F5F5] rounded-full flex items-center justify-center cursor-pointer">
                 <FaArrowLeft />
                </span>
               <span className="md:w-[46px] md:h-[46px] w-[36px] h-[36px] bg-[#F5F5F5] rounded-full flex items-center justify-center cursor-pointer">
                <FaArrowRight />
             </span>
            </div>
        </div>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-7.5 pt-[60px] pb-[70px]'>
       <CategoryCard categoryImg={phone} category="phone"/>
        <CategoryCard categoryImg={computer} category="Computer"/>
        <CategoryCard categoryImg={smartWatch} category="SmartWatch"/>
        <CategoryCard categoryImg={camera} category="Camera" />
        <CategoryCard categoryImg={headphone} category="Headphone"/>
        <CategoryCard categoryImg={gaming} category="Gamepade"/>
       </div>
      </div>
    </section>
  )
}

export default Categories