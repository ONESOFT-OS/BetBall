import clsx from "clsx"
import { CellSignalX } from "phosphor-react"

export interface RankingItenProps{
    ranking: string
    nickName: string
    earnedValue: string
    wonBets: string
    position?: "top" | "middle" | "down"
}

export function RankingIten({position = "middle", ...props} : RankingItenProps){

    return(
        <div className={clsx("w-2/3 bg-white bg-opacity-5 border-white border-opacity-10 border-x-2",
                            {"rounded-t border-y-2" : position === "top",
                             "border-b-2" : position === "middle",
                             "rounded-b border-b-2" : position === "down"} )}>
            <div className="p-4 flex">
                <h1>aaaaaaaaaaaaaaaaaaaa</h1>
            </div>
        </div>
    )
}