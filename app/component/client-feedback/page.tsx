'use client'
import React, { useEffect, useRef, useState } from 'react'

import { SwiperSlide, Swiper } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import Image from 'next/image'
import 'swiper/css'

const swiperData = [
    {
        id: 1,
        para: 'No matter the style, complexity, or industry, Glowza Digital delivers with excellence. Their ability to adapt, innovate, and produce high-quality animations across various formats makes them our go-to partner for all video production needs. If you need a team you can rely on, Glowza is it!',
        img: '/assets/images/swiper-img.webp',
        name: 'John Cena',
        title: 'Global Head Of Marketing and Brand -Samsung'
    },
    {
        id: 2,
        para: 'No matter the style, complexity, or industry, Glowza Digital delivers with excellence. Their ability to adapt, innovate, and produce high-quality animations across various formats makes them our go-to partner for all video production needs. If you need a team you can rely on, Glowza is it!',
        img: '/assets/images/swiper-img.webp',
        name: 'Kevin Petersen',
        title: 'Global Head Of Marketing and Brand -Samsung'
    },
    {
        id: 3,
        para: 'No matter the style, complexity, or industry, Glowza Digital delivers with excellence. Their ability to adapt, innovate, and produce high-quality animations across various formats makes them our go-to partner for all video production needs. If you need a team you can rely on, Glowza is it!',
        img: '/assets/images/swiper-img.webp',
        name: 'Roman Reigns',
        title: 'Global Head Of Marketing and Brand -Samsung'
    },
]

const ClientFeedBack = () => {
    const swiperRef = useRef<any>(null)
    const sweepRef = useRef<any>(null)
    const [sliderHeight, setSwiperHeight] = useState<any>()

    useEffect(() => {
        if (!swiperRef.current) return
        setSwiperHeight(sweepRef.current.offsetHeight)


    }, [])


    return (

        <div className='relative w-full'>
            <div ref={sweepRef} className='w-full h-auto'>
                <Swiper

                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    slidesPerView={1}
                    spaceBetween={2}
                    loop={true}
                    speed={1000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false
                    }}
                    pagination={{
                        el: '.custom-pagination',
                        type: 'fraction',
                        formatFractionCurrent: (number: number) => 
                            number < 10 ? `0${number}` : `${number}`,
                        formatFractionTotal: (number) =>
      number < 10 ? `0${number}` : number,
                        
                    }}
                    modules={[Autoplay, Pagination]}
                    className="w-full"
                >
                    {swiperData.map((items, index) =>
                        <SwiperSlide key={index}>
                            <div className='flex flex-col gap-[40px]'>
                                <p className='footer font-InterMedium'>{items?.para}</p>
                                <div className='flex gap-[20px] items-center'>
                                    <div className='relative w-[70px] h-[70px] md:w-[190px] md:h-[190px] lg:w-[120px] lg:h-[120px] rounded-full'>
                                        <Image src={items.img} fill alt='image circle' className='rounded-full' />
                                    </div>
                                    <div className='flex flex-col gap-[5px]'>
                                        <p className='btn-var-2 font-InterSemiBold'>{items.name}</p>
                                        <p className='btn font-InterRegular text-primary-3'>{items?.title}</p>
                                    </div>
                                </div>

                            </div>

                        </SwiperSlide>)}



                </Swiper>
            </div>
            <div className={`md:absolute  mx-auto  mt-[40px]   md:w-auto gap-[0px] z-[100] md:bottom-[20px]  md:right-0`}>
                <div className='flex items-center ml-[30%]'>
                    <button onClick={() => swiperRef.current.slidePrev()} className='px-[26px] py-[15px]  border-black border-[2px] rounded-full'>
                        <Image src='/assets/icons/arrow.svg' alt='arrow-left' width={20} height={20} className='object-contain' />

                    </button>
                    <div className='custom-pagination mx-[24px] '></div>
                    <button onClick={() => swiperRef.current.slideNext()} className='px-[26px] py-[15px]  border-black border-[2px] rounded-full trnasform rotate-180'>
                        <Image src='/assets/icons/arrow.svg' alt='arrow-left' width={20} height={20} />

                    </button>
                </div></div>
        </div>

    )
}

export default ClientFeedBack
