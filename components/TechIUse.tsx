import React from 'react'
const skills:string[] = ["javascript", 'typescript', 'react', 'react-native', 'redux', 'next.js', 'node', 'express', 'mongodb', 'postresql', 'prisma', 'tailwindcss', 'shadcnui']
export default function TechIUse() {
  return (
    <div className='mt-20'>
        <h3 className='text-xl'>tech i use 😍</h3>
        <div className='mt-4'>
            {
                skills.map( (tech) => <button key={tech} className='mr-6 mt-4 text-slate-300 border-slate-400 border rounded-sm px-5 py-1 bg-[#0e0e0e75]'>{tech}</button>)
            }
        </div>
    </div>
  )                    
}
