'use client'

import React, { useEffect, useRef, useState } from 'react'
import ScreenContainer from '../component/ui/ScreenContainer'
import Image from 'next/image'
import Button from '../component/ui/Button'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import gsap from 'gsap'
import _ScrollTrigger, { ScrollTrigger } from 'gsap/ScrollTrigger'
import AnimatedNumbers from '../component/animation/AnimatedNumbers'
import Thumbnail from '../component/ui/Thumbnail'
import { Formik, useFormik } from 'formik'
import * as  yup from 'yup'
import ClientFeedBack from '../component/client-feedback/page'
gsap.registerPlugin(ScrollTrigger)

const data = [
    { title: 'Explainer Videos', desc: 'Our explainer videos simplify complex ideas through vibrant storytelling. They engage audiences, clarify messages, and enhance understanding, ensuring your message connects effectively with viewers.' },
    { title: 'Saas Videos', desc: 'Captivate audiences with a compelling SaaS explainer video. We help software as a service companies highlight key features, making service as a software solutions more accessible and engaging for customers' },
    { title: 'Motion Graphics', dexc: 'Bring ideas to life with dynamic motion graphics services. Our expert team crafts 3D motion graphics services and motion graphics animation services to create engaging, high-impact visuals that simplify complex concepts.' }
]


const images = [
    {
        id: 1,
        img: '/assets/images/yt-img-1.webp',
        url: 'https://www.youtube.com/embed/ua7CoCQTfVs?start=1',
    },
    {
        id: 2,
        img: '/assets/images/yt-img-2.webp',
        url: 'https://www.youtube.com/embed/ua7CoCQTfVs?start=1',
    },
    {
        id: 3,
        img: '/assets/images/yt-img-3.webp',
        url: 'https://www.youtube.com/embed/ua7CoCQTfVs?start=1',
    },
    {
        id: 4,
        img: '/assets/images/yt-img-4.webp',
        url: 'https://www.youtube.com/embed/ua7CoCQTfVs?start=1',
    },
    {
        id: 5,
        img: '/assets/images/yt-img-5.webp',
        url: 'https://www.youtube.com/embed/ua7CoCQTfVs?start=1',
    },
    {
        id: 6,
        img: '/assets/images/yt-img-6.webp',
        url: 'https://www.youtube.com/embed/ua7CoCQTfVs?start=1',
    },
];


