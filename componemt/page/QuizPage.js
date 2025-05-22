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
        <img className="absolute top-0 -translate-y-1/2 z-0" src={
                questionIndex === 0
                  ? '/1.quiz/blur-circleG.png'
                  : questionIndex === 1
                  ? '/1.quiz/blur-circleR.png'
                  : '/1.quiz/blur-circleB.png'
              }  alt="blur-circleG" />

        <div className="flex flex-col items-center gap-[30px] z-10">
          <img src={
                questionIndex === 0
                  ? '/1.quiz/quaso-up1.png'
                  : questionIndex === 1
                  ? '/1.quiz/quaso-up2.png'
                  : '/1.quiz/quaso-up3.png'
              } className="w-[88px]" alt="quaso-up" />

          <div className={`border-2  rounded-full w-[48px] h-[48px] mt-[15px]
            flex justify-center items-center font-bold text-xl ${ questionIndex === 0
                ? 'text-[#90B62A] border-[#90B62A]'
                : questionIndex === 1
                ? 'text-[#DD3E3E] border-[#DD3E3E]'
                : 'text-[#1098EC] border-[#1098EC]' }`}>
            Q{questionIndex + 1}
          </div>

          <div className={`text-center font-bold text-3xl mb-[30px] ${
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
            

          <img src={
                questionIndex === 0
                  ? '/1.quiz/quaso-down1.png'
                  : questionIndex === 1
                  ? '/1.quiz/quaso-down2.png'
                  : '/1.quiz/quaso-down3.png'
              } className="w-[88px] mt-[24px]" alt="quaso-down" />
        </div>

        <img className="absolute bottom-0 translate-y-1/2  z-0 " src={
                questionIndex === 0
                  ? '/1.quiz/blur-circleG.png'
                  : questionIndex === 1
                  ? '/1.quiz/blur-circleR.png'
                  : '/1.quiz/blur-circleB.png'
              } alt="blur-circle" />
      </MobileFrame>
    </>
  );
}

