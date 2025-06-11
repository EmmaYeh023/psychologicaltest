'use client';
import MobileFrame from '@/componemt/layout/MobileFrame';
import Image from 'next/image';
import { usePsyStore, useQuizStore } from '@/app/store/store.js';

export default function QuestionPage({ questionIndex, nextStep }) {
  const quizData = useQuizStore((state) => state);
  const psyData = usePsyStore((state) => state);
  
  const clickAnswer = function (option) {
    nextStep();
    psyData.updateScore(psyData.score + option.value);
    console.log(option.title, option.value);
  };

  

  return (
    < >
      <MobileFrame>
        {/* 圖片請直接引用 public 路徑 */}
        <div
            className="min-h-full w-full flex justify-center items-center p-[50px]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 0, 0, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 0, 0, 0.05) 1px, transparent 1px),
                linear-gradient(to bottom, #FFFFFF, #FFD9DA)
              `,
              backgroundSize: '20px 20px, 20px 20px, cover',
              backgroundBlendMode: 'normal',
            }}
          >

          <div className="flex flex-col items-center gap-[30px] z-10">
            
            <div className={`border-2  rounded-full w-[48px] h-[48px] mt-[15px]
              flex justify-center items-center font-bold text-xl text-[#FFFFFF] border-[#EA638C] bg-[#EA638C]`}>
              Q{questionIndex + 1}
            </div>

            <div className={`text-center font-bold text-3xl mb-[30px] text-[#89023E] `}>
              {quizData.quizs[questionIndex + 1].title}
            </div>

            
            {
              quizData.quizs[questionIndex + 1].options.map((option, index) => {
              let bgColor = "#FFD9DA";
              let shadowColor = "#000000";


              return (
                <div
                  key={option.title + "-" + index}
                  style={{
                    backgroundColor: bgColor,
                    boxShadow: `0px 3px 0px 1px rgba(0, 0, 0, 0.25)`,
                  }}
                  className={`w-full rounded-full text-[#7B5B5B]  border-1  border-[#000000]
                    py-[15px] text-sm flex justify-center items-center font-medium 
                    cursor-pointer hover:translate-y-0.5 transition`}
                  onClick={() => clickAnswer(option)}
                >
                  {option.title}
                </div>
              );
            })
            }
              
          </div>
        </div>

        

      
      </MobileFrame>
    </>
  );
}

