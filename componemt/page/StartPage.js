'use client';
import MobileFrame from '@/componemt/layout/MobileFrame'
import Image from 'next/image';
import titleImg from '@/public/0.start/title.svg';
import startBtn from '@/public/0.start/startbtn.png';
import circleY from '@/public/0.start/blur-circleY.png';

export default function StartPage({nextStep}) {
  

  return (
   <>
      <MobileFrame>
        <div className= 'flex justify-center items-center flex-col gap-[60px]'>
          <Image className=' w-[450px] absolute top-0 -translate-y-1/2 z-0' src={circleY} alt='circleY' />
          <Image src={titleImg} alt='title' />
          <div className= 'text-[#B95F0F] font-[500] text-center text-[14px] leading-loose z-10'>
          每個人心裡，都藏著一顆剛出爐的可頌。
          是酥脆溫柔的原味？
          鹹香實在的內餡？
          還是甜蜜創意的變化款？
          跟著這三道問題，找出你的可頌靈魂——
          並遇見屬於你的療癒系角色，
          看看你是哪一種讓人一口愛上的「可頌人
          </div>
          <Image onClick={nextStep} className= 'w-[160px] cursor-pointer hover:translate-y-0.5 transition z-10' src={startBtn} alt='starBtn' />
          <Image className=' absolute bottom-0 translate-y-1/2 w-[450px] z-0' src={circleY} alt='circleY' />
        </div>
      </MobileFrame>
   </>
 
  );
}