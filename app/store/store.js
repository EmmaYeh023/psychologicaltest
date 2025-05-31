import { create } from 'zustand'

// 建立 store hook
const usePsyStore = create((set) => ({
    // states and actions
  state: 0, //0:start, 1:question, 2:displayResult, 3: result
  questionState: 0,
  totalQuestions: 3,
  score: 0,
  updateState: (newState) => set( (state)=>({ state: newState}) ),
  updateQuestionState: (newState) => set( (state)=>({ questionState: newState}) ),
  updateTotalQuestions: (newState) => set( (state)=>({ totalQuestions: newState}) ),
  updateScore: (newState) => set( (state)=>({ score: newState}) )
}))

const useQuizStore = create((set) => ({
  quizs: {
    1:{
      title: "如果你走進一家人氣麵包店，看到架上只剩下三個可頌，你會選哪一個？",
      options:[
        {title:"最酥脆、層次分明，看起來最完美的那一個", value:1 },  
        {title:"看起來有點歪但香氣逼人的那一個", value:2 },  
        {title:"包著巧克力餡的特別版", value:3 }  
      ]
    },
    2:{
      title: "你最喜歡在什麼情境下吃可頌？",
      options:[
        {title:"清晨的陽光下，配著咖啡開始美好的一天", value:1 },  
        {title:"忙碌中偷閒，站在路邊隨手咬一口", value:2 },  
        {title:"午後獎勵時光，一邊看劇一邊享受甜點", value:3 }  
      ]
    },
    3:{
      title: "如如果你是一個可頌內餡，你會是什麼口味？",
      options:[
        {title:"原味，經典不敗就是我", value:1 },  
        {title:"鹹奶油火腿，實用派不走浮誇路線", value:2 },  
        {title:"抹茶或莓果餡，獨特又充滿驚喜", value:3 }  
      ]
    }
  }
}))


export { usePsyStore, useQuizStore }