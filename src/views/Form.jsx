import React from 'react'

import Hand from '../assets/img/hand.svg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const Form = () => {
    return (
        <div className='mb-10'>
            <span>
                <Navbar />
            </span>
            <div className='overflow-y-hidden overflow-hidden'>
                <h1 className='font-bebas text-9xl pt-44 '>I Would
                    <span className='text-red'> Love</span> to get in
                    <span className='text-purple'> touch</span>
                </h1>
                <img className='min-w-[105%] ml-[-2%]' src={Hand} alt="" />
            </div>
            <div>
                <form action="">
                    <div className='flex flex-col pt-10'>
                        <h1 className='text-left w-[80%]  mr-[10%] ml-[10%] pb-[15px] 
                        font-poppins-l text-4xl'>Name</h1>
                        <input className='w-[80%] mr-[10%] ml-[10%] h-14 rounded-lg bg-[#5A5A5A]' type="text" />
                    </div>
                    <div className='flex flex-col pt-10'>
                        <h1 className='text-left w-[80%]  mr-[10%] ml-[10%] pb-[15px] 
                        font-poppins-l text-4xl'>Phone</h1>
                        <input className='w-[80%] mr-[10%] ml-[10%] h-14 rounded-lg bg-[#5A5A5A]' type="text" />
                    </div>
                    <div className='flex flex-col pt-10'>
                        <h1 className='text-left w-[80%]  mr-[10%] ml-[10%] pb-[15px] 
                        font-poppins-l text-4xl'>Email</h1>
                        <input className='w-[80%] mr-[10%] ml-[10%] h-14 rounded-lg bg-[#5A5A5A]' type="text" />
                    </div>
                    <div className='flex flex-col pt-10'>
                        <h1 className='text-left w-[80%]  mr-[10%] ml-[10%] pb-[15px] 
                        font-poppins-l text-4xl'>Message</h1>
                        <textarea className='w-[80%] mr-[10%] ml-[10%] h-40 rounded-lg
                        resize-none	bg-[#5A5A5A]' type="text" />
                    </div>
                </form>
                <div className='pt-14'>
                    <button className='rounded-lg bg-purple font-bebas text-5xl w-48 h-24'>
                        Send
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Form