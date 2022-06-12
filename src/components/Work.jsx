import React from 'react'
import Owl from '../components/Owl'
import Project from './Project'
import ArrowAlt from '../assets/img/arrowAlt.svg'
import FormCTA from './FormCTA'
import Skills from './Skills'

const Work = () => {
    return (
        <div className='custom:mt-[0%] bg-primary'>
            <div className='w-full flex justify-center'>
                <h1 className='text-8xl max-w-fit text-center mt-20 font-bebas text-transparent bg-clip-text  
        bg-gradient-to-r from-cyan via-purple to-red'>
                    My Work
                </h1>
            </div>
            <div className='w-full flex justify-center mt-3'>
                <h1 className='font-poppins-sb text-3xl w-5/6'>
                    Below you’ll find some of my favourite projects
                </h1>
            </div>
            <Project />
            <Project />
            <Project />
            <div className='cursor-pointer flex w-full pb-[7%] text-8xl float-left pt-5 bg-primary '>
                <h1 className='inline ml-[5%] mt-[2%]  text-left text-transparent bg-clip-text  
        bg-gradient-to-r from-cyan via-purple to-red font-bebas'>
                    All Projects
                </h1>
                <img w className='inline w-14 mt-4' src={ArrowAlt} alt="" />
            </div>
            <div className='bg-lightDark custom-mt-20'>
                <div className='w-full flex justify-center'>
                    <h1 className='text-8xl max-w-fit text-center mt-20 font-bebas text-transparent bg-clip-text  
        bg-gradient-to-r from-cyan via-purple to-red'>
                        Skills & Expertise
                    </h1>
                </div>
                <div className='w-full flex justify-center'>
                    <h1 className='text-4xl font-poppins-sb mt-3 w-[92%]'>Real Fullstack front-end experience</h1>
                </div>
                <div className='w-full flex justify-center pt-10'>
                    <h1 className='text-lg font-poppins-l text-center w-[85%]'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ante proin quam sed quam scelerisque.
                        Morbi et ipsum arcu lacus sem fermentum urna fermentum. Cras ac fringilla libero accumsan,
                        etiam volutpat sit nunc. Amet scelerisque morbi nec, cursus lectus id.
                        Facilisis cursus molestie pulvinar massa tristique leo, pellentesque egestas
                        purus. Arcu tristique interdum quis turpis facilisi sed ut metus. Mauris hendrerit
                        euismod amet elit volutpat ultrices porttitor urna vitae. Quam dolor aliquet elit
                        sapien eu tempus ultricies ultrices eu. Ut elementum volutpat in ut nisi,
                        blandit interdum. Donec et bibendum iaculis eget netus sit sed. Ultrices sit sed quam et malesuada.
                    </h1>
                </div>
                <Owl />
            </div>

            <div>
                <Skills />
            </div>
            <div>
                <FormCTA />
            </div>
        </div >
    )
}

export default Work