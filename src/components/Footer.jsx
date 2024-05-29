import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 '>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
            <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore sit, officia maiores placeat eaque non cumque ab asperiores, pariatur dolor commodi aliquam expedita aliquid dignissimos minus corporis minima omnis.</p>
            <div className='flex justify-between md:w-[75%] my-6'>
                <FaFacebookSquare size={30} className='hover:text-[#00df9a] transition ease-in-out duration-300 hover:scale-110'/>
                <FaInstagram size={30} className='hover:text-[#00df9a] transition ease-in-out duration-300 hover:scale-110'/>
                <FaTwitterSquare size={30} className='hover:text-[#00df9a] transition ease-in-out duration-300 hover:scale-110'/>
                <FaGithubSquare size={30} className='hover:text-[#00df9a] transition ease-in-out duration-300 hover:scale-110'/>
                <FaDribbbleSquare size={30} className='hover:text-[#00df9a] transition ease-in-out duration-300 hover:scale-110'/>
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
            <div>
                <h6 className='font-medium text-gray-400'>Solutions</h6>
                <ul>
                    <li className='py-2 text-sm hover:text-[#00df9a] transition ease-in-out duration-300 cursor-pointer'>Analytics</li>
                    <li className='py-2 text-sm hover:text-[#00df9a] transition ease-in-out duration-300 cursor-pointer'>Marketing</li>
                    <li className='py-2 text-sm hover:text-[#00df9a] transition ease-in-out duration-300 cursor-pointer'>Commerce</li>
                    <li className='py-2 text-sm hover:text-[#00df9a] transition ease-in-out duration-300 cursor-pointer'>Insights</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Support</h6>
                <ul>
                    <li className='py-2 text-sm hover:text-[#00df9a] transition ease-in-out duration-300 cursor-pointer'>Pricing</li>
                    <li className='py-2 text-sm hover:text-[#00df9a] transition ease-in-out duration-300 cursor-pointer'>Documentation</li>
                    <li className='py-2 text-sm hover:text-[#00df9a] transition ease-in-out duration-300 cursor-pointer'>Guides</li>
                    <li className='py-2 text-sm hover:text-[#00df9a] transition ease-in-out duration-300 cursor-pointer'>API Status</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Company</h6>
                <ul>
                    <li className='py-2 text-sm hover:text-[#00df9a] transition ease-in-out duration-300 cursor-pointer'>About</li>
                    <li className='py-2 text-sm hover:text-[#00df9a] transition ease-in-out duration-300 cursor-pointer'>Blog</li>
                    <li className='py-2 text-sm hover:text-[#00df9a] transition ease-in-out duration-300 cursor-pointer'>Jobs</li>
                    <li className='py-2 text-sm hover:text-[#00df9a] transition ease-in-out duration-300 cursor-pointer'>Press</li>
                    <li className='py-2 text-sm hover:text-[#00df9a] transition ease-in-out duration-300 cursor-pointer'>Careers</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400'>Legal</h6>
                <ul>
                    <li className='py-2 text-sm hover:text-[#00df9a] transition ease-in-out duration-300 cursor-pointer'>Claim</li>
                    <li className='py-2 text-sm hover:text-[#00df9a] transition ease-in-out duration-300 cursor-pointer'>Policy</li>
                    <li className='py-2 text-sm hover:text-[#00df9a] transition ease-in-out duration-300 cursor-pointer'>Terms</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer
