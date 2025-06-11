'use client';
import MobileFrame from '@/componemt/layout/MobileFrame'
import Image from 'next/image';
import title from '@/public/0.start/title.png';
import titleImg from '@/public/0.start/startImg.png';
import startBtn from '@/public/0.start/startBtn.png';


export default function StartPage({nextStep}) {
  

  return (
   <>
      <MobileFrame>
        <div className= 'min-h-full w-full bg-gradient-to-b from-[#FFFFFF] to-[#FFD9DA] flex justify-center items-center'>
          <div className= 'flex justify-center items-center flex-col gap-[50px] '>
            <Image src={title} alt='title' width={260}/>
            <Image src={titleImg} alt='titleI' width={200}/>
            <Image onClick={nextStep} className= 'w-[200px] cursor-pointer hover:translate-y-0.5 transition z-10' src={startBtn} alt='starBtn' />
          </div>
        </div>
      </MobileFrame>
   </>
 
  );
}