/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Profile() {
  return (
    <div className=' mt-20 flex items-center space-x-4'>
        <img className=' w-20 h-20 rounded-full' src="/profile.jpg" alt="" />
        <div>
            <h3 className='text-2xl'>hi, i'm ramim ahmed 👋</h3>
            <p className = "text-slate-300 mt-1 text-base" >javascript developer</p>
        </div>
    </div>
  )
}
