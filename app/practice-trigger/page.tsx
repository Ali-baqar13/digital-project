'use client'

import gsap from 'gsap'
import React, { useEffect, useRef } from 'react'
import Button from '../component/ui/Button'
import Image from 'next/image'
import ScreenContainer from '../component/ui/ScreenContainer'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const page = () => {

    const wrapperRef = useRef<any>()

    gsap.registerPlugin(ScrollTrigger)
    useEffect(() => {
        const stackedContainer = document.querySelector('.stacked-card')
        
        const wrappers = gsap.utils.toArray('.card')
        console.log(wrappers, 'checking for container')
        const ctx = gsap.context(() => {
            wrappers.forEach((wrapper:any, index) => {

                const startWrapper = (index * 5) + 5
                const endWrapper = (index * 5) - 5
                
                const lastIdx = wrappers.length-1
                const targetScale = index !== lastIdx ? 0.9 + 0.025 * index : 1;
                gsap.to(wrapper, {
                    scale: targetScale,
                    scrollTrigger: {
                        trigger: wrapper,
                        start: `top ${startWrapper}%`,
                        end: `${window.innerWidth < 768 ? 'center' : 'bottom'} ${window.innerWidth < 768 ? 'top' : '558px'}`,
                        // endTrigger:wrapperRef.,
                        pin: true,
                        pinSpacing: false,
scrub: true,
                        markers: true

                    }
                })
            })

        }, wrapperRef)
        return () => ctx.revert()
    })
    return (

        <ScreenContainer className="!px-[150px]">
            <div
                ref={wrapperRef}
                className="w-full  flex flex-col items-center gap-[100px]"
            >
                {Array.from({ length: 3 }).map((_, index) => (
                    <div key={index} className=" stacked-card relative flex flex-col w-full">

                        <div className="card relative z-[10] shadow-lg w-full pl-[30px] pr-[10px] flex justify-between items-center rounded-[24px] bg-white">
                            <div className="flex flex-col gap-[24px] w-[45%]">
                                <h5 className="heading-var-third font-InterRegular">Explainer Videos</h5>
                                <p className="sec-hero-section-reg font-InterRegular !text-primary-3">
                                    {0 == 0 && 'first One lorem loren lorem lorem lorem loren lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem '}
                                    {1 == 1 && ';second Onlorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem e'}
                                    {2 == 2 && ';Third Olorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ne'}
                                </p>
                                <Button
                                    isBgBlack={false}
                                    className="!px-[24px] !py-[15px] !text-black !bg-white !border border-black"
                                    label="Explore"
                                />
                            </div>

                            <div className="relative h-[372px] rounded-[25px] w-[48%] overflow-hidden">
                                <Image alt="" src="/assets/images/saim-clone.webp" fill />
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </ScreenContainer>

    )
}

export default page
