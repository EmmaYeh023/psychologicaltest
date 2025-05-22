'use client';
import MobileFrame from '@/componemt/layout/MobileFrame'
import { usePsyStore } from '@/app/store/store';
import Image from 'next/image';
import result1 from '@/public/4.result/result-1.png';
import result2 from '@/public/4.result/result-2.png';
import result3 from '@/public/4.result/result-3.png';

export default function ResultPage() {
  
  const psyState = usePsyStore( (state) => state );

  const playAgain = function(){
    window.location.reload();
  }

  return (
   <>
      <MobileFrame>
        <div>
          {
          psyState.score < 6 && 
          <Image src={result1} alt='result-1' />
          }

          {
          (psyState.score >= 6 && psyState.score < 8) && 
          <Image src={result2} alt='result-2' />
          }

          {
          psyState.score >= 8 && 
          <Image src={result3} alt='result-3' />
          }

        <div
          className={` bg-[#B65A0F] w-full rounded-full text-white 
          py-[16px] text-sm flex justify-center items-center font-medium 
          shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-0.5 transition`}
          onClick = {playAgain}
        > 再玩一次</div>
        
        </div>
      </MobileFrame>
   </>
 
  );
}