import React from 'react'

import Heart from '../assets/img/heart.svg'
import Whatsapp from '../assets/img/whatsapp.svg'
import Insta from '../assets/img/insta.svg'
import Face from '../assets/img/face.svg'

const Footer = () => {
    return (
        <div className='mt-20'>
            <div className='grid grid-cols-3 justify-between w-[90%] ml-[5%] mr-[5%]'>
                <div className='font-poppins-l '>
                    2022 AH - All Rights Reserved
                </div>
                <div>
                    Made with <img className='inline w-7' src={Heart} alt="" />
                </div>
                <div>
                    <img className='inline w-9 mx-3' src={Insta} alt="" />
                    <img className='inline w-7 mx-3' src={Whatsapp} alt="" />
                    <img className='inline w-7 mx-3' src={Face} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer