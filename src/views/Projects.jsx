import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap';

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Greek from '../assets/img/greek.png'

const Projects = () => {
    const projects = gsap.timeline();
    const projectsH1 = useRef(null);
    const projectsNav = useRef(null);
    const projectsBody = useRef(null);

    useEffect(() => {
        projects.from(projectsNav.current, {
            duration: .2,
            x: -100,
            opacity: 0,
        })
        projects.from(projectsH1.current, {
            duration: .6,
            skewX: 10,
            x: -100,
            opacity: 0,
        })
        projects.from(projectsBody.current, {
            duration: .5,
            y: -200,
            opacity: 0,
        })
    }, [])


    return (
        <div>
            <span ref={projectsNav}>
                <Navbar />
            </span>
            <div ref={projectsH1} className='mt-20 text-center w-[95%] mr-[2.5%] ml-[2.5%]'>
                <h1 className='text-8xl font-bebas'>All My <span className='text-transparent bg-clip-text  
                                bg-gradient-to-r from-cyan via-purple to-red'>Work</span></h1>
                <h1 className='font-poppins-r text-xl pt-5 w-[90%] text-center
                mr-[5%] ml-[5%]'>
                    Below you will find a list of all of my work,
                    this section will be updated soon, stay tuned!
                </h1>
            </div>
            <div ref={projectsBody} className=' grid grid-cols-1 items-center justify-center 
            text-center custom:grid-cols-2 w-[95%] mr-[2.5%] ml-[2.5%] mt-24'>
                <div className='rounded-xl bg-dark w-[90%]  mr-[5%] ml-[5%] h-[300px] 
                custom:w-[70%] custom:ml-[20%] custom:mr-[10%] custom:h-[300px]
                mb-20 custom:mb-0'>
                    <img style={{ background: "radial-gradient(transparent, black)," }}
                        className='w-full object-cover h-full rounded-xl' src={Greek} alt="" />
                </div>
                <div className='rounded-xl w-[90%] mr-[5%] ml-[5%] bg-dark custom:w-[70%] 
                custom:ml-[10%] custom:mr-[20%] h-[300px]'>
                    <img className='w-full object-cover h-full rounded-xl' src={Greek} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 items-center justify-center 
            text-center custom:grid-cols-2 w-[95%] mr-[2.5%] ml-[2.5%] mt-20'>
                <div className='bg-dark w-[90%]  mr-[5%] ml-[5%] h-[300px] 
                custom:w-[70%] custom:ml-[20%] custom:mr-[10%] custom:h-[300px]
                mb-20 custom:mb-0 rounded-xl'>
                    <img className='w-full object-cover h-full rounded-xl' src={Greek} alt="" />
                </div>
                <div className='rounded-xl  w-[90%]  mr-[5%] ml-[5%] bg-dark custom:w-[70%] 
                custom:ml-[10%] custom:mr-[20%] h-[300px]'>
                    <div className=' relative object-cover h-full shadow-md	'>
                        <img className='w-full object-cover h-full rounded-xl bg shadow-inner' src={Greek} alt="" />
                        <h1 style={{ textShadow: '1px 1px black' }}
                            className='absolute bottom-4 left-0 text-center mx-auto right-0 font-poppins-l text-xl'>Mythology</h1>
                    </div>
                </div>
            </div>
            <span className='text-center'>
                <Footer />
            </span>
        </div>
    )
}

export default Projects