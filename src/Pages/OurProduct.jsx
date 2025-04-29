import React from 'react'
import Card from './Card'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const OurProduct = () => {
  return (
    <section className="container pt-[70px] pb-[168px]">
      <div className="flex justify-between items-end">
       <h2>Explore Our Products</h2>
      <div className='flex gap-2'>
      <FaArrowLeft />
      <FaArrowRight />
      </div>
      </div>
      <Card />
      <Card />
      <span className="pt-[60px] flex justify-center">
       
      </span>
    </section>
  )
}

export default OurProduct