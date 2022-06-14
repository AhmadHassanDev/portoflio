import React from 'react'
import ArrowAlt from '../assets/img/arrowAlt.svg'

const FormCTA = () => {
    return (
        <div className='pl-4 bg-lightDark mt-1'>
            <h1 className='ml-[4%] mt-[10%] pb-[5%] pt-20  custom:pb-[2%] text-left text-transparent bg-clip-text  
        bg-gradient-to-r from-cyan via-purple to-red font-bebas text-7xl custom:text-9xl'>Like what you see?</h1>
            <div className='w-full flex justify-between pb-20'>
                <div className='flex w-full'>
                    <h1 className='inline ml-[5%] mt-[2%] custom:mt-0 text-left font-bebas custom:text-8xl text-4xl'>Say Hello
                        <span className='text-4xl custom:text-9xl'> 👋 </span>
                    </h1>
                </div>
                <img className='w-14 mr-[5%] custom:w-24 cursor-pointer ' src={ArrowAlt} alt="" />
            </div>
        </div>
    )
}

export default FormCTA