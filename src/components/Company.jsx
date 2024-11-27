import React from 'react'

const Company = () => {
  return (
    <section className='bg-[#07292F] w-full -mt-1 py-6 md:py-8'>
        <div className='flex flex-col justify-center gap-[24px] items-center'>
            <h3 className='font-mon uppercase text-primary text-[16px] text-center'>our trusted partners</h3>
            <div className='grid grid-cols-2 gap-4 md:gap-8 md:grid-cols-3 lg:grid-cols-5'>
                <img src="BackHub logo.png" alt="" />
                <img src="CableLabs logo.png" alt="" />
                <img src="DBS logo.png" alt="" />
                <img src="EasyEuro logo.png" alt="" />
                <img src="AMD logo.png" alt="" />
            </div>
        </div>
    </section>
  )
}

export default Company