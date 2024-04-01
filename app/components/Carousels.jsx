'use client'
import React from 'react'
import { Carousel } from 'flowbite-react'
import Image from 'next/image';
export default function Carousels() {
  return ( 
    
    <div className=" h-56  lg:h-[500px]    ">
      <Carousel className=' p-0 m-0  ' slideInterval={2500} >
        <Image className=' lg:h-[500px] h-56  ' src="/smkc-slider-img-1.jpg" alt="image" width={1080} height={400} />
        <Image className=' lg:h-[500px] h-56  ' src="/smkc-slider-img-4.jpg" alt="image" width={1080} height={400} />
        <Image className=' lg:h-[500px] h-56  ' src="/smkc-slider-img-3.jpg" alt="image" width={1080} height={400} />
        <Image className=' lg:h-[500px] h-56  ' src="/smkc-slider-img-5.jpg" alt="image" width={1080} height={400} />
        <Image className=' lg:h-[500px] h-56  ' src="/smkc-slider-img-7.jpg" alt="image" width={1080} height={400} />
        
       
      </Carousel>
    </div>
  ); 
}

