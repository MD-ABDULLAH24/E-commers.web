import React from "react";
import musicbox from "../assets/JBL_BOOMBOX.png";
import blurImg from "../assets/blur_img.png";

const MusicExperiance = () => {
  return (
    <section className="my-24">
      <div className="container mx-auto px-4 lg:px-8 bg-black py-14 text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* left side */}
          <div className="h-full flex flex-col text-center md:text-start justify-center items-center md:items-start gap-5 md:gap-8">
            <p className="text-green-500">Categories</p>
            <p className="text-3xl md:text-4xl lg:text-6xl font-bold">
              Enhance Your Music Experience
            </p>
            <div className="flex justify-start items-start gap-5 text-black">
              <div className="h-16 w-16 md:h-20 md:w-20 flex flex-col bg-white rounded-full justify-center items-center gap-1 p-3">
                <p className="text-md font-semibold">23</p>
                <p className="text-sm">Hours</p>
              </div>
              <div className="h-18 w-18 md:h-20 md:w-20 flex flex-col bg-white rounded-full justify-center items-center gap-1 p-3">
                <p className="text-md font-semibold">05</p>
                <p className="text-sm">Days</p>
              </div>
              <div className="h-18 w-18 md:h-20 md:w-20 flex flex-col bg-white rounded-full justify-center items-center gap-1 p-3">
                <p className="text-md font-semibold">59</p>
                <p className="text-sm">Minutes</p>
              </div>
              <div className="h-18 w-18 md:h-20 md:w-20 flex flex-col bg-white rounded-full justify-center items-center gap-1 p-3">
                <p className="text-md font-semibold">35</p>
                <p className="text-sm">Seconds</p>
              </div>
            </div>
             {/* button */}
          <div className="flex justify-center items-center my-8 lg:my-12">
            <button className="bg-[#00FF66] py-4 px-12 text-black rounded-[5px]">
                Buy Now
            </button>
          </div>
          </div>
          {/* Right Side */}
          
          <div>
            <img className="w-full p-10 md:p-8" src={musicbox} alt="" />
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default MusicExperiance;
