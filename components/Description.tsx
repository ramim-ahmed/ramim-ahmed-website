/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Description() {
  return (
    <div className='mt-16'>
        <p className=' text-stone-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nulla tempore cupiditate eveniet velit consequatur placeat natus, laborum deserunt sequi pariatur labore dolorum minima odio! Cumque, quam et quis fugit enim illo sed repellendus eveniet magnam voluptatibus ut, inventore aut</p>
        <div className='mt-16 lg:flex gap-5'>
            <img className='lg:w-1/3 object-cover h-[450px] rounded-lg' src="/me1.jpg" alt="" />
            <img className='lg:w-1/3 object-cover h-[450px] rounded-lg' src="/device.jpg" alt="" />
            <img className='lg:w-1/3 object-cover h-[450px] rounded-lg' src="/me1.jpg" alt="" />
        </div>
        <p className='mt-16 text-stone-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, nulla tempore cupiditate eveniet velit consequatur placeat natus, laborum deserunt sequi pariatur labore dolorum minima odio! Cumque, quam et quis fugit enim illo sed repellendus eveniet magnam voluptatibus ut, inventore aut</p>
    </div>
  )
}
