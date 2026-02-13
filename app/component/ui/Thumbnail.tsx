import Image from 'next/image'
import React, { useState } from 'react'



const Thumbnail = ({ images, open, setOpen, url }: any) => {

  return (
    <div className=' w-full h-full cursor-pointer  overflow-hidden rounded-[12px] z-[100]'>

      <div className='relative group w-full h-full  rounded-[12px] transition-transform duration-500 ease-in-out hover:scale-110 flex items-center justify-center'>
        <Image src={`${images!}`} alt="thumbNail" fill className='rounded-[12px]' />
        <div className='absolute'>
          <svg className='text-white group-hover:-translate-y-5 group-hover:duration-150 transition-colors fill-current group-hover:text-black' width="48" height="48" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M40.65 6.85019C36.0167 2.28353 30.3833 0.00019455 23.75 0.00019455C17.2833 0.00019455 11.6667 2.28353 6.9 6.85019C2.3 11.4502 0 17.0835 0 23.7502C0 30.4169 2.3 36.0335 6.9 40.6002C9.2 42.9335 11.7583 44.7002 14.575 45.9002C17.3917 47.1002 20.45 47.7002 23.75 47.7002C30.4833 47.7002 36.1167 45.3335 40.65 40.6002C45.2167 36.0335 47.5 30.4252 47.5 23.7752C47.5 17.1252 45.2167 11.4835 40.65 6.85019ZM39.15 8.35019C41.25 10.5169 42.8167 12.8669 43.85 15.4002C44.8833 17.9335 45.4 20.7169 45.4 23.7502C45.4 29.8835 43.3167 35.0169 39.15 39.1502C37.05 41.2835 34.7083 42.9002 32.125 44.0002C29.5417 45.1002 26.7417 45.6502 23.725 45.6502C20.7083 45.6502 17.9417 45.1169 15.425 44.0502C12.9083 42.9835 10.6167 41.3502 8.55 39.1502C6.45 37.0502 4.85 34.7085 3.75 32.1252C2.65 29.5419 2.1 26.7419 2.1 23.7252C2.1 20.7085 2.625 17.9335 3.675 15.4002C4.725 12.8669 6.35 10.5169 8.55 8.35019C10.65 6.25019 12.9833 4.64186 15.55 3.5252C18.1167 2.40853 20.8667 1.85019 23.8 1.85019C26.7333 1.85019 29.5 2.4002 32.1 3.50019C34.5667 4.60019 36.9167 6.21686 39.15 8.35019ZM20.65 18.3502V30.8502L30.85 24.6002L20.65 18.3502Z" />
          </svg>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center"
          onClick={() => setOpen(false)} 
        >
          <div
            className="relative w-[80%] h-[80%] bg-black rounded-xl"
            onClick={(e) => e.stopPropagation()} 
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-3 z-20 text-white text-xl"
            >
              ✕
            </button>

            <iframe
              className="w-full h-full rounded-xl"
              src={url}
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default Thumbnail
