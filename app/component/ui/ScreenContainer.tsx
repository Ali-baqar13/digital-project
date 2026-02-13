import React from 'react'

interface prop{
    className?:string,
    children:React.ReactNode
}
const ScreenContainer = (
    {className,children}:prop
) => {
  return (
    <div className={`${className} mx-auto max-w-[1440px] w-full px-[20px]`}>

        {children}
      
    </div>
  )
}

export default ScreenContainer
