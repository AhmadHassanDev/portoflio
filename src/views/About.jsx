import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const About = () => {
    return (
        <div>
            <span>
                <Navbar />
            </span>
            About
            <span className='text-center'>
                <Footer />
            </span>
        </div>
    )
}

export default About