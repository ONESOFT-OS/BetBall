import { CurrencyCircleDollar } from "phosphor-react"
import { Progress } from "./Progress"

export interface CardProps{
    outTeam:string
    homeTeam:string   
}

export function Card (props:CardProps){
    return(
        <div className="flex flex-row items-center justify-center p-1 w-[15%] h-[70vh] bg-dark-900">
            <div className="card min-w-[350px] bg-dark-500 rounded-[10px] p-10">
                <div className="card-header flex flex-row justify-between pt-3 pb-10">
                    <div className="game-status bg-green-500 p-[5px] rounded-[5px] px-5 py-1">
                        <p className="text-white font-bold text-[11px]">PENDENTE</p>
                    </div>
                    <div className="game-value flex flex-row gap-1 items-center">
                        <CurrencyCircleDollar className="text-glass-800" weight="fill"/>
                        <p className="text-glass-800 font-semibold">250.00</p>
                    </div>
                </div>
                <div className="card-body">
                    <div className="team-game flex flex-row justify-around items-center pb-5">
                        <div className="team-item flex items-center justify-center  rounded-full bg-glass-500 w-[120px] h-[120px]">
                            <div className="team-img bg-[url('../assets/team/barcelonaIcon.png')] bg-contain bg-no-repeat w-[80px] h-[80px]"></div>
                        </div>

                        <p className="text-white font-bold">VS</p>

                        <div className="team-item flex items-center justify-center  rounded-full bg-glass-500 w-[120px] h-[120px]">
                            <div className="team-img bg-[url('../assets/team/realMadridIcon.png')] bg-contain bg-no-repeat bg-center w-[80px] h-[80px]"></div>
                        </div>
                    </div>
                    <div className="progress-bar">
                        <p className="text-white font-bold text-[14px]">20' 13"</p>            
                        <div className="progress pt-1 pb-3">
                            <Progress percentage={65} classname="h-[1px]"/>
                        </div>      
                        <p className="text-glass-800 font-semibold text-[12px]">Tempo de aposta</p>      
                    </div>
                    <div className="game-poster flex flex-col">
                        <div className="team flex flex-row justify-between pt-3">
                            <div className="team-name">
                                <p className="text-white font-semibold text-[20px]">{ props.outTeam }</p>
                            </div>
                            <div className="team-goals">
                                <p className="text-white font-semibold text-[20px]">3</p>
                            </div>
                        </div>
                        <div className="team flex flex-row justify-between pt-1">
                            <div className="team-name">
                                <p className="text-white font-semibold text-[20px]">{ props.homeTeam }</p>
                            </div>
                            <div className="team-goals">
                                <p className="text-white font-semibold text-[20px]">1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
