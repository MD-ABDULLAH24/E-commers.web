import React from 'react'

const CategoryCard = ({category, categoryImg}) => {
  return (
    <div className='hover:bg-[#DB4444] transition-all group border border-[rgba(0,0,0,0.3)] rounded-[4px] h-[145px] flex justify-center items-center'>
    <div className='flex flex-col justify-center items-center gap-3'>
     <span className='text-[35px] group-hover:text-[#FAFAFA]'>
       <img src={categoryImg} alt="" />
     </span>
     <p className='group-hover:text-[#FAFAFA]'>{category}</p>
    </div>
 </div>
  )
}

export default CategoryCard