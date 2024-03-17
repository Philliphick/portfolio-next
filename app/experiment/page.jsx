"use client"
import React from 'react'

export default function page () {
  return (
   <div className="flex justify-center items-center h-screen w-screen bg-gradient-to-r from-orange-500 via-black to-cyan-500 mx-auto">
    <div className='w-screen h-screen flex flex-row place-content-between px-4 '>
        <div className='w-1/3 h-full bg-gradient-to-r from-orange-500 via-black to- opacity-50 hover:opacity-100'>
            <h1 className='text-3xl text-center font-bold text-black p-4 opacity-100 z-10'>Tech Stack:</h1></div>
       
        <div className='w-1/3 h-full bg-gradient-to-l from-cyan-500 via-black opacity-50 hover:opacity-100'></div>
        
    </div>
    <div className='absolute text-white flex flex-col justify-center items-center'>
    <h1 className='text-7xl'>CodeCollab</h1>
    <h2 className='text-xl'>Platform for collaboration among developers</h2>
    </div>
</div>
  )
}
