import React from 'react'
import Navbar from './Pages/Navbar'
import Hero from './Pages/Hero'
import FlashSale from './Pages/FlashSale'
import Categories from './Pages/Categories'
import BestSelling from './Pages/BestSelling'
import MusicExperiance from './Pages/MusicExperiance'
import NewArraival from './Pages/NewArraival'
import OurProduct from './Pages/OurProduct'



const App = () => {
  return (
    <div className=''>
        
        <div className='container mx-auto'>
            
            <Navbar/>
            <Hero/>
            <FlashSale/>
            <Categories/>
            <BestSelling/>
            <MusicExperiance/>
            <OurProduct/>
            <NewArraival/>
        </div>
    </div>
  )
}

export default App