'use client';
import MobileFrame from '@/componemt/layout/MobileFrame';
import { usePsyStore, useQuizStore } from '@/app/store/store.js';

export default function QuestionPage({ questionIndex, nextStep }) {
  const quizData = useQuizStore((state) => state);
  const usePsyStore = usePsyStore((state) => state);

  const clickAnswer = function (option) {
    nextStep();
    psyData.updateScore(psyData.score + option.value);
    console.log(option, title, option.value);
  };

  const getMainColor = function(perfix){

  };

  return (
    <>
      <MobileFrame>
        {/* 圖片請直接引用 public 路徑 */}
        <img className="absolute top-0 -translate-y-1/2" src="/1.quiz/blur-circleG.png" alt="blur-circleG" />

        <div className="flex flex-col items-center gap-[26px]">
          <img src="/1.quiz/quaso-up1.png" className="w-[88px]" alt="quaso-up1" />

          <div className="text-[#90B62A] border-2 border-[#90B62A] rounded-full w-[48px] h-[48px]
            flex justify-center items-center font-bold text-xl">
            Q{questionIndex + 1}
          </div>

          <div className="text-center font-bold text-3xl b-[60px] ${getMainColor('text')}" >
            {quizData.quizs[questionIndex + 1].title}
          </div>

          {quizData?.quizs?.[questionIndex + 1]?.options?.map((option, index) => (
            <div
              key={option.title}
              className="bg-[#BEE351] w-full rounded-full text-white 
                py-[16px] text-sm flex justify-center items-center font-medium 
                shadow-[0px_4px_0px_1px_#90B62A] cursor-pointer hover:translate-y-0.5 transition"
              onClick={() => clickAnswer(option)}
            >
              {option.title}
            </div>
          ))}

          <img src="/1.quiz/quaso-down1.png" className="w-[88px]" alt="quaso-down1" />
        </div>

        <img className="absolute bottom-0 translate-y-1/2" src="/1.quiz/blur-circleG.png" alt="blur-circleG" />
      </MobileFrame>
    </>
  );
}

