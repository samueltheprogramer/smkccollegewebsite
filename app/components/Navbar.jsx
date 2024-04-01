"use client"
import React from 'react'
import Drawer from './Drawer';
import Image from 'next/image';

export default function Navbar() {
  return (
    <React.Fragment>
      
    <div className="navbar shadow-lg fixed top-6 border-2 border-black bg-red-400 z-30">
  <div className="flex-1 ">
  <Image src="/SmkcLogo.png" height={ 50} width={53} alt='Smkc logo' /> 
    <h1 className="font-serif lg:text-3xl text-md lg:pl-[300px] flex-center lg:uppercase ">Sree Muthukumarasamy college</h1>
  </div>
  <div className="flex-none ">
  <Drawer/>
  </div>
 {/*  
    <button className="btn btn-square btn-ghost px-10 hover:ring-2 ring-black">
    <MenuIcon fontSize="large" />
    </button>
  </div> */}
</div>

    </React.Fragment>
  )
}