const page = () => {

    const [open, setOpen] = useState<boolean>(false)
    const wrapperRef = useRef<HTMLDivElement>(null)
   
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger)
       
        const wrappers = gsap.utils.toArray('.card')
        console.log(wrappers, 'checking for container')
        const ctx = gsap.context(() => {
            wrappers.forEach((wrapper: any, index: number) => {
                const startWrapper = (index * 5) + 5
                
                const lastIdx = wrappers.length - 1
                const targetScale = index !== lastIdx ? 0.9 + 0.025 * index : 1;
                gsap.to(wrapper, {
                    scale: targetScale,
                    scrollTrigger: {
                        trigger: wrapper,
                        start: `top ${startWrapper}%`,
                        // end: `bottom 550`,
                          end: `${window.innerWidth < 768 ? 'center' : 'bottom'} ${window.innerWidth < 768 ? 'top' : '558px'}`,
                        endTrigger: wrapperRef.current,
                        pin: true,
                        pinSpacing: false,
                        scrub: true,
                        markers: false

                    }
                })
            })

        }, wrapperRef)
        return () => ctx.revert()
    })

    // form work

    const validtionSchema = yup.object({
        // name: yup.string().required('name is required Field'),
        companyName: yup.string().required('Company Name is required Field'),
        email: yup.string().email().required('Email is required Field'),
        phone: yup.string().required('Phone is required Field'),
        tellUsAbout: yup.string().required('Tell Us About is required Field'),
    })

    const formik = useFormik({
        initialValues: {
            name: '',
            companyName: '',
            email: '',
            phone: "",
            tellUsAbout: ''

        },
        validationSchema: validtionSchema,
        onSubmit: (val: any) => {
            console.log(val, ' i am checking submit values')
        }
    })










    return (
        <div className=''>


            {/* Hero Section */}
            <section className=" relative">
                <div className="absolute w-full h-full">
                    <Image src="/assets/images/backgroundImg.png" alt="" fill />
                </div>
                <ScreenContainer>
                    <div className="relative flex md:flex-row flex-col justify-between gap-[2%] py-[100px] items-center">
                        <div className="md:w-[57%] w-[100%] flex flex-col  overflow-hidden">
                            <h4 className="w-full text-wrap hero-section font-InterRegular">
                                Animated <span className="!font-semibold"> Explainer Video</span> Company
                            </h4>

                            <p className="mt-[20px] w-[100%] md:w-[80%] sec-hero-section-reg text-primary-1 font-InterMedium">
                                At Glowza Digital, we create mesmerizing animated explainer videos that
                                simplify complex concepts into engaging narratives. As the top animated
                                video company our custom animations enhance brand visibility and leave a
                                lasting impression. Lead the digital world with us
                            </p>

                            <div className="mt-[28px]">
                                <Button label="Get a Quote Now" />
                            </div>

                            <div className="w-full flex items-center mt-[20px]">
                                <div className="flex items-center !w-[40%]">
                                    {Array.from({ length: 4 }).map((_, index) => (
                                        <div
                                            key={index}
                                            className={`relative w-[100px] h-[100px] ${index > 0 ? 'ml-[-45px]' : 'ml-[-20px]'
                                                }`}
                                        >
                                            <Image
                                                className="object-contain"
                                                alt="image"
                                                src="/assets/images/rounded-image-hero-sec.webp"
                                                fill
                                            />
                                        </div>
                                    ))}
                                </div>

                                <div className="!w-[60%]">
                                    <Swiper
                                        slidesPerView={1}
                                        spaceBetween={2}
                                        loop={true}
                                        speed={1000}
                                        autoplay={{
                                            delay: 3000,
                                            disableOnInteraction: false
                                        }}
                                        modules={[Autoplay]}
                                        className="w-full"
                                    >
                                        {Array.from({ length: 4 }).map((_, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="sec-hero-section-reg w-full h-auto flex flex-col items-start gap-[10px] text-primary-2 font-InterRegular">
                                                    <p className="!text-[17px]">1500+</p>
                                                    <p className="text-[17px]">Happy Client WorldWide</p>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>

                            <div className="flex flex-col mt-[20px]">
                                <h5 className="sec-hero-section font-InterMedium mb-[20px]">TRUSTED BY TEAMS AT</h5>
                                <div className="flex m-[10px] gap-[53px] items-center">
                                    <Image src="/assets/images/trustPilot.webp" alt="logo-image" width={132} height={53} />
                                    <Image src="/assets/images/googleLogo.webp" alt="logo-image" width={99} height={53} />
                                    <Image src="/assets/images/upwork-logo.webp" alt="logo-image" width={132} height={38} />
                                </div>
                            </div>
                        </div>

                        <div className="md:w-[49%] w-[100%] flex justify-between mt-[0px] md:mt-[50px]">
                            {/* Right side media */}
                            <div className="flex flex-col w-[48%] gap-4">
                                <div className="relative w-full aspect-[2/1]">
                                    <Image src="/assets/images/rect-one.png" alt="hero-sec-image" fill />
                                </div>
                                <div className="w-full aspect-[1/1]">
                                    <video
                                        className="elementor-video rounded-[12px] w-full h-full object-cover"
                                        src="https://glowzadigital.com/wp-content/uploads/2025/07/Brand-Video-1St-Cut-compress.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        controlsList="nodownload"
                                    />
                                </div>
                                <div className="relative w-full aspect-[2/1]">
                                    <Image src="/assets/images/rect-two.png" alt="hero-sec-image" fill />
                                </div>
                            </div>

                            <div className="flex flex-col w-[48%] gap-[20px]">
                                <div className="w-full aspect-[137/100] relative">
                                    <Image src="/assets/images/rect-three.png" alt="hero-sec-image" fill className="object-cover" />
                                </div>
                                <div className="relative w-full aspect-[2.5/1]">
                                    <Image src="/assets/images/rect-five.png" alt="hero-sec-image" fill className="object-contain" />
                                </div>
                                <div className="w-full aspect-[106/100] relative">
                                    <Image src="/assets/images/rect-four.png" alt="hero-sec-image" fill className="object-contain" />
                                </div>
                            </div>
                        </div>
                    </div>
                </ScreenContainer>
            </section>
           
               

                    
               

            {/* Stacked Cards Section */}
            <section className="py-[100px]">
                <ScreenContainer className="md:!px-[150px] ">
                    <div className='flex flex-col gap-[20px] mb-[50px] mr-[0px] md:mr-[20px] w-full'>
                        <h5 className='heading-var-sec font-InterRegular'>Transform Your Message in to Captivating Visual Stories</h5>
                        <p className='sec-hero-section-400 font-InterRegular text-primary-3 w-[85%]'>As an expert explainer video production company, we create dynamic animations—from e-learning video production to stunning 3D motion graphics services. Need guidance? Our team is here to bring your vision to life!</p>
                    </div>
                    <div
                        ref={wrapperRef}
                        className="w-full flex flex-col items-center gap-[30px]"
                    >
                        {data.map((item, index) => (
                            <div className="stacked-card relative flex flex-col w-full">

                                <div key={index} className="card relative z-[10] shadow-lg w-full md:pl-[30px] p-[20px] md:p-[0px] md:pr-[10px] flex md:flex-row flex-col justify-between items-center rounded-[24px] bg-white">
                                    <div className="flex flex-col gap-[24px] md:w-[45%] py-[20px] md:py-[20px] w-[100%]">
                                        <h5 className="heading-var-third font-InterRegular">{item?.title}</h5>
                                        <p className="sec-hero-section-reg font-InterRegular !text-primary-3">
                                            {item?.desc}
                                        </p>
                                        <Button
                                            isBgBlack={false}
                                            className="!px-[24px] !py-[15px] !text-black !bg-white !border border-black"
                                            label="Explore"
                                        />
                                    </div>

                                    <div className="relative md:h-[372px] h-[431px] rounded-[25px] md:w-[48%] w-[100%] overflow-hidden">
                                        <Image alt="" src="/assets/images/saim-clone.webp" fill />
                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                </ScreenContainer>
            </section>

            {/* Stacked Cards Section */}

            {/* Animated Numbers Section */}

            <section className='relative w-full'>
                <div className='absolute w-full h-full'>
                    <Image src='/assets/images/background-Image-2.png' alt='image' fill />
                </div>
                <ScreenContainer className='py-[100px] z-[1000]'>
                    <div className='w-[100%] flex md:flex-row flex-col gap-[100px] justify-between relative  text-white'>
                        <div className='flex flex-col gap-[20px] md:w-[40%] w-[100%]'>
                            <h4 className='heading-var-third font-InterRegular'>About Us</h4>
                            <h5 className='heading-var-sec font-InterRegular'>From Concept to Creation </h5>
                            <Button label='Know Us' isBgBlack={false} isBgWhite={true} />

                        </div>
                        <div className='md:w-[47%] w-[100%]'>
                            <p className='text-[18px] font-[400 !leading-[35px] font-InterRegular'>We take your ideas and bring them to life through video, ensuring your vision is communicated clearly and effectively. Each concept is developed with creativity and expertise, focusing on delivering a video that speaks to your audience. By combining strong storytelling with compelling visuals, we create content that captures attention, sparks engagement, and delivers tangible results. Whether for marketing, education, or entertainment, our videos make an impact that drives success.</p>
                            <div className=' flex   justify-between w-full items-center'>
                                <div className='flex flex-col items-center m-[10px] w-[50%]'>
                                    <div className='flex'>
                                        <AnimatedNumbers target={1500} />
                                        <div className='hero-section'>+</div>
                                    </div>
                                    <p className='btn font-InterRegular mt-[10px]'>100+ creative & Futuristic</p>
                                </div>
                                <div className='flex flex-col items-center m-[10px] w-[50%]'>
                                    <div className='flex'>
                                        <AnimatedNumbers target={8} />
                                        <div className='hero-section'>yr</div>
                                    </div>                                    <p className='btn font-InterRegular mt-[10px]'>Have Working 15 years+</p>
                                </div>
                            </div>
                        </div>



                    </div>
                </ScreenContainer>

            </section>

            {/* Animated Number section End */}

            {/* Heighlights Sections */}

            <section className='pt-[50px] md:pt-[100px]'>
                <ScreenContainer className='px-[150px]'>
                    <div className="flex flex-col">
                        <h6 className="heading-var-fourth font-InterRegular mb-[20px]">Highlights From Our Work</h6>
                        <div className='grid md:grid-cols-2 grid-cols-1 mt-[0px] md:mt-[30px]'>
                            {images?.map((items: any, index) => {
                                return (<div key={index} onClick={() => {
                                    setOpen(true)

                                }} className='w-full aspect-[3/2] p-[10px]'><Thumbnail open={open} setOpen={setOpen} images={items.img} url={items.url} /></div>)
                            })}


                        </div>
                        <div className='my-[60px] mx-auto'>
                            <Button label={'View Full Portfolio'} isBgBlack={true} isBgWhite={false} />
                        </div>
                    </div>
                </ScreenContainer>
            </section>
            {/* Highlights section ends */}

            <section className='my-[30px]'>
                <ScreenContainer className='!px-[0px] lg:!px-[150px]'>
                    <div className='flex justify-between items-center'>
                        <h5 className='heading-var-fourth font-InterRegular m-[10px]'>Clients Feedback</h5>
                        

                    </div>
                    <div className='pt-[30px] m-[10px]'>
                    <ClientFeedBack/></div>
                </ScreenContainer>
            </section>

            {/*  Get Instant Section */}

            <section className="md:my-[70px] my-[50px]">
                <ScreenContainer>
                    <div className="relative flex items-center w-full h-[600px] min-w-[100px] min-h-[100px]">
                        <Image
                            src="/assets/images/background-img-three.png"
                            alt="Background Image"
                            fill
                            className="object-cover rounded-[50px]"
                        />
                        <div className='absolute px-[20px] xl:px-[150px] text-white flex flex-col w-[100%] xl:w-[55%] gap-[20px]'>
                            <h6 className='heading-var-fourth font-InterRegular'>GET INSTANT VIDEO QUOTE</h6>
                            <p className='sec-hero-section-400 font-InterRegular'>Grab your quick video estimate today under a minute – fit for your industry needs!</p>
                            <Button label={'Get Instant Code'} isBgWhite={true} />
                        </div>
                    </div></ScreenContainer>
            </section>

            {/* Form part */}
            <section className='py-[50px] md:py-[70px]'>
                <ScreenContainer>
                    <h6 className='heading-var-fourth font-InterRegular mb-[20px]'>Get in Touch</h6>
                    <p className="font-text-normal font-InterRegular w-[100%] lg:w-[61%] tetx-primary-3">At Glowza Digital our mission is to empower individuals and businesses through innovative technology solutions that enrich lives, foster growth, and drive positive change.</p>

                </ScreenContainer>
                <div className='w-[100%]  flex lg:flex-row flex-col justify-between items-end'>
                    <ScreenContainer className='!mx-0 !ml-auto w-[100%] lg:!w-[59%]'>
                        <div className='my-[50px] mx-[10px] px-[150px] border rounded-[12px] '>
                            <div className='my-[10px] w-full '>
                                <form onSubmit={formik.handleSubmit} className='flex flex-col items-end w-full'>
                                    <fieldset className='flex flex-col gap-[15px] my-[15px] w-full'>
                                        <label className='font-InterRegular'>Name </label>
                                        <input className='border w-full rounded-[8px] px-[14px] h-[48px]' name='name' placeholder={'Name'} value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {/* {formik.touched.name && formik.errors.name && <span className='text-red-700'>{formik.errors.name}</span>} */}
                                    </fieldset>
                                    <fieldset className='flex flex-col gap-[15px] my-[15px]  w-full'>
                                        <label className='font-InterRegular'>Company Name <span className='text-[14px] text-red-500'>*</span></label>
                                        <input className='border w-full rounded-[8px] px-[12px] h-[48px]' name='companyName' placeholder={'Compamy Name'} value={formik.values.companyName} onChange={formik.handleChange} onBlur={formik.handleBlur} />

                                        {formik.touched.companyName && formik.errors.companyName && <span className='text-red-700'>{formik.errors.companyName as any}</span>}
                                    </fieldset>
                                    <fieldset className='flex flex-col gap-[15px] my-[15px]  w-full'>
                                        <label className='font-InterRegular'>Work Email <span className='text-[14px] text-red-500'>*</span></label>
                                        <input className='border w-full rounded-[8px] px-[14px] h-[48px]' type='email' name='email' placeholder={'Work Email'} value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.touched.email && formik.errors.email && <span className='text-red-700'>{formik.errors.email as any}</span>}

                                    </fieldset>
                                    <fieldset className='flex flex-col gap-[15px] my-[15px]  w-full'>
                                        <label className='font-InterRegular'>Phone <span className='text-[14px] text-red-500'>*</span></label>
                                        <input className='border w-full rounded-[8px] px-[14px] h-[48px]' name='phone' placeholder={'Phone'} value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.touched.phone && formik.errors.phone && <span className='text-red-700'>{formik.errors.phone as any}</span>}

                                    </fieldset>
                                    <fieldset className='flex flex-col gap-[15px] my-[15px]  w-full'>
                                        <label className='font-InterRegular'>Tell us about your vodeo needs! <span className='text-[14px] text-red-500'>*</span></label>
                                        <input className='border w-full rounded-[8px] px-[14px] h-[48px]' name='tellUsAbout' placeholder={'Write Something Here....'} value={formik.values.tellUsAbout} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                                        {formik.touched.tellUsAbout && formik.errors.tellUsAbout && <span className='text-red-700'>{formik.errors.tellUsAbout as any}</span>}

                                    </fieldset>

                                    <button type='submit' className='btn font-InterMedium bg-secondary-1 rounded-full py-[12px] px-[40px] m-2  text-white'>Submit</button>
                                </form>
                            </div>



                        </div>
                    </ScreenContainer>



                    <div className='relative lg:w-[40%] w-[100%] h-[450px]'>
                        <Image src='/assets/images/rigt-image.webp' fill alt='right image' />
                    </div>
                </div>



            </section>
            {/* Form part ended */}

        </div>
    )
}

export default page