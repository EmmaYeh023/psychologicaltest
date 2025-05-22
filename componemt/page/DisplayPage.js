'use client';
import MobileFrame from '@/componemt/layout/MobileFrame';
import Image from 'next/image';
import circleY from '@/public/0.start/blur-circleY.png';
import displayQuaso from '@/public/3.display/displayQuaso.png';

export default function DisplayPage({nextStep}) {
  

  return (
   <>
       <MobileFrame>
      
        <div className= 'flex justify-center items-center flex-col gap-[60px]'>
        <Image className=' w-[450px] absolute top-0 -translate-y-1/2 ' src={circleY} alt='circleY' />
        <Image src={displayQuaso} alt='displayQuaso' />
       
        <div className={` bg-[#B65A0F] w-full rounded-full text-white 
          py-[16px] text-1xl flex justify-center items-center font-bold 
          shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-0.5 transition`}
          onClick = {nextStep}>
         查看結果</div>

          <Image className=' absolute bottom-0 translate-y-1/2 w-[450px]' src={circleY} alt='circleY' />
        </div>

          
        
      </MobileFrame>
   </>
 
  );
}