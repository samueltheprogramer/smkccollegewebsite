'use client'
import Image from 'next/image'
import React from 'react'

export default function Footer() {
  return (
    <div className='bg-gray-100  h-[auto] w-full'>
    <div className=' grid lg:grid-cols-4 grid-cols-2  place-content-center place-items-center gap-4  '>
      <div  >
      <Image src="/SmkcLogo.png" height={ 50} width={53} alt='Smkc logo' /> 
      <h1 className='text-[10px]'>Sree Muthukumarasamy college</h1>
      <h2>since 1990</h2>
      </div>
      <div>
        <h1 className='text-red-500 text-xl font-extrabold '>Locate Us</h1>
       <h1 className="">no:44</h1>
       <h1 className="">that road</h1>
       <h1 className="">mutamil nagar</h1>
       <h1 className="">chennai-600118</h1>
       <h1 className="">Tamil Nadu</h1>
      </div>
      <div >
         <h1  className='text-red-500 text-xl font-extrabold '>contact Us</h1>
         <h1>email</h1>
         <h1>number</h1>
      </div>
      <div>
          <h1  className='text-red-500 text-xl font-extrabold '>working Hours</h1>
          <h1>Office</h1>
          <h1>timing</h1>
          <h1>college</h1>
          <h1>timing</h1>
      </div> 
    </div>
    <div className='w-full p-5 border'>
      <h1 className='border-x-4 w-52'>Crafted by Samuel -BCA</h1>
    </div>
    </div>
  )
}
