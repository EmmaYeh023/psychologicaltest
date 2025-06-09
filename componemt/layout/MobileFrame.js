'use client';
import React from 'react';

export default function MobileFrame({children}) {
  

  return (
   <>
    <div className=" w-[380px] min-w-[380px]  h-[750px] min-h-[750px] bg-white flex justify-center items-center rounded-2xl relative overflow-hidden   ">
        {children}
      </div>
   </>
 
  );
}