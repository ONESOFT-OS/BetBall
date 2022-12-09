import clsx from "clsx"
import { Text } from "../components/Text";

export interface RankingItenProps{
    ranking: string
    nickName: string
    earnedValue: string
    wonBets: string
    position?: "top" | "middle" | "down"
}

export function RankingIten({position = "middle", ...props} : RankingItenProps){

    return(
        <div className={clsx("w-2/3 bg-white bg-opacity-[0.02] border-white border-opacity-5 border-x-[1px]",
                            {"rounded-t border-y-[1px]" : position === "top",
                             "border-b-[1px]" : position === "middle",
                             "rounded-b border-b-[1px]" : position === "down"} )}>
            <div className="p-4 flex justify-between">
                    <Text className="">
                        {props.ranking}
                    </Text>
                    <Text className="w-1/2">
                        {props.nickName}
                    </Text>
                    <Text className="">
                        {clsx("R$ ",props.earnedValue)}
                    </Text>
                    <Text className="">
                        {props.wonBets}
                    </Text>
            </div>
        </div>
    )
}