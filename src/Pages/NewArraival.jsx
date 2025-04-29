import React from 'react'
import playStation from "../assets/playstation.png"
import spekars from "../assets/spekars.png"
import women from "../assets/women.png"
import perfume from "../assets/perfume.png"

const NewArraival = () => {
  return (
    <section className="mt-[71px] pb-[140px]">
         <ul className="flex gap-4 items-center">
        <li className="bg-[#DB4444] w-5 h-10 rounded-[4px]"></li>
        <h4 className="text-[#DB4444]">Featured</h4>
      </ul>
      <div className='mt-5'>
          <h2 className="text-[36px] leading-12 font-semibold">New Arrival</h2>
        </div>
        {/* new arrival items */}
        <div className='grid grid-cols-1 lg:grid-cols-2 mt-[60px] gap-[25px]'>
        <div className="bg-black mr-2 px-[70px] lg:px-[30px] pt-[89px]  relative">
          <img className="" src={playStation} alt="" />
          <div className="lg:max-w-[242px] absolute bottom-8 left-8">
            <h2 className="text-white text-[16px] lg:text-[24px] font-bold mb-4">
              PlayStation 5
            </h2>
            <p className="text-white mb-4 ">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="text-white text-">Shop Now</button>
          </div>
        </div>
            <div>
                <div>
                    
                </div>
                <div></div>
            </div>
        </div>
    </section>
  )
}

export default NewArraival