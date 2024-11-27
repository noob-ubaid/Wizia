import React from 'react'
import { LuArrowUpRightSquare } from "react-icons/lu";
const Button = () => {
  return (
    <button className='bg-primary flex gap-2 items-center rounded-full text-[#002228] text-[16px] font-medium font-work px-[18px] py-4'>
        Sign Up for the Beta
        <LuArrowUpRightSquare />
    </button>
  )
}

export default Button