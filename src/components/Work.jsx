import React from 'react'
import Owl from '../components/Owl'
import { useNavigate } from "react-router-dom";

import Project from './Project'
import ArrowAlt from '../assets/img/arrowAlt.svg'
import FormCTA from './FormCTA'
import Skills from './Skills'
import Quote from './Quote'
import EZeats from '../assets/img/ezeats.png'
import Beltone from '../assets/img/beltone.png'
import SwiftMinis from '../assets/img/swiftminis.png'


const Work = () => {
    const navigate = useNavigate()
    return (
        <div className='custom:mt-[0%] bg-primary'>
            <div className='w-full flex justify-center'>
                <h1 className='text-8xl max-w-fit text-center mt-20 font-bebas text-transparent bg-clip-text  
        bg-gradient-to-r from-cyan via-purple to-red'>
                    My Work
                </h1>
            </div>
            <div className='w-full flex justify-center mt-3'>
                <h1 className=' text-center mb-5 font-poppins-sb text-3xl w-5/6'>
                    Below you’ll find some of my favourite projects
                </h1>
            </div>
            <div className='cursor-pointer' onClick={() => navigate("projects/1")}>
                <Project title="EZeats Landing" body="EZeats is set to revolutionize the food and beverage industry in Egypt & Morocco by seamlessly integrating digital menus, ordering, payment processes, and reviews, This innovative approach reduces wait times, enhances operational efficiency, and minimizes physical contact, allowing diners to enjoy their meals with ease. Ezeats is setting a new standard for modern dining, bringing cutting-edge technology to the heart of the hospitality industry." img={EZeats} />
            </div>
            <div className='cursor-pointer' onClick={() => navigate("projects/2")}>
                <Project title="Bletone Mortage App" body="Beltone Mortgage Finance aims to introduce new experience in selling mortgage solutions. Under the supervision of the Financial Regulatory Authority with License No.23 dated 16-11-2023 & Commercial Register No.146020" img={Beltone} />
            </div>
            <div className='cursor-pointer' onClick={() => navigate("projects/3")}>
                <Project img={SwiftMinis} title={"SwiftMinis App"} body={"SwiftMins is an application designed for Verto Technologies, its function is creating virtual greeting cards for different events. Clients can add their users, and enable them to create customized cards to share with the world"} />
            </div>
            <div onClick={() => navigate("/projects")} className='cursor-pointer flex w-full pb-[7%] text-8xl float-left pt-5 custom:pt-10 bg-primary '>
                <h1 className='inline ml-[5%] mt-[2%] text-5xl custom:text-8xl text-left text-transparent bg-clip-text  
        bg-gradient-to-r from-cyan via-purple to-red font-bebas'>
                    All Projects
                </h1>
                <img className='w-[10%] ml-2' src={ArrowAlt} alt="" />
            </div>
            <div className='bg-lightDark custom-mt-20'>
                <div className='w-full flex justify-center'>
                    <h1 className='text-8xl max-w-fit text-center mt-20 font-bebas text-transparent bg-clip-text  
        bg-gradient-to-r from-cyan via-purple to-red'>
                        Skills & Expertise
                    </h1>
                </div>
                <div className='w-full flex justify-center'>
                    <h1 className='text-4xl font-poppins-sb mt-3 w-[92%] text-center'>Real Fullstack front-end experience</h1>
                </div>
                <div className='w-full flex justify-center pt-10'>
                    <h1 className='text-lg font-poppins-l text-center w-[85%]'>
                        Being a Computer Science graduate, technicalities are of immense importance to me, but i have gone on
                        to discover how equally important it is to have a user centered design and plan in order for your application
                        or service to be met with any success. That's why i went on to learn UX Research, UI Design, and became versed with
                        the latest design tools and fundamentals
                    </h1>
                </div>
                <Owl />
            </div>
            <div>
                <Skills />
            </div>
            <div>
                <Quote />
            </div>
            <div>
                <FormCTA />
            </div>
        </div >
    )
}

export default Work