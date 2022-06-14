import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Projects = () => {
    return (
        <div>
            <span>
                <Navbar />
            </span>
            <div className='mt-20 text-center w-[95%] mr-[2.5%] ml-[2.5%]'>
                <h1 className='text-8xl font-bebas'>All My <span className='text-transparent bg-clip-text  
                                bg-gradient-to-r from-cyan via-purple to-red'>Work</span></h1>
                <h1 className='font-poppins-r text-xl pt-5 w-[90%] text-center
                mr-[5%] ml-[5%]'>
                    Below you will find a list of all of my work,
                    this section will be updated soon, stay tuned!
                </h1>
            </div>
            <div className=' grid grid-cols-1 items-center justify-center 
            text-center custom:grid-cols-2 w-[95%] mr-[2.5%] ml-[2.5%] mt-24'>
                <div className='bg-dark w-[90%]  mr-[5%] ml-[5%] h-[300px] 
                custom:w-[70%] custom:ml-[20%] custom:mr-[10%] custom:h-[300px]
                mb-20
                custom:mb-0
                '
                >
                    P1
                </div>
                <div className='w-[90%] mr-[5%] ml-[5%] bg-dark custom:w-[70%] 
                custom:ml-[10%] custom:mr-[20%] h-[300px]'>
                    P1
                </div>
            </div>
            <div className=' grid grid-cols-1 items-center justify-center 
            text-center custom:grid-cols-2 w-[95%] mr-[2.5%] ml-[2.5%] mt-20'>
                <div className='bg-dark w-[90%]  mr-[5%] ml-[5%] h-[300px] 
                custom:w-[70%] custom:ml-[20%] custom:mr-[10%] custom:h-[300px]
                mb-20 custom:mb-0'
                >
                    P1
                </div>
                <div className='  w-[90%]  mr-[5%] ml-[5%] bg-dark custom:w-[70%] 
                custom:ml-[10%] custom:mr-[20%] h-[300px]'>
                    P1
                </div>
            </div>
            <span className='text-center'>
                <Footer />
            </span>
        </div>
    )
}

export default Projects