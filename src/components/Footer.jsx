import React from 'react'

import Heart from '../assets/img/heart.svg'
import Whatsapp from '../assets/img/whatsapp.svg'
import Insta from '../assets/img/insta.svg'
import Face from '../assets/img/face.svg'

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='grid grid-cols-3 justify-between w-[90%] ml-[5%] mr-[5%]'>
                <div className='font-poppins-l custom:text-base text-xs'>
                    2022 AH - All Rights Reserved
                </div>
                <div className='text-xs custom:text-base'>
                    Made with <img className='inline w-7' src={Heart} alt="" />
                </div>
                <div>
                    <img className='inline w-5 mx-2 custom:mx-3 custom:w-9 ' src={Insta} alt="" />
                    <img className='inline w-5 mx-2 custom:mx-3 custom:w-7' src={Whatsapp} alt="" />
                    <img className='inline w-5 mx-2 custom:mx-3 custom:w-7' src={Face} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer