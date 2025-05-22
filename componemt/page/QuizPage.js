'use client';
import MobileFrame from '@/componemt/layout/MobileFrame';
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
    <>
      <MobileFrame>
        {/* 圖片請直接引用 public 路徑 */}
        <img className="absolute top-0 -translate-y-1/2" src="/1.quiz/blur-circleG.png" alt="blur-circleG" />

        <div className="flex flex-col items-center gap-[26px]">
          <img src="/1.quiz/quaso-up1.png" className="w-[88px]" alt="quaso-up1" />

          <div className={`border-2  rounded-full w-[48px] h-[48px]
            flex justify-center items-center font-bold text-xl ${ questionIndex === 0
                ? 'text-[#90B62A] border-[#90B62A]'
                : questionIndex === 1
                ? 'text-[#DD3E3E] border-[#DD3E3E'
                : 'text-[#1098EC] border-[#1098EC' }`}>
            Q{questionIndex + 1}
          </div>

          <div className={`text-center font-bold text-3xl mb-[60px] ${
                questionIndex === 0
                  ? 'text-[#90B62A]'
                  : questionIndex === 1
                  ? 'text-[#DD3E3E]'
                  : 'text-[#1098EC]'
              } `}>
            {quizData.quizs[questionIndex + 1].title}
          </div>

          {
            quizData.quizs[questionIndex + 1].options.map((option, index) => {
            
            return(
              <>
                {
                  questionIndex == 0 && <div
                className={` bg-[#90B62A] w-full rounded-full text-white 
                  py-[16px] text-sm flex justify-center items-center font-medium 
                  shadow-[0px_4px_0px_1px_#90B62A] cursor-pointer hover:translate-y-0.5 transition`}
                onClick={() => clickAnswer(option)}
                key={option.title + "green"}
                >{option.title}
                </div>
              }

                {
                  questionIndex == 1 && <div
                className={` bg-[#DD3E3E] w-full rounded-full text-white 
                  py-[16px] text-sm flex justify-center items-center font-medium 
                  shadow-[0px_4px_0px_1px_#8D4509] cursor-pointer hover:translate-y-0.5 transition`}
                onClick={() => clickAnswer(option)}
                key={option.title + "red"}
                >{option.title}
                </div>
              }

                {
                  questionIndex == 2 && <div
                className={` bg-[#89BCFF] w-full rounded-full text-white 
                  py-[16px] text-sm flex justify-center items-center font-medium 
                  shadow-[0px_4px_0px_1px_#1098EC] cursor-pointer hover:translate-y-0.5 transition`}
                onClick={() => clickAnswer(option)}
                key={option.title + "blue"}
                >{option.title}
                </div>
              }
              </>
            )
            
            })
          }


          <img src="/1.quiz/quaso-down1.png" className="w-[88px]" alt="quaso-down1" />
        </div>

        <img className="absolute bottom-0 translate-y-1/2" src="/1.quiz/blur-circleG.png" alt="blur-circleG" />
      </MobileFrame>
    </>
  );
}

