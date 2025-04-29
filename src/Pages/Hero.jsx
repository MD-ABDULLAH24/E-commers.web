import React from "react";
import SideBar from "./Sidebar";
import hero from "../assets/hero.png"
import { FaApple,FaArrowRight  } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "./hero.css";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';



const Hero = () => {

  return (
    <>
    
    <div className="border-t-[1px] border-[#00000033]">
        <div className="container grid grid-cols-1 md:grid-cols-5">
          <div className=" md:pt-[40px] border-r-[.5px] border-[#00000033]">
            <SideBar />
          </div>
          <div className="col-span-4 p-3 lg:p-5">
          <Swiper
        pagination={{
          dynamicBullets: true,
          clickable:true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><SlideItem discount={"10%"}/></SwiperSlide>
        <SwiperSlide><SlideItem discount={"20%"}/></SwiperSlide>
        <SwiperSlide><SlideItem discount={"30%"}/></SwiperSlide>
        <SwiperSlide><SlideItem discount={"40%"}/></SwiperSlide>
        <SwiperSlide><SlideItem discount={"50%"}/></SwiperSlide>
       
        </Swiper>      
          </div>
        </div>
      </div>
  
     
    </>
  );
};
     
function SlideItem({discount}) {
 

  return(
    <div className="bg-black text-white p-4">
    <div className="grid grid-cols-1 md:grid-cols-2">
       {/* left side text */}
       <div className="flex flex-col justify-center items-start p-6 lg:p-16  gap-6">
           <p className="flex items-center gap-[14px]">
               <span><FaApple className="text-3xl lg:text-5xl"/></span>
               iPhone 14 Series</p>
           <h1 className="text-4xl md:text-5xl">Up to {discount} off Voucher</h1>
           <div className="   ">
           <button className="border-b-[1px] flex items-center gap-2 mb-4 border-white">
           Shop Now
           <span>
               <FaArrowRight/>
           </span>
           </button>
           </div>
       </div>
       {/* Right Side Image  */}
       <div>
           <img src={hero} alt="" />
       </div>
   </div>
   {/* Dots Section */}
   <div className="flex justify-center items-center">
     {/* <ul className="gap-3 flex items-center">
       <li className="bg-[rgba(255,255,255,0.46)] w-3 h-3 rounded-full"></li>
       <li className="bg-[rgba(255,255,255,0.46)] w-3 h-3 rounded-full"></li>
       <li className="bg-[#DB4444] w-3 h-3 rounded-full border-2 border-white"></li>
       <li className="bg-[rgba(255,255,255,0.46)] w-3 h-3 rounded-full"></li>
       <li className="bg-[rgba(255,255,255,0.46)] w-3 h-3 rounded-full"></li>
       
      
     </ul> */}
   </div>
</div>
  );
           
}
             
   


  


export default Hero;
