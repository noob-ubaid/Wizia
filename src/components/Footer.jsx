import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-[#07292F] lg:px-[120px] gap-6 lg:py-10 md:py-8 py-6 md:px-[100px] px-10 flex flex-col md:flex-row items-center justify-between'>
        <img className='w-[72px] h-4' src="footer.png" alt="" />
        <p className='font-work font-light text-[16px] text-[#96ACAF]'>Copyright © 2023 Wizia. All rights reserved.</p>
    </footer>
  )
}

export default Footer