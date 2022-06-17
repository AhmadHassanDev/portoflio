import React, { useRef, useEffect } from 'react'
import { Power4 } from 'gsap'

const TransitionMobile = ({ timeline }) => {
    const transition = useRef(null);
    useEffect(() => {
        timeline.to(transition.current, {
            duration: 4,
            x: 950,
            ease: Power4.easeOut,
            display: "none",
        });
    })
    return (
        <div className='  
        bg-extraDark h-screen absolute z-10 top-0 w-screen' ref={transition}>
        </div>
    )
}

export default TransitionMobile