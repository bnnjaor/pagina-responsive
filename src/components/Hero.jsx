import React from 'react'
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center '>
            
            <p className='text-[#00df9a] font-bold p-2 '>GROWING WITH DATA ANALYTICS</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with data.</h1>
            
            <div className='flex justify-center items-center    '>
                <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>Fats, flexible financing for</p>
                <ReactTyped className='md:text-4xl sm:text-3xl text-xl font-bold pl-2 md:pl-4' strings={['BTB','BTC', 'SASS']} typeSpeed={120} backSpeed={140} loop/>
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS plataforms.</p>
            <button className='bg-[#00df9a] rounded-md w-[200px] font-medium my-6 mx-auto py-3 text-black hover:bg-white hover:text-[#00df9a] transition-all ease-in-out duration-300'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero
