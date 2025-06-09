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
        <div className={`min-h-full w-full flex justify-center items-center bg-gradient-to-b p-[50px]
        ${ questionIndex === 0
        ? 'from-[#FFFFFF] to-[#D3F180]'       // 綠
        : questionIndex === 1
        ? 'from-[#FFFFFF] to-[#F2B8B8]'       // 紅
        : questionIndex === 2
        ? 'from-[#FFFFFF] to-[#89D2FF]'       // 藍
        : questionIndex === 3
        ? 'from-[#FFFFFF] to-[#C4A6FF]'       // 紫
        : 'from-[#FFFFFF] to-[#FFC889]'      }`}>

          <div className="flex flex-col items-center gap-[30px] z-10">
            <img src={
                  questionIndex === 0
                    ? '/1.quiz/dessertLineG.png'
                    : questionIndex === 1
                    ? '/1.quiz/dessertLineR.png'
                    : questionIndex === 2
                    ?'/1.quiz/dessertLineB.png'
                    : questionIndex === 3
                    ?'/1.quiz/dessertLineP.png'
                    :'/1.quiz/dessertLineY.png'
                } className="w-full" alt="dessertLine" />

            <div className={`border-2  rounded-full w-[48px] h-[48px] mt-[15px]
              flex justify-center items-center font-bold text-xl ${ questionIndex === 0
                  ? 'text-[#90B62A] border-[#90B62A]'
                  : questionIndex === 1
                  ? 'text-[#DD3E3E] border-[#DD3E3E]'
                  : questionIndex === 2
                  ?'text-[#1098EC] border-[#1098EC]'
                  : questionIndex === 3
                  ?'text-[#7805C9] border-[#7805C9]'
                  :'text-[#E85500] border-[#E85500]'
                }`}>
              Q{questionIndex + 1}
            </div>

            <div className={`text-center font-bold text-3xl mb-[30px] ${
                  questionIndex === 0
                    ? 'text-[#90B62A]'
                    : questionIndex === 1
                    ? 'text-[#DD3E3E]'
                    : questionIndex === 2
                  ?'text-[#1098EC]'
                  : questionIndex === 3
                  ?'text-[#7805C9]'
                  :'text-[#E85500]'
                } `}>
              {quizData.quizs[questionIndex + 1].title}
            </div>

            
            {
              quizData.quizs[questionIndex + 1].options.map((option, index) => {
              let bgColor = "";
              let shadowColor = "";

              if (questionIndex === 0) {
                bgColor = "#BEE351";
                shadowColor = "#90B62A";
              } else if (questionIndex === 1) {
                bgColor = "#DD3E3E";
                shadowColor = "#8D4509";
              } else if (questionIndex === 2) {
                bgColor = "#89BCFF";
                shadowColor = "#1098EC";
              }else if (questionIndex === 3) {
                bgColor = "#D689FF";
                shadowColor = "#7805C9";
              }else if (questionIndex === 4) {
                bgColor = "#FFAF3E";
                shadowColor = "#E85500";
              }

              return (
                <div
                  key={option.title + "-" + index}
                  style={{
                    backgroundColor: bgColor,
                    boxShadow: `0px 4px 0px 1px ${shadowColor}`
                  }}
                  className={`w-full rounded-full text-white 
                    py-[16px] text-sm flex justify-center items-center font-medium 
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

