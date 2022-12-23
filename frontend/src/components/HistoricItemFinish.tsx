import {Text} from "./Text"
import { Button } from "./Button"

export interface ItemProps{
    action:string
    name1:string
    name2:string
    url1:string
    url2:string
    team1Goal:string
    team2Goal:string
    apostar:string
}

export function HistoricItemFinish(props:ItemProps){
    return(
        <div className="bg-blacktransparent w-full h-full flex flex-row items-center justify-between rounded-[10px] p-5">
            <div className="time flex flex-col items-center">
                <Text className=" text-green-800 text-xs font-bold px-7">-</Text>
            </div>
            <div className="status bg-green-800 w-fit h-7 px-5 pt-[2px] ml-1 rounded-sm">
                <Text className=" text-xs font-bold">FINALIZADO</Text>
            </div>

            <div className="team flex flex-row items-center gap-5">
                <Text className="font-bold">{props.name1}</Text>
                <div>
                    <img className="w-6" src={props.url1}/>
                </div>
                <div className="score">
                    <Text className=" font-bold">{props.team1Goal} | {props.team2Goal}</Text>
                </div>
                <Text className="font-bold">{props.name2}</Text>
                <div>
                    <img className="w-5" src={props.url2}/>
                </div>
            </div>

            <div className="bets flex flex-col items-center">
                <Text>{props.apostar} </Text>
                <Text>Apostas</Text>
            </div>

            <div className="finish">
                <Button mode="closer" className="rounded-sm bg-glass-300  text-xs px-[21px]">{props.action}</Button>
            </div>
        </div>
    )
}