import clsx from "clsx";
import React from 'react'

interface  HistoricGameProps{
  teamHome: string;
  teamOut: string;
  valueBet: number;
  statusBet: string;
  date: string;
}


export const HistoricGame : React.FC <HistoricGameProps> = (props) => {
 
  const color = (status:String)=>{

    if(status == "Ganha")
      return "text-[#008000]"
    else if(status == "Perdida"){
      return "text-[#FF0000]"
    }
    else{
      return "text-[#FFFF00]"
    }
  }

  return (
    <div className={clsx('flex justify-between items-center w-full h-20 text-white bg-black/50 mb-2 text-center')}> 
        <p className="w-[7rem]">{props.teamHome} 2<br/>{props.teamOut} 0</p>
        <p className="w-[7rem]">R$ {props.valueBet}</p> 
        <p className={clsx(color(props.statusBet) + ' w-[7rem]')} >{props.statusBet}</p>
        <p className="w-[7rem]">{props.date}</p>
    </div>
  );
}


