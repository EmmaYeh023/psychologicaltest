'use client';

import Image from 'next/image';
import StartPage from '@/componemt/page/StartPage';
import QuestionPage from '@/componemt/page/QuizPage';
import DisplayPage from '@/componemt/page/DisplayPage';
import ResultPage from '@/componemt/page/ResultPage';
import { useState } from 'react';
import { usePsyStore } from '@/app/store/store';


export default function Home() {
  const psyState = usePsyStore( (state) => state );

  const nextStep = function(){
    
    if(psyState.state >= 3) return;

    if(psyState.state == 1){
      //答題階段
      //要超過總題數才能結束答題階段

      if(psyState.questionState < psyState.totalQuestions-1){
        psyState.updateQuestionState(psyState.questionState + 1);
      }else{
        psyState.updateState(psyState.state + 1);
      }
      
    }else{
      console.log("next");
      psyState.updateState(psyState.state + 1);
    }

  }

  const prevStep = function(){
    if(psyState.state <= 0) return;
    console.log("prev");
    psyState.updateState(psyState.state - 1);
  }
  
  {psyState.score}

  return (
    <>
    
      <Image className=' w-screen h-screen absolute flex justify-center items-center z-0' src="/Paris.png" alt="Paris" width={2000} height={1000} />
      <div className="w-screen h-screen bg-gray-200 flex justify-center items-center">
        { psyState.state == 0 && <StartPage nextStep={nextStep} />}
        { psyState.state == 1 && <QuestionPage nextStep={nextStep} questionIndex={psyState.questionState} />}
        { psyState.state == 2 && <DisplayPage nextStep={nextStep} />}
        { psyState.state == 3 && <ResultPage />}
        
        
      </div>
    </>
  );
}
