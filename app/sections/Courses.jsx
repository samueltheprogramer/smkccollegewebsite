import React from 'react'

export default function Courses() {
  return (
    <div className='bg-green-400 border w-full h-auto p-2'>
        <div className='flex-center'>
        <h1 className='bg-white text-xl rounded-xl shadow-lg'>Cources offered</h1>
        </div>
        <div className='flex items-center justify-center h-32 '>
        <h3 className='lg:text-[50px] text-[30px] text-white font-extrabold lg:mx-5 m-1'>ug 13</h3>
        <h1 className='lg:text-[50px] text-black font-extrabold lg:mx-5 m-1'>+</h1>
        <h3 className='lg:text-[50px] text-[30px] text-white font-extrabold lg:mx-5 m-1'>pg 1</h3>
        <button className='btn btn-outline ml-10'>more details</button>
        </div>
        
    </div>
  )
}
