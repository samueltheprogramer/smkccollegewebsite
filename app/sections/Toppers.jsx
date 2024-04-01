"use client"

import React from 'react'
import Card from '../components/Card'

export default function Toppers() {
    const bcaTopper="venkat"
  return (
    <div className=' h-96 m-2 border border-b-2 grid lg:grid-cols-7 p-2'>
      <Card name={bcaTopper} course="BCA"/>
      <Card name="samuel" course="BCA"/>
      <Card name="samuel" course="BCA"/>
      <Card name="samuel" course="BCA"/>
      <Card name="samuel" course="BCA"/>
      <Card name="samuel" course="BCA"/>
      <Card name="samuel" course="BCA"/>
      <Card name="samuel" course="BCA"/>
      <Card name="samuel" course="BCA"/>
      <Card name="samuel" course="BCA"/>
      <Card name="samuel" course="BCA"/>
      <Card name="samuel" course="BCA"/>
      <Card name="samuel" course="BCA"/>
     <div className='text-center'>
        <button className='btn'>previous years toppers</button>
     </div>
      
    </div>
  )
}
