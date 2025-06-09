import { create } from 'zustand'

// 建立 store hook
const usePsyStore = create((set) => ({
    // states and actions
  state: 0, //0:start, 1:question, 2:displayResult, 3: result
  questionState: 0,
  totalQuestions: 5,
  score: 0,
  updateState: (newState) => set( (state)=>({ state: newState}) ),
  updateQuestionState: (newState) => set( (state)=>({ questionState: newState}) ),
  updateTotalQuestions: (newState) => set( (state)=>({ totalQuestions: newState}) ),
  updateScore: (newState) => set( (state)=>({ score: newState}) )
}))

const useQuizStore = create((set) => ({
  quizs: {
    1:{
      title: "早晨起床時的你最想做什麼？",
      options:[
        {title:"賴床五分鐘，享受被窩的溫度", value:1 },  
        {title:"馬上起床，做個晨間拉伸", value:2 },  
        {title:"打開窗戶，呼吸新鮮空氣", value:3 },
        {title:"泡一杯咖啡，打開今天的計畫表", value:4 }  
      ]
    },
    2:{
      title: "一個完美的週末午後，你會？",
      options:[
        {title:"躲進家裡看書或追劇", value:1 },  
        {title:"和朋友逛市集、拍拍照", value:2 },  
        {title:"隨性散步，看哪裡有趣就去哪裡", value:3 },
        {title:"安排一場美術館或展覽行程", value:4 }  
      ]
    },
    3:{
      title: "如果你是一種顏色，你會是哪一種？",
      options:[
        {title:"奶油白——溫柔、溫暖", value:1 },  
        {title:"櫻桃紅——熱情又討喜", value:2 },  
        {title:"青蘋果綠——清新有活力", value:3 },
        {title:"深藍灰——沈穩、神秘", value:4 }   
      ]
    },
    4:{
      title: "你在團體中通常是什麼角色？",
      options:[
        {title:"默默觀察、提供溫柔建議的人", value:1 },  
        {title:"打造氣氛、讓大家開心的那位", value:2 },  
        {title:"自然行動派，不怕跳脫框架", value:3 },
        {title:"策畫路線、掌控全場的靈魂人物", value:4 }   
      ]
    },
    5:{
      title: "你相信命運還是選擇？",
      options:[
        {title:"命運會指引方向", value:1 },  
        {title:"選擇創造命運", value:2 },  
        {title:"兩者交織，無法切割", value:3 },
        {title:"理性選擇勝過直覺", value:4 }   
      ]
    }
  }
}))


export { usePsyStore, useQuizStore }