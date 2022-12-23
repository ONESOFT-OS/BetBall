import clsx from "clsx"
import { Text } from "../components/Text";

export interface RankingItenProps{
    ranking?: string
    nickName?: string
    earnedValue?: string
    wonBets?: string
    position?: string
}

export function RankingIten({position = "middle", ...props} : RankingItenProps){
    var className : string = "text-gray-300";
    if (props.ranking == undefined)
        props.ranking = "-" ;
    if (props.nickName == undefined)
        props.nickName = "-" ;
    if (props.earnedValue == undefined)
        props.earnedValue = "-" ;
    if (props.wonBets == undefined)
        props.wonBets = "-";

    return(
        <div className={clsx("bg-white bg-opacity-[0.02] border-white border-opacity-5 border-x-[1px]",
                            {"border-b-[1px]"           : position === "middle",
                             "rounded-b border-b-[1px]" : position === "down"} )}>
            <div className="p-4 flex justify-between">
                    <Text size="base" className="w-1/5 text-gray-300">
                        {props.ranking}
                    </Text>
                    <Text size="base" className="w-2/5 text-gray-300">
                        {props.nickName}
                    </Text>
                    <Text size="base" className="w-1/5 text-end text-gray-300">
                        {clsx("R$ ", props.earnedValue)}
                    </Text> 
                    <Text size="base" className="w-1/5 text-end text-gray-300">
                        {props.wonBets}
                    </Text> 
            </div>
        </div>
    )
}