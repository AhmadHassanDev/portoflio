import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Github from '../assets/img/github.svg'

const MyCarousel = () => {
    return (
        <div className='mt-20'>
            <Carousel autoPlay labels={false} showThumbs={false}
                showStatus={false} showArrows={false} infiniteLoop={false}
                showIndicators={false} centerMode centerSlidePercentage={10}>
                <div>
                    <img className='w-13 px-5' src={Github} />
                </div>
                <div>
                    <img className='w-13 px-5' src={Github} />
                </div>
                <div>
                    <img className='w-13 px-5' src={Github} />
                </div>
                <div>
                    <img className='w-13 px-5' src={Github} />
                </div>
                <div>
                    <img className='w-13 px-5' src={Github} />
                </div>
                <div>
                    <img className='w-13 px-5' src={Github} />
                </div>
            </Carousel>
        </div>
    )
}

export default MyCarousel