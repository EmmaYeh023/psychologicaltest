'use client';
import MobileFrame from '@/componemt/layout/MobileFrame'
import { usePsyStore } from '@/app/store/store';
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

        

        </div>
      </MobileFrame>
   </>
 
  );
}