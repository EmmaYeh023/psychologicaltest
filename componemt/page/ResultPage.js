'use client';
import MobileFrame from '@/componemt/layout/MobileFrame'
import { usePsyStore } from '@/app/store/store';
import Image from 'next/image';
import result1 from '@/public/4.result/result-1.png';
import result2 from '@/public/4.result/result-2.png';
import result3 from '@/public/4.result/result-3.png';
import circleY from '@/public/0.start/blur-circleY.png';

export default function ResultPage() {
  
  const psyState = usePsyStore( (state) => state );

  const playAgain = function(){
    window.location.reload();
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: '我剛做了一個有趣的心理測驗！',
          text: '快來看看你的結果是什麼！',
          url: window.location.href, // 分享目前頁面
        })
        .then(() => console.log('分享成功'))
        .catch((error) => console.error('分享失敗', error));
    } else {
      alert('目前裝置不支援分享功能，請手動複製連結。');
    }
  };

  return (
   <>
      <MobileFrame>
        <div className='z-10 '> 
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
          
          <div className='text-[#B95F0F] font-[500] text-center text-[14px] leading-loose mt-[8px]'>長按或截圖可保存結果</div>
          <div className="flex flex-row gap-[10px] w-full">
            <div
            className={` bg-[#B65A0F] w-full rounded-full text-white 
            py-[15px] text-sm flex justify-center items-center font-medium 
            shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-0.5 transition mt-[30px]`}
            onClick = {playAgain}
          > 再玩一次</div>
            
            <div
            className={` bg-[#B65A0F] w-full rounded-full text-white 
            py-[15px] text-sm flex justify-center items-center font-medium 
            shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-0.5 transition mt-[30px]`}
            onClick = {handleShare}
          > 分享測驗</div>
          </div>
           
        </div>
        <Image className=' absolute bottom-0 translate-y-1/2 w-[450px] z-0' src={circleY} alt='circleY' /> 
      </MobileFrame>
   </>
 
  );
}