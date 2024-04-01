import React from 'react'
import Navbar from '../components/Navbar'
import NewsHeading from '../components/NewsHeading'

export default function Header() {
  return (
    <React.Fragment >
    <div className='h-[15vh] z-20 '>
       <NewsHeading/>
      <Navbar/>
      </div>
    </React.Fragment>
  )
}
