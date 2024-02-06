/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Profile() {
  return (
    <div className=' mt-20 flex items-center space-x-4'>
        <img className=' w-20 h-20 rounded-full' src="/profile.jpg" alt="" />
        <div>
            <h3 className='text-[24px]'>hey, i'm ramim ahmed 👋</h3>
            <p className = "text-[#E8E5E5] text-[18px]" >javascript developer</p>
        </div>
    </div>
  )
}
