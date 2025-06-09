'use client';
import MobileFrame from '@/componemt/layout/MobileFrame'
import Image from 'next/image';
import titleImg from '@/public/0.start/titleLogo.png';
import startBtn from '@/public/0.start/startbtn.png';


export default function StartPage({nextStep}) {
  

  return (
   <>
      <MobileFrame>
        <div className= 'min-h-full w-full bg-gradient-to-b from-[#FFFFFF] to-[#FFDB63] flex justify-center items-center'>
          <div className= 'flex justify-center items-center flex-col gap-[50px] '>
            <Image src={titleImg} alt='title' width={260}/>
            <div className= 'text-[#B95F0F] font-[500] text-center text-[14px] leading-loose z-10'>
            你走進了一間溫暖又夢幻的法國甜點店，<br />
            櫃子裡滿是精緻甜點。<br />
            每一道都代表一種獨特的個性與靈魂——<br />
            現在就跟著直覺，選出你的答案，<br />
            看看你是哪一道迷人的法式甜點吧！
            </div>
            <Image onClick={nextStep} className= 'w-[160px] cursor-pointer hover:translate-y-0.5 transition z-10' src={startBtn} alt='starBtn' />
          </div>
        </div>
      </MobileFrame>
   </>
 
  );
}