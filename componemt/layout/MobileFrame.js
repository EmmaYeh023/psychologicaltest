'use client';
import React from 'react';

export default function MobileFrame({children}) {
  

  return (
   <>
    <div className="w-[393px] h-[852px]  bg-white rounded-2x1 flex justify-center items-center ">
        {children}
      </div>
   </>
 
  );
}