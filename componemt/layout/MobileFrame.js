'use client';
import React from 'react';

export default function MobileFrame({children}) {
  

  return (
   <>
    <div className=" w-[33%] min-w-[380px]  h-[95%] min-h-[750px] p-[52px] bg-white flex justify-center items-center rounded-2xl relative overflow-hidden   ">
        {children}
      </div>
   </>
 
  );
}