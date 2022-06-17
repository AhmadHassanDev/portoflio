import React, { useState, useEffect } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import { slide as Menu } from 'react-burger-menu'
import { Link } from "react-router-dom";
import '../index.css'

import Logo from '../assets/img/logo.svg'
import Dark from '../assets/img/dark.svg'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    useEffect(() => {
        let body = document.getElementsByTagName('body')[0];
        if (nav === true) {
            body.classList.add("noScroll")

        } else if (nav === false) {
            body.classList.remove("noScroll")
        }

    }, [nav]);

    return (
        <div id='outer'>
            <div className='flex w-[80%] justify-between ml-[10%] mr-[10%] pt-[3%] pb-[3%]'>
                <div>
                    <Link to="/"> <img className='w-20 inline' src={Logo} alt="" /> </Link>
                    <ul className=' ml-10 hidden md:inline'>
                        <Link to="/">  <li className='font-poppins-r text-xl inline mr-5'>Home</li></Link>
                        <Link to="/contact"> <li className='font-poppins-r text-xl inline mr-5'>Contact</li> </Link>
                        <Link to="/about"><li className='font-poppins-r text-xl inline mr-5'>About</li></Link>
                        <Link to="/projects"><li className='font-poppins-r text-xl inline mr-5'>Projects</li></Link>
                    </ul>
                </div>
                <div className='hidden md:inline'>
                    <img className='w-10 inline ' src={Dark} alt="" />
                </div>
                <div id='handleNav' className=' md:hidden  tems-end pt-2 text-white' onClick={handleClick}>
                    <Hamburger id="toogle" className="hamb" toggled={nav} toggle={setNav} />
                </div>
            </div >
            <div className='flex md:hidden bg-dark-800'>
                <Menu right className='' isOpen={nav} >
                    <Link to="/" className=' mr-5'>  <li id='homeSc' className='font-poppins-r text-xl inline my-5 mr-5'>Home</li></Link>
                    <Link to="/contact" className='my-5 mr-5'> <li id='contactSc' className='font-poppins-r text-xl inline '>Contact</li> </Link>
                    <Link to="/about" className='my-5 mr-5'> <li id='aboutSc' className='font-poppins-r text-xl inline my-5 mr-5'>About</li></Link>
                    <Link to="/projects" className='my-5 mr-5'><li id='projectsSc' className='font-poppins-r text-xl inline my-5 mr-5'>Projects</li></Link>
                    <img className='w-10 inline pt-2' src={Dark} alt="" />
                </Menu>
            </div>
        </div >
    )
}

export default Navbar