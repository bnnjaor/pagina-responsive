import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {

    const card = [
        {
            img: Single,
            title: 'Single User',
            price: '$149',
            info1: '500 GB Storage',
            info2: '1 Granted User',
            info3: 'Send up to 2GB',
        },
        {
            img: Double,
            title: 'PartnerShip',
            price: '$199',
            info1: '1 TB Storage',
            info2: '3 Users Allowed',
            info3: 'Send up to 10GB',
        },
        {
            img: Triple,
            title: 'Grup Account',
            price: '$299',
            info1: '5 TB Storage',
            info2: '10 Users Allowed',
            info3: 'Send up to 20GB',
        }
    ]

  return (
    <div className='w-full py-[10rem] px-4 bg-white '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            {card.map((card)=>(
                <div className='w-full shadow-xl flex flex-col items-center justify-center p-4 my-8 rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto mt-[-3rem] bg-white  ' src={card.img} alt="" />
                    <h2 className='text-2xl font-bold text-center py-8'>{card.title}</h2>
                    <p className='text-center text-4xl font-bold'>{card.price}</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>{card.info1}</p>
                        <p className='py-2 border-b mx-8'>{card.info2}</p>
                        <p className='py-2 border-b mx-8'>{card.info3}</p>
                    </div>
                    <button className='bg-[#00df9a] rounded-full w-[200px] font-medium my-6 mx-auto py-3 text-black hover:bg-black hover:text-[#00df9a] transition-all ease-in-out duration-300'>Start Trial</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cards
