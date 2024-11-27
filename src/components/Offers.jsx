import React from 'react'

const Offers = () => {
    const list = [
        {
          image: "/magic-want.png",
          title: "You're in Control",
          description:
            "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
        },
        {
          image: "/graph.png",
          title: "Infinitely Scalable",
          description:
            "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
        },
        {
          image: "/arrow.png",
          title: "Incredibly Flexible",
          description:
            "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
        },
      ];
  return (
    <section className='bg-[#002228] w-full flex px-4 lg:pt-[120px] md:pt-[100px] pt-16 md:px-0 justify-center items-center md:gap-8 gap-6 flex-col lg:flex-row'>
        {
            list.map((data,index) =>(
                <div key={index} className='md:w-[384px] w-full space-y-4 md:mb-20 lg:mb-28 mb-14 px-4 py-6 h-[254px]'>
                    <img className='w-[52px] h-[50px]' src={data.image} alt="" />
                    <h4 className='font-mon text-[24px] md:text-[28px] font-semibold'>{data.title}</h4>
                    <p className='font-light font-work text-[18px] md:text-[20px] leading-[26px]'>{data.description}</p>
                </div>
            ))
        }
    </section>
  )
}

export default Offers