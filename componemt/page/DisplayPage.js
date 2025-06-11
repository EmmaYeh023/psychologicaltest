'use client';
import MobileFrame from '@/componemt/layout/MobileFrame';
import Image from 'next/image';
import displayImg from '@/public/3.display/displayTitle.png';

export default function DisplayPage({nextStep}) {
  

  return (
   <>
       <MobileFrame>
        <div className= 'min-h-full w-full flex justify-center items-center bg-gradient-to-b from-[#FFFFFF] to-[#FFD9DA] p-[50px]'>
          <div className= 'flex justify-center items-center flex-col gap-[50px]'>
          <Image src={displayImg} alt='displayCake' width={170}/>
        
          <div className={` bg-[#EA638C] w-full rounded-full text-white 
            py-[15px] text-1xl flex justify-center items-center font-bold 
            shadow-[0px_4px_0px_1px_#89023E] cursor-pointer hover:translate-y-0.5 transition`}
            onClick = {nextStep} >
          查看結果</div>

          </div>
        </div>
        

          
        
      </MobileFrame>
   </>
 
  );
}