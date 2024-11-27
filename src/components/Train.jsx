import React from 'react'

const Train = () => {
    const list = [
        {
          img:"check.png",
          title: "Quick to ramp",
        },
        {
            img:"check.png",
          title: "Easy to optimize",
        },
        {
            img:"check.png",
          title: "Quick to scale up",
        },
        {
            img:"check.png",
          title: "Works with all your existing tools",
        },
      ];
  return (
    <section className='bg-[url("/train.png")] bg-no-repeat  px-4 md:px-0 bg-cover flex items-center justify-center w-full'>
        <div className='rounded-md bg-[#07292F] lg:py-[110px] text-center md:text-left md:py-[90px] py-[60px]'>
            <h3 className='lg:font-semibold lg:text-[40px] md:text-4xl text-[28px] font-mon'>Train your aiDR on your...</h3>
            <p className='italic lg:text-[40px] mt-1 md:mt-2 md:text-4xl text-[28px] font-mon text-primary font-medium '>prefered email st|</p>
            <p className='font-light md:w-[450px] mt-6 md:mt-[30px] w-full lg:text-2xl font-work text-lg leading-[23px] md:leading-[31px]'>You’re in control. Train your aiDR on elements of your Marketing strategy.</p>
            <div className='grid grid-cols-1 mt-10 md:mt-14 lg:mt-[60px] md:grid-cols-2 gap-3'>
                {
                    list.map((data,index) => (
                        <div key={index} className='flex gap-3 items-center'>
                            <img src={data.img} alt="" />
                            <p className='text-[#14BCB2] font-medium text-[16px] font-mon md:text-[20px]'>{data.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Train