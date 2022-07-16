import React from 'react'
import { useParams } from 'react-router-dom'

import Greek from '../assets/img/greek.png'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { ProjectsMap } from '../model/Project';

const Project = () => {
    const { id } = useParams()
    return (
        <div>
            <span>
                <Navbar />
            </span>
            <div className='w-full h-[80%]'>
                <img src={Greek} alt="" />
            </div>
            <div>
                <h1 className='ml-20 mt-10 mb-2 font-bebas text-7xl'>Tools used</h1>
                <h1 className='ml-20 mt-3 mb-10 font-poppins-l text-xl'>The tools used in creating the projects</h1>
                <div className='flex flex-row ml-20'>
                    <div className='w-20 h-20 rounded-full mr-10 bg-white '></div>
                    <div className='w-20 h-20 rounded-full mx-10 bg-white '></div>
                    <div className='w-20 h-20 rounded-full mx-10 bg-white '></div>
                </div>
            </div>
            <div>
                <h1 className='ml-20 mt-10 mb-2 font-bebas text-7xl'>Project Details</h1>
                <h1 className='ml-20 mt-3 mb-10 font-poppins-l text-xl'>Details About the project</h1>
                <h1 className='ml-20 mt-3 mb-10 font-poppins-l text-base w-[80%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil ullam mollitia debitis qui aperiam! Cumque, reiciendis ex ab voluptate cupiditate laboriosam labore fugiat et, debitis neque enim, quo illo numquam.</h1>
            </div>
            <div>
                <h1 className='ml-20 mt-10 mb-2 font-bebas text-7xl'>Project Shots</h1>
                <div className='ml-20 mt-10 grid grid-cols-2 lg:grid-cols-4 gap-1'>
                    <div className='col-span-1 w-60 h-60 '>
                        <img className=' object-cover w-full h-full' src={require('../assets/img/' + ProjectsMap[id - 1].shoots[0] + '.png')} alt="" />
                    </div>
                    <div className='col-span-1 w-60 h-60 '>
                        <img className=' object-cover w-full h-full' src={require('../assets/img/' + ProjectsMap[id - 1].shoots[0] + '.png')} alt="" />
                    </div>
                    <div className='col-span-1 w-60 h-60 '>
                        <img className=' object-cover w-full h-full' src={require('../assets/img/' + ProjectsMap[id - 1].shoots[0] + '.png')} alt="" />
                    </div>
                    <div className='col-span-1 w-60 h-60 '>
                        <img className=' object-cover w-full h-full' src={require('../assets/img/' + ProjectsMap[id - 1].shoots[0] + '.png')} alt="" />
                    </div>

                </div>
            </div>
            <span className='text-center'>
                <Footer />
            </span>
        </div>
    )
}

export default Project