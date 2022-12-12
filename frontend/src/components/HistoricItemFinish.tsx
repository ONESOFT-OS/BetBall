import {Text} from "./Text"
import { Button } from "./Button"

export function HistoricItemFinish(){
    return(
        <div className="bg-blacktransparent w-full h-full flex flex-row items-center justify-between rounded-[10px] p-5">
            <div className="time flex flex-col items-center">
                <Text className=" text-green-800 text-xs font-bold">-</Text>
            </div>
            <div className="status bg-green-800 w-fit h-7 px-5 pt-[2px] ml-1 rounded-sm">
                <Text className=" text-xs font-bold">FINALIZADO</Text>
            </div>

            <div className="team flex flex-row gap-5">
                <Text className="font-bold">Barcelona</Text>
                <div>
                    <img className="w-6" src="../src/assets/team/barcelonaIcon.png"/>
                </div>
                <div className="score">
                    <Text className=" font-bold">3 | 0</Text>
                </div>
                <Text className="font-bold">Real Madrid</Text>
                <div>
                    <img className="w-5" src="../src/assets/team/realMadridIcon.png"/>
                </div>
            </div>

            <div className="bets flex flex-col items-center">
                <Text>25 </Text>
                <Text>Apostas</Text>
            </div>

            <div className="finish">
                <Button mode="closer" className="rounded-sm text-xs">FINALIZADO</Button>
            </div>
        </div>
    )
}