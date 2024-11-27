import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='bg-[url("/heroImg.png")] bg-no-repeat py-16 md:py-20 lg:py-32 lg:pl-[110px] md:pl-[90px] xl:pl-[120px] bg-cover w-full' >
      <div className='px-4 md:px-0 space-y-[10px] '>
        <h3 className='text-primary text-center md:text-start font-mon text-[16px] sm:text-2xl'>AI SDRs (aiDRs)</h3>
        <h2 className='text-[40px] italic text-center md:text-start md:leading-[78px] font-bold md:text-5xl mx-auto md:mx-0 lg:text-[64px] leading-[44px] md:w-[391px] w-[330px] md:font-medium font-mon'>More leads, less people.</h2>
        <p className='font-work w-full md:w-[450px] text-center md:text-start font-light text-[18px] md:text-[20px] leading-[23.4px] md:leading-[26px]'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
        <div className='flex items-center pt-3 justify-center md:justify-start'>
          <Button></Button>
        </div>
      </div>
    </section>
  )
}

export default Hero