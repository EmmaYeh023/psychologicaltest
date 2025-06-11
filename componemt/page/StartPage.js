'use client';
import MobileFrame from '@/componemt/layout/MobileFrame'
import Image from 'next/image';
import title from '@/public/0.start/title.png';
import titleImg from '@/public/0.start/startImg.png';



export default function StartPage({nextStep}) {
  

  return (
   <>
      <MobileFrame>
        <div className= 'min-h-full w-full bg-gradient-to-b from-[#FFFFFF] to-[#FFD9DA] flex justify-center items-center'>
          <div className= 'flex justify-center items-center flex-col gap-[50px] '>
            <Image src={title} alt='title' width={260}/>
            <Image src={titleImg} alt='titleI' width={200}/>
            <div
            className={` bg-[#EA638C] w-[200px] rounded-full text-white 
            py-[15px] text-lg flex justify-center items-center font-bold 
            shadow-[0px_4px_0px_1px_#89023E] cursor-pointer hover:translate-y-0.5 transition mt-[30px]`}
            onClick = {nextStep}
          > START</div>
          </div>
        </div>
      </MobileFrame>
   </>
 
  );
}