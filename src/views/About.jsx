import React, { useRef, useEffect, useState } from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import gsap from 'gsap';



const About = () => {
    const about = gsap.timeline({ repeat: 0 });
    const aboutH1 = useRef(null);
    const aboutNav = useRef(null);
    const aboutBody = useRef(null);

    useEffect(() => {
        about.from(aboutNav.current, {
            duration: .2,
            x: -100,
            opacity: 0,
        })
        about.from(aboutH1.current, {
            duration: .6,
            skewX: 10,
            x: -100,
            opacity: 0,
        })
        about.from(aboutBody.current, {
            duration: .5,
            y: -200,
            opacity: 0,
        })
    }, [])

    return (
        <div>
            <span ref={aboutNav}>
                <Navbar />
            </span>
            <div>
                <h1 ref={aboutH1} className='pt-10 text-center w-[90%] ml-[5%] mr-[5%]
                text-8xl font-bebas'>
                    Just A little Bit <br /> <span className='text-transparent bg-clip-text  
                 bg-gradient-to-r from-cyan via-purple to-red'>About Me</span>
                </h1>
                <div ref={aboutBody} className='grid grid-cols-1 custom:grid-cols-2 pt-20'>
                    <div className='w-[90%] ml-[5%] mr-[5%] text-left font-poppins-r text-xl'>
                        <h1 className='w-[70%] ml-[15%] mr-[15%] '>Hey there, my name is Ahmed Hassan, an Egyptian 24 years old CS Graduate.
                            I graduated from MIU in the year 2021, and since then i worked on many freelance
                            projects, and interned in more than one company. </h1>
                        <h1 className='w-[70%] ml-[15%] mr-[15%] pt-10' >
                            I discovered my love for design and creative development early on even
                            before the colleage days, and kept on devolping these traits
                            and taking as much courses and tutorials as i can to further develop myself.
                        </h1>
                    </div>
                    <div>
                    </div>
                </div>
                <h1 className='text-center text-6xl font-bebas pt-20'>Some Stuff i am  <span
                    className='text-transparent bg-clip-text  
                bg-gradient-to-r from-cyan via-purple to-red'> passionate about </span></h1>
                <div className='w-[90%] ml-[5%] mr-[5%] pt-20'>
                    <h1 className=' w-[80%] ml-[10%] mr-[10%] font-bebas text-red text-5xl pb-5'>Programming</h1>
                    <h1 className='w-[80%] ml-[10%] mr-[10%] font-poppins-r text-xl '>Thakfully enough,
                        i am someone that actully enjoys what i do, i actually love
                        opening my IDE, typing some code, and watching the magic happen on the
                        screen.</h1>
                </div>
                <div className='w-[90%] ml-[5%] mr-[5%] pt-20'>
                    <h1 className=' w-[80%] ml-[10%] mr-[10%] font-bebas text-red text-5xl pb-5'>Programming</h1>
                    <h1 className='w-[80%] ml-[10%] mr-[10%] font-poppins-r text-xl '>Thakfully enough,
                        i am someone that actully enjoys what i do, i actually love
                        opening my IDE, typing some code, and watching the magic happen on the
                        screen.</h1>
                </div>
                <div className='w-[90%] ml-[5%] mr-[5%] pt-20'>
                    <h1 className=' w-[80%] ml-[10%] mr-[10%] font-bebas text-red text-5xl pb-5'>Programming</h1>
                    <h1 className='w-[80%] ml-[10%] mr-[10%] font-poppins-r text-xl '>Thakfully enough,
                        i am someone that actully enjoys what i do, i actually love
                        opening my IDE, typing some code, and watching the magic happen on the
                        screen.</h1>
                </div>
                <div className='w-[90%] ml-[5%] mr-[5%] pt-20'>
                    <h1 className=' w-[80%] ml-[10%] mr-[10%] font-bebas text-red text-5xl pb-5'>Programming</h1>
                    <h1 className='w-[80%] ml-[10%] mr-[10%] font-poppins-r text-xl '>Thakfully enough,
                        i am someone that actully enjoys what i do, i actually love
                        opening my IDE, typing some code, and watching the magic happen on the
                        screen.</h1>
                </div>
            </div>
            <span className='text-center'>
                <Footer />
            </span>
        </div>
    )
}

export default About