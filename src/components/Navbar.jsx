import React, { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import { elastic as Menu } from 'react-burger-menu'

import Logo from '../assets/img/logo.svg'
import Dark from '../assets/img/dark.svg'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleClick = () => setNav(!nav);
    const handleScroll = () => {
        document.body.classList.toggle('overflow-hidden');
    }

    const onClickMethod = () => {
        handleClick();
        handleScroll();
    }

    return (
        <div>
            <div className='flex w-[80%] justify-between ml-[10%] mr-[10%] pt-[3%] pb-[3%]'>
                <div>
                    <img className='w-20 inline' src={Logo} alt="" />
                    <ul className=' ml-10 hidden md:inline'>
                        <li className='font-poppins-r text-xl inline mr-5'>Home</li>
                        <li className='font-poppins-r text-xl inline mr-5'>Work</li>
                        <li className='font-poppins-r text-xl inline mr-5'>About</li>
                        <li className='font-poppins-r text-xl inline mr-5'>Contact</li>
                    </ul>
                </div>
                <div className='hidden md:inline'>
                    <img className='w-10 inline ' src={Dark} alt="" />
                </div>
                <div className=' md:hidden  tems-end pt-2 text-white ' onClick={onClickMethod}>
                    <Hamburger className="hamb" toggled={nav} toggle={setNav} />
                </div>
            </div>
            <div className='flex md:hidden bg-dark-800'>
                <Menu right Overlay className='' pageWrapId={"page"} outerContainerId={"outer"} isOpen={nav} >
                    <li className='font-poppins-r text-xl inline my-5 mr-5'>Home</li>
                    <li className='font-poppins-r text-xl inline my-5 mr-5'>Work</li>
                    <li className='font-poppins-r text-xl inline my-5 mr-5'>About</li>
                    <li className='font-poppins-r text-xl inline my-5 mr-5'>Contact</li>
                    <img className='w-10 inline pt-2' src={Dark} alt="" />
                </Menu>
            </div>
        </div>
    )
}

export default Navbar