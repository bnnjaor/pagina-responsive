import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w[1240px] mx-auto grid md:grid-cols-2 '>
            <img className=' w-[500px] mx-auto my-4 ' src={Laptop} alt="" />
            <div className=' flex flex-col justify-center '>
                <p className=' text-[#00df9a] font-bold '>DATA ANALYTICS DASHBOARD</p>
                <h1 className=' md:text-4xl sm:text-3xl text-2xl font-bold py-2 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem nemo quia illum illo officia voluptatibus, dolorem doloremque sequi libero est rerum adipisci labore accusamus impedit iure sint molestias distinctio aspernatur!</h1>
                <button className='text-[#00df9a] rounded-md w-[200px] font-medium my-6 mx-auto md:mx-0 py-3 bg-black hover:bg-[#00df9a] hover:text-black duration-300 transition-all ease-in-out'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Analytics
