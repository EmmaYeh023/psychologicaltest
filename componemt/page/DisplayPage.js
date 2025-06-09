'use client';
import MobileFrame from '@/componemt/layout/MobileFrame';
import Image from 'next/image';
import displayCake from '@/public/3.display/cakeLogo.png';

export default function DisplayPage({nextStep}) {
  

  return (
   <>
       <MobileFrame>
        <div className= 'min-h-full w-full flex justify-center items-center bg-gradient-to-b from-[#FFFFFF] to-[#FFDB63] p-[50px]'>
          <div className= 'flex justify-center items-center flex-col gap-[50px]'>
          <Image src={displayCake} alt='displayCake' width={200}/>
        
          <div className={` bg-[#B65A0F] w-full rounded-full text-white 
            py-[16px] text-1xl flex justify-center items-center font-bold 
            shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-0.5 transition`}
            onClick = {nextStep} >
          查看結果</div>

          </div>
        </div>
        

          
        
      </MobileFrame>
   </>
 
  );
}