import {Text} from "./Text"
import { Button } from "./Button"

export function HistoricItemFinish(){
    return(
        <div className="bg-blacktransparent w-full h-full flex flex-row justify-between pt-2">
            <div className="status bg-green-800 w-fit h-7 px-4 pt-[2px] ml-44 rounded-sm">
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