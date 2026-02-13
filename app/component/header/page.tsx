'use client'
import React, { useEffect, useRef, useState } from 'react'
import ScreenContainer from '../ui/ScreenContainer'
import Image from 'next/image'
import { IoMdMenu } from "react-icons/io";
import Link from 'next/link';


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
const Header = () => {
    const headerRef = useRef<any>()
    const [clicked, setClicked] = useState<any>(1)
    const [openMenu, setOpenMenu] = useState<boolean>(false)
    const [height, setHeight] = useState()

    useEffect(() => {
        if (headerRef.current) {
            setHeight(headerRef.current.offsetHeight)

            console.log(headerRef.current.offsetHeight)
        }
    }, [])
    return (
        <header className='absolute z-[10] w-full rounded-[100px] top-[20px] bg-black/20 px-[20px]'>
            <div className='relative w-full'>


                <div ref={headerRef} className='flex justify-between items-center'>
                    <div className='relative w-[168px] h-[45px] m-[10px]'>
                        <Image src='/assets/icons/glowza-icon.webp' alt='icon' fill />
                    </div>

                    <nav>
                        <ul className='lg:flex hidden  items-center'>
                            {navItems.map((items, index) => (
                                <li onClick={() => setClicked(items.id)} key={items.id || index} className='m-[20px]'><Link className={`btn-var-2 font-InterRegular ${clicked == items.id ? 'text-black' : 'text-white'} hover:text-black`} href={items?.href}>{items.name}</Link></li>
                            ))}

                            <button className='btn-var-2 font-InterRegular bg-secondary-1 text-white px-[20px] py-[13px] rounded-[100px]'>Let's Talk</button>

                        </ul>
                        <button onClick={() => setOpenMenu(!openMenu)} className='block lg:hidden bg-white p-[5px] rounded-[3px]'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" className="w-[22px] h-[22px] text-secondary-2 fill-current" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"></path></svg>
                        </button>
                    </nav>
                </div>

                {openMenu &&
                    <div  className={`lg:hidden bg-white absolute top-[${height}px] z-[22] h-auto block  w-full transition-all ease-in duration-1000`}>
                        <ul className='flex flex-col'>
                            {navItems.map((items:any, index:number)=>(
                                <li onClick={()=>{setClicked(items.id)}} className={`px-[20px] py-[10px] hover:bg-blue-700 hover:text-white ${clicked == items.id ? 'text-white bg-blue-700' : 'text-black'}`} key={items?.id}><Link href={items?.href}>{items.name}</Link></li>
                            ))}
                            <button className='btn-var-2 text-start font-InterRegular bg-secondary-1 text-white px-[20px] py-[10px] rounded-[100px]'>Let's Talk</button>
                        </ul>
                    </div>}


            </div>



        </header>
    )
}

export default Header
