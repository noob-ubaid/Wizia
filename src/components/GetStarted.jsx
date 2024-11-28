import React from 'react'
import Button from './Button'
const GetStarted = () => {
  return (
    <section className='bg-[#002228] w-full flex items-center justify-center'>
        <div className='py-14 md:py-20 lg:py-24'>
            <h4 className='uppercase font-mon text-primary text-center text-[16px] md:text-lg lg:text-[20px]'>Get started</h4>
            <p className='font-medium font-mon italic text-4xl pt-3 text-center w-full md:px-0 px-8'>Embrace the new era of outbound.</p>
            <p className='font-light text-center mx-auto font-work text-lg md:text-[20px] lg:w-[1200px] w-full px-4 pt-3 md:pt-6 md:px-0'>Wizia lets you train, activate, and optimize aiDRs.<br/>
            Take your outbound to new levels of performance and efficiency.</p>
            <div className='flex items-center justify-center pt-6'>
                <Button></Button>
            </div>
        </div>
    </section>
  )
}

export default GetStarted;