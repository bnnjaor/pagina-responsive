import React, {useState} from 'react'
import {AiOutlineClose,AiOutlineMenu } from 'react-icons/ai'

const NavBar = () => {

    const [nav,setNav]=useState(false)

    const handleNav =()=>{
        setNav(!nav)
    }

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
        
        
        <ul className='lg:flex hidden uppercase '>
            <li className='p-4 hover:text-[#00df9a] transition ease-in-out duration-300'><a href="#">Home</a></li>
            <li className='p-4 hover:text-[#00df9a] transition ease-in-out duration-300'><a href="#">Company</a></li>
            <li className='p-4 hover:text-[#00df9a] transition ease-in-out duration-300'><a href="#">Resources</a></li>
            <li className='p-4 hover:text-[#00df9a] transition ease-in-out duration-300'><a href="#">About</a></li>
            <li className='p-4 hover:text-[#00df9a] transition ease-in-out duration-300'><a href="#">Contact</a></li>
        </ul>
        <div onClick={handleNav} className='block lg:hidden'>
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            
        </div>
        <div className={nav ? `fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500` : `fixed left-[-100%] `}>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
            
            <ul className='pt-24 uppercase p-4 '>
                <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] transition ease-in-out duration-300'><a href="#">Home</a></li>
                <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] transition ease-in-out duration-300'><a href="#">Compoany</a></li>
                <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] transition ease-in-out duration-300'><a href="#">Resources</a></li>
                <li className='p-4 border-b border-gray-600 hover:text-[#00df9a] transition ease-in-out duration-300'><a href="#">About</a></li>
                <li className='p-4 hover:text-[#00df9a] transition ease-in-out duration-300'><a href="#">Contact</a></li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar

