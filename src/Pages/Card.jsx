import React from 'react'
import { FaEye, FaRegHeart } from 'react-icons/fa';
import keyboard from "../assets/keyboard.png"
import computer from "../assets/computer.png"
import camera from "../assets/camera.png"
import { IoIosStar } from 'react-icons/io';

const Card = () => {
    const products = [
        {
          id: 1,
          name: "HAVIT HV-G92 Gamepad",
          price: "$120",
          oldPrice: "$160",
          discount: "-40%",
          reviews: 88,
          img: Gamepad,
        },
        {
          id: 2,
          name: "AK-900 Wired Keyboard",
          price: "$960",
          oldPrice: "$1160",
          discount: "-35%",
          reviews: 75,
          img: computer,
        },
        {
          id: 3,
          name: "IPS LCD Gaming Monitor",
          price: "$370",
          oldPrice: "$400",
          discount: "-30%",
          reviews: 99,
          img: camera,
        },
        {
          id: 4,
          name: "S-Series Comfort Chair",
          price: "$375",
          oldPrice: "$400",
          discount: "-25%",
          reviews: 99,
          img: camera,
        },
      ];
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6'>
       {products.map((product)=>(
        <div key={product.id}>
           <div className='bg-gray-100 p-4 rounded-lg h-[250px] cart relative'>
           <button className='addToCart'>
           Add to Cart
           </button>
           <span className=' bg-red-500 text-white text-xs px-2 py-1 rounded'>
            30%
           </span>
            {/* Wishlist & View Buttons */}
            <div className=' absolute top-3 right-3 flex flex-col space-y-2'>
                <button className='bg-white p-1 rounded-full shadow cursor-pointer'>
                <FaRegHeart />
                </button>
                <button className='bg-white p-1 rounded-full shadow cursor-pointer'>
                <FaEye />
                </button>
            </div>
            {/* image */}
            <img src={keyboard} alt="" className='pt-[35px] mx-auto' />
            {/* product info */}
            <h3 className='mt-3 text-lg font-semibold'>keyboard</h3>
            <p className="text-red-500 text-lg font-bold">150 <span className="text-gray-400 line-through">200</span></p>

            {/* star rating */}
            <div className='flex items-center text-yellow-500'>
            <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar /> <IoIosStar />
            <span className='text-gray-500 text-sm ml-2'>(244)</span>
            </div>
        </div>
        </div>
       ))}

    </div>
    </div>
  )
}

export default Card