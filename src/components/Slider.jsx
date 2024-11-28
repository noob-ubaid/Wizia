import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const Slider = () => {
  const slide = [
    {
      id: 1,
      image: "/quote.png",
      heading:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "John Doe",
      position: "Chief Strategy Officer @ Company",
    },
    {
      id: 2,
      image: "/quote.png",
      heading:
        "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "Ubaidur Rahman",
      position: "front end developer @ Company",
    },
    {
      id: 3,
      image: "/quote.png",
      heading:
        "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      name: "Rifat Ahmed ",
      position: "Designer @ Company",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slide.length - 1 : prevIndex - 1
    );
  };

  const NextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slide.length - 1 ? 0 : prevIndex + 1
    );
  };

  const { heading, position, name } = slide[currentIndex];

  return (
    <section className='bg-[#002228] w-full '>
      <div className='flex flex-col items-center justify-center lg:py-[96px] md:py-[80px] py-[60px]'>
        <img className='size-[74px]' src="quote.png" alt="" />
        <div className='flex items-center justify-around w-full pt-10'>
          <button className='hover:text-primary opacity-90 hover:opacity-100 p-2 text-[#96ACAF] transition-all bg-[#96ACAF33] rounded-md md:p-3' onClick={prevSlide}><FaArrowLeft /></button>
            <p className='lg:w-[930px] text-center md:w-[600px] w-[350px] font-work font-light lg:text-[32px] md:text-[28px] text-2xl leading-[31px] md:leading-[41px]'>{heading}</p>
          <button className='hover:text-primary opacity-90 hover:opacity-100 text-[#96ACAF] transition-all bg-[#96ACAF33] rounded-md p-2 md:p-3' onClick={NextSlide}><FaArrowRight /></button>
        </div>
        <p className='font-work pt-5 md:pt-8 lg:pt-10 font-semibold text-primary text-[18px] md:text-[20px] lg:text-[22px]'>{name}</p>
        <p className='font-work text-[#96ACAF] text-[16px] md:text-[18px] lg:text-[20px]'>{position}</p>
      </div>
    </section>
  )
}

export default Slider