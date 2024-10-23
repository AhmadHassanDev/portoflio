import React from 'react';
import Arrow from '../assets/img/arrow.svg';

const Project = (props) => {
    return (
        <>
            <div className='md:hidden grid-cols-4 px-10 custom:px-16 pt-14 max-h-max '>
                <div className='col-span-1 h-full '>
                    <div className='w-full h-full flex items-center justify-center'>
                        <img className='object-cover h-full w-full' src={props.img} alt="" />
                    </div>
                </div>
                <div className='col-span-3 w-full pb-10 bg-dark relative'>
                    <div>
                        <h1 className='text-left md:pl-10 pt-4 
                        md:text-4xl md:font-poppins-sb md:mb-5
                        text-base pl-5'>{props.title}</h1>
                    </div>
                    <div>
                        <h1 className=' 
                     text-xs pl-5 pt-3 w-[90%] pb-7 md:pl-10 font-poppins-l text-left md:text-xl'>
                            {props.body}
                        </h1>
                    </div>
                    <div
                        className='right-0 absolute bottom-5 mr-10 '>
                        <h1 className=' inline text-xs md:text-sm font-poppins-l'>
                            More
                        </h1>
                        <img className='inline w-7' src={Arrow} alt="" />
                    </div>
                </div>
            </div>

            <div className='md:grid hidden grid-cols-4 px-10 custom:px-16 pt-14 max-h-max '>
                <div className='col-span-1 h-full '>
                    <div className='w-full h-full flex items-center justify-center'>
                        <img className='object-cover h-full w-full' src={props.img} alt="" />
                    </div>
                </div>
                <div className='col-span-3 w-full pb-10 bg-dark relative'>
                    <div>
                        <h1 className='text-left md:pl-10 pt-4 
                        md:text-4xl md:font-poppins-sb md:mb-5
                        text-base pl-5'>{props.title}</h1>
                    </div>
                    <div>
                        <h1 className=' 
                     text-xs pl-5 pt-3 w-[90%] pb-7 md:pl-10 font-poppins-l text-left md:text-xl'>
                            {props.body}
                        </h1>
                    </div>
                    <div
                        className='right-0 absolute bottom-5 mr-10 '>
                        <h1 className=' inline text-xs md:text-sm font-poppins-l'>
                            More
                        </h1>
                        <img className='inline w-7' src={Arrow} alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project;
