import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3 '>
            <div className='lg:col-span-2 my-4'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want tips & tricks to optimize your flow?</h1>
                <p>Sign up to our newletter and stay up to date.</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type="email" placeholder='Enter email' />
                    <button className='bg-[#00df9a] rounded-md w-[200px] font-medium  ml-4 my-6 mx-auto py-3 text-black hover:bg-white hover:text-[#00df9a] transition-all ease-in-out duration-300'>Notify Me</button>
                </div>
                <p>We care bout the protection of your data. Read our <span className='text-[#00df9a] underline cursor-pointer hover:text-[#088f64] transition '>Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter
