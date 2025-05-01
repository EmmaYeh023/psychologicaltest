'use client';
import React from 'react';

export default function CalenderPage({year, month, day, date}) {
  

  return (
    <div className= 'relative bg-white w-[320px] h-[480px] rounded-2xl flex items-center justify-center flex-col text-[#4C37AC] p-6'>
        <div>
          <div className='absolute top-4 left-4 '> {year} </div>
          <div className='absolute top-4 right-4'> {month} </div>
        </div>
        <div className=' text-[240px] font-extrabold'> {day} </div>
        <div className=' text-[60px]'> {date} </div>
      </div>
 
  )}