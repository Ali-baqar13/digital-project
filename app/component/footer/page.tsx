import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const social = [
    '/assets/icons/linkedIn.png',
    '/assets/icons/insta.png',
    '/assets/icons/Be.png',
    '/assets/icons/yt.png'
]
const navItems = [
    {
        id: 1,
        name: 'Home',
        href: '/home'
    },
    {
        id: 2,
        name: 'Portfolio',
        href: '/home',

    },
    {
        name: 'Services',
        href: '/home',
        id: 3
    },
    {
        name: 'About Us',
        id: 4,
        href: '/home'
    }

]

const Footer = () => {
    return (
        <div className='bg-black mt-[50px] pt-[50px] pb-[20px] px-[10px]'>
            <div className='flex flex-col gap-[20px] items-center pb-[30px]'>
                <div className='relative w-[240px] h-[65px]'>
                    <Image src='/assets/icons/glowza-icon.webp' fill alt='icon' />
                </div>
                <p className='font-InterRegular sec-hero-section-400 text-center text-white w-[100%] md:w-[80%]'>Our mission at Glowza Digital is to create animated explainer videos that take complex concepts and turn them into Influential narratives. Our custom animations help your audience connect with your message and understand your value effortlessly. Let your brand stand out with videos that leave a lasting impression.</p>
            </div>
            <div className=' my-[30px] mx-auto'>

                <ul className='flex justify-center items-center'>{navItems.map((items, index) => (
                    <li key={items.id || index} className='mx-[15px]'><Link className={`sec-hero-section-400 font-InterRegular text-white`} href={items?.href}>{items.name}</Link></li>
                ))}</ul>

            </div>
            <div className='border-[1px] block md:hidden border-white w-full'></div>

            <div className='py-[50px] mx-[10px] gap-[20px] md:gap-[0px] flex md:flex-row flex-col items-center justify-between'>
                <div className='flex flex-col gap-[6px] md:items-start items-center'>
                    <p className='text-white'>Privacy Policy</p>
                    <p className='text-white'>Terms And Conditions</p>
                </div>
                <div className='flex  gap-[10px]'>
                    {social.map((items,index)=>
                    <div className='rounded-full flex justify-center items-center border border-white w-[40px] h-[40px]'>
                        <div className='relative w-[22.5px] h-[20px]'>
                            <Image src={items} alt='icon' fill className='object-contain' />
                        </div>
                    </div>
                )}
                    
                </div>

                <div className='flex flex-col gap-[20px] text-white items-center '>
                    <h6 className='footer  font-InterSemiBold'>03092894917</h6>
                    <p className='btn font-InterRegular'>baqar2502@gail.com</p>
                </div>


            </div>

        </div>
    )
}

export default Footer
