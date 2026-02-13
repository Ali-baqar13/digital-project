
'use client'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React, { useEffect, useRef } from 'react'

interface prop{
    target:number,
    delay?:number

}
const AnimatedNumbers = ({target}:prop) => {
    const animateNumbers = useRef<any>()

    useEffect(() => {
        const obj = { value: 0 }

        gsap.registerPlugin(ScrollTrigger)

        gsap.to(obj, {
            value: target,
            duration: 2,
            scrollTrigger: {
                trigger: animateNumbers.current,
                start: 'top 80%',
                once: true,
                
            },
            onUpdate: () => {
                (animateNumbers.current as any).innerText =
                    Math.round(obj.value).toLocaleString()
            }
        })
    }, [target])
    return (
        <div ref={animateNumbers} className='animate hero-section font-InterMedium'>0</div>
    )
}

export default AnimatedNumbers
