import React, { useRef, useEffect } from 'react'
import { Power4 } from 'gsap'

const Transition = ({ timeline }) => {
    const transition = useRef(null);
    useEffect(() => {
        timeline.to(transition.current, {
            duration: 4,
            x: 2500,
            ease: Power4.easeOut,
            display: "none",
        });
    })
    return (
        <div className='  
        bg-extraDark h-screen absolute z-50 top-0 w-full' ref={transition}>
        </div>
    )
}

export default Transition