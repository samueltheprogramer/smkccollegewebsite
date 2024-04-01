
import React from 'react'
import { IoPeopleOutline } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";
import { GrCertificate } from "react-icons/gr";
import { FiClock } from "react-icons/fi";

export default function About() {
  return (
    <div className='h-auto border-2 boredr-black m-2'>
      <div className='grid lg:grid-cols-2 gap-5'>
  <div className=' w-full h-auto flex flex-col items-center justify-around '>
<div  className='m-5'>
  <h1 className='text-lg lg:text-xl font-serif font-extrabold m-2'>Sree Muthukumarswamy College:</h1>
  <p className='lg:text-lg text-md '>Establishment with a vision for man-making, character-building, and value-based education Notable achievement in less than two decades.
Initial enrollment growth from a handful to serving the academic needs of over 3500 boys and girls.A team of 150 dedicated teachers contributing to the scholastic dimension of North Chennai.</p>
</div>
<div className='m-5'>
  <h1 className='text-lg lg:text-xl font-serif font-extrabold m-2'>Educational Impact:</h1>
  <p className='lg:text-lg text-md '>Significance in providing quality education, contributing to the character and values of the rising generation.
A testament to the success and impact of Sree Muthukumaraswamy Devasthanam Educational Society.</p>
<button className='btn bg-green-400'>About us</button>
</div>
  </div>
  <div className=' w-full h-auto '>
      <div className='grid lg:grid-cols-2 lg:grid-rows-2 justify-center items-center gap-2'>
        <div className='flex  '>
        <div className='shadow-lg lg:w-[270px] lg:h-[150px] w-full border flex-center m-5'>
          <div>
          <IoPeopleOutline className=' bg-red-200 lg:w-24 lg:h-24 w-16 h-16 rounded-full m-5' />
          </div>
          <div className='m-2'>
          <h1>3500+</h1>
          <h3>Delighted Students </h3>
        </div>
        </div>
        
        </div>
        <div className='flex '>
        <div className='shadow-lg lg:w-[270px] lg:h-[150px] w-full border flex-center m-5'>
          <div>
          <GiTeacher className=' bg-red-200 lg:w-24 lg:h-24 w-16 h-16 rounded-full m-5' />
          </div>
          <div className='m-2'>
          <h1>3500+</h1>
          <h3>Delighted Students </h3>
        </div>
        </div>
        
        </div>
        <div className='flex '>
        <div className='shadow-lg lg:w-[270px] lg:h-[150px] w-full border flex-center m-5'>
          <div>
          <GrCertificate className=' bg-red-200 lg:w-24 lg:h-24 w-16 h-16 rounded-full m-5' />
          </div>
          <div className='m-2'>
          <h1>3500+</h1>
          <h3>Delighted Students </h3>
        </div>
        </div>
        
        </div>
        <div className='flex '>
        <div className='shadow-lg lg:w-[270px] lg:h-[150px] w-full border flex-center m-5'>
          <div>
          <FiClock className=' bg-red-200 lg:w-24 lg:h-24 w-16 h-16 rounded-full m-5' />
          </div>
          <div className='m-2'>
          <h1>3500+</h1>
          <h3>Delighted Students </h3>
        </div>
        </div>
        
        </div>
        
      </div>
  </div>
      </div>
    </div>
  )
}
