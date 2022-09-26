import React, { useRef, useEffect } from 'react'

import '../index.css'
import Hand from '../assets/img/hand.svg'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Send from '../assets/img/send.svg'
import gsap from 'gsap';


const Form = () => {
    const contactH1 = useRef(null);
    const contactImg = useRef(null);
    const contactNav = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    useEffect(() => {
        const contact = gsap.timeline();
        contact.from(contactNav.current, {
            duration: .2,
            x: -100,
            opacity: 0,
        })
        contact.from(contactH1.current, {
            duration: .6,
            skewX: 10,
            x: -100,
            opacity: 0,
        })
        contact.from(contactImg.current, {
            duration: .5,
            y: -200,
            opacity: 0,
        })

    }, [])
    return (
        <div className='mb-10 '>
            < span ref={contactNav}>
                <Navbar />
            </span >
            <div ref={contactH1} className='overflow-y-hidden overflow-hidden w-[95%] ml-[2.5%] mr-[2.5%]'>
                <h1 className='font-bebas text-6xl pt-20 pb-7 custom:text-9xl text-center'>I Would
                    <span className='text-red'> Love</span> to get in
                    <span className='text-purple'> touch</span>
                </h1>
            </div>
            <img ref={contactImg} className='min-w-[105%] ml-[-2%]' src={Hand} alt="" />
            <div className='mb-48'>
                <form action="">
                    <div className='flex flex-col pt-10'>
                        <h1 className='text-left w-[80%]  mr-[10%] ml-[10%] pb-[15px] 
                        font-poppins-l text-2xl'>Name</h1>
                        <input className='w-[80%] mr-[10%] ml-[10%] h-14 rounded-lg bg-[#5A5A5A]' type="text" />
                    </div>
                    <div className='flex flex-col pt-10'>
                        <h1 className='text-left w-[80%]  mr-[10%] ml-[10%] pb-[15px] 
                        font-poppins-l text-2xl'>Phone</h1>
                        <input className='w-[80%] mr-[10%] ml-[10%] h-14 rounded-lg bg-[#5A5A5A]' type="text" />
                    </div>
                    <div className='flex flex-col pt-10'>
                        <h1 className='text-left w-[80%]  mr-[10%] ml-[10%] pb-[15px] 
                        font-poppins-l text-2xl'>Email</h1>
                        <input className='w-[80%] mr-[10%] ml-[10%] h-14 rounded-lg bg-[#5A5A5A]' type="text" />
                    </div>
                    <div className='flex flex-col pt-10'>
                        <h1 className='text-left w-[80%]  mr-[10%] ml-[10%] pb-[15px] 
                        font-poppins-l text-2xl'>Message</h1>
                        <textarea className='w-[80%] mr-[10%] ml-[10%] h-40 rounded-lg
                        resize-none	bg-[#5A5A5A]' type="text" />
                    </div>
                </form>
                <div className='pt-14 flex justify-center items-center'>
                    <button className='rounded-lg bg-purple font-bebas text-3xl w-40 h-14'>
                        <img src={Send} className="inline w-7" alt="" /> Send
                    </button>
                </div>
            </div>
            <span className=' text-center'>
                <Footer />
            </span>
        </div >
    )
}

export default Form