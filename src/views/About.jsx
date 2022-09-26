import React, { useRef, useEffect, useState } from 'react'

import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import gsap from 'gsap';
import Grad from '../assets/img/grad.svg'
import OwlBooks from '../components/OwlBooks'

const About = () => {
    const about = gsap.timeline({ repeat: 0 });
    const aboutH1 = useRef(null);
    const aboutNav = useRef(null);
    const aboutBody = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

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
                <div className='pt-14 flex justify-center items-center'>
                    <button className='rounded-lg bg-purple font-bebas text-3xl w-40 h-14'>
                        <img src={Grad} className="inline w-7" alt="" /> CV
                    </button>
                </div>
                <h1 className='text-center text-6xl font-bebas pt-20'>Some Stuff i am  <span
                    className='text-transparent bg-clip-text  
                bg-gradient-to-r from-cyan via-purple to-red'> passionate about </span></h1>
                <div className='w-[90%] ml-[5%] mr-[5%] pt-20'>
                    <h1 className=' w-[80%] ml-[10%] mr-[10%] font-bebas text-red text-5xl pb-5'>Programming
                        <span className='custom:text-5xl text-3xl'> 💻</span></h1>
                    <h1 className='w-[80%] ml-[10%] mr-[10%] font-poppins-r text-xl '>Thakfully enough,
                        i am someone that actully enjoys what i do, i actually love
                        opening my IDE, typing some code, and watching the magic happen on the
                        screen. Learning new frameworks and ways to develop are always a welcome challenge, and being
                        always up to date and informed with the latest Tech-stacks is essential to me.</h1>
                </div>
                <div className='w-[90%] ml-[5%] mr-[5%] pt-20'>
                    <h1 className=' w-[80%] ml-[10%] mr-[10%] font-bebas text-red text-5xl pb-5'>Design & UX
                        <span className='custom:text-5xl text-3xl'> ✒️</span></h1>
                    <h1 className='w-[80%] ml-[10%] mr-[10%] font-poppins-r text-xl '>I firmly believe that a good user experince is what makes or brakes any digital
                        product, and it goes hand in hand with a beautifull and seamless UI. No digital product can ever hope to do well
                        without investing heavily in optimizing it's UX/UI.</h1>
                </div>
                <div className='w-[90%] ml-[5%] mr-[5%] pt-20'>
                    <h1 className=' w-[80%] ml-[10%] mr-[10%] font-bebas text-red text-5xl pb-5'>Arsenal
                        <span className='custom:text-5xl text-3xl'>  💣</span></h1>
                    <h1 className='w-[80%] ml-[10%] mr-[10%] font-poppins-r text-xl '>Football and the Gunners in particular are something i love and
                        cherich beyon reason. i have been a die hard fan of the club since thier
                        undefeated campaign in the 2004 season.</h1>
                </div>
                <div className='w-[90%] ml-[5%] mr-[5%] pt-20'>
                    <h1 className=' w-[80%] ml-[10%] mr-[10%] font-bebas text-red text-5xl pb-5'>Self-Improvment
                        <span className='custom:text-5xl text-3xl'>  📚</span></h1>
                    <h1 className='w-[80%] ml-[10%] mr-[10%] font-poppins-r text-xl '>Being a better version of myself is something
                        that I always keep at the top of my priorites, reading a new book, developing a new skill, even practicing a hobby.
                        Books like Atmoic Habits are a game changer and are what inspired this self improvment craze. </h1>
                </div>
            </div>

            <h1 className='text-center text-6xl font-bebas pt-20'><span
                className='text-transparent bg-clip-text  
                bg-gradient-to-r from-cyan via-purple to-red'> Favourite Quote </span></h1>
            <h1 className='text-center text-6xl font-bebas pb-5 pt-10'>"It always seems impossible until it’s done"</h1>
            <h2 className='text-center text-3xl font-poppins-l'>-Nelson Mandela-</h2>
            <h1 className='text-center text-6xl font-bebas pb-10 pt-20'>Some of my<span
                className='text-transparent bg-clip-text  
                bg-gradient-to-r from-cyan via-purple to-red'> Favourite Books </span></h1>
            <OwlBooks />
            <span className='text-center'>
                <Footer />
            </span>
        </div >
    )
}

export default About