import Link from 'next/link'
import React from 'react'
interface prop {
    label: string,
    link?: string,
    className?: string
    isBgBlack?: boolean,
    isBgWhite?:boolean
}
const Button = ({ label, link, className, isBgBlack=true,isBgWhite=false }: prop) => {
    return (
        <Link href='/' className={`${className} ${isBgWhite && 'bg-white'} w-fit flex items-center text-white gap-[5px] py-[22px] px-[40px] bg-secondary-1 rounded-[50px]`}><p className={`btn font-InterRegular ${isBgWhite && 'text-black'}`}>{label}</p> <span className='relative w-[16px] h-[16px]'>

            {(isBgBlack || !isBgWhite) ?
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none"><path d="M3.125 10.5H16.875" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.25 4.875L16.875 10.5L11.25 16.125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>

                :
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none"><path d="M3.625 10.1348H17.375" stroke="#010202" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.75 4.50977L17.375 10.1348L11.75 15.7598" stroke="#010202" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            }
        </span></Link>
    )
}

export default Button
