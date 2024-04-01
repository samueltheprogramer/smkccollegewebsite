import Image from 'next/image'
import React from 'react'

export default function Card({name,image,course}) {
  return (
    <div className=''>
      <h1>{course}</h1>
       <div className='h-32 w-32 border border-black '>

       </div>
       <h1>{name}</h1>
       
</div>
  )
}
