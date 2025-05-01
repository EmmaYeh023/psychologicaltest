'use client';
import CalenderPage from '@/componemt/other/CalenderPage'
import { DatePicker } from 'antd';


export default function TestUI() {
  
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    alert("Tu as choisi : " + dateString);
  };

  const days =[
    {year:"2025" , month:"mai" , day:"01" , date:"jeudi"},
    {year:"2025" , month:"mai" , day:"02" , date:"vendredi"},
    {year:"2025" , month:"mai" , day:"03" , date:"samedi"},
  ]

  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center max-w-2xl mx-auto p-6">
     <CalenderPage year="2025" month="mai" day="01" date="jeudi"></CalenderPage>
    
    
     
     
    </div>
  );
}