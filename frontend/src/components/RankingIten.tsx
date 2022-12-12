import clsx from "clsx"
import { Text } from "../components/Text";

export interface RankingItenProps{
    ranking?: string
    nickName?: string
    earnedValue?: string
    wonBets?: string
    position?: "top" | "middle" | "down"
}

export function RankingIten({position = "middle", ...props} : RankingItenProps){
    var className : string = "text-gray-300";
    if (position != "top"){
        props.earnedValue = clsx("R$ ", props.earnedValue)
    } else {
        className = clsx(className, "font-bold");
    }
    return(
        <div className={clsx("bg-white bg-opacity-[0.02] border-white border-opacity-5 border-x-[1px]",
                            {"rounded-t border-y-[1px]" : position === "top",
                             "border-b-[1px]" : position === "middle",
                             "rounded-b border-b-[1px]" : position === "down"} )}>
            <div className="p-4 flex justify-between">
                    <Text size="base" className={clsx("w-1/5",className)}>
                        {props.ranking}
                    </Text>
                    <Text size="base" className={clsx("w-2/5",className)}>
                        {props.nickName}
                    </Text>
                    <Text size="base" className={clsx("w-1/5 text-end",className)}>
                        {props.earnedValue}
                    </Text>
                    <Text size="base" className={clsx("w-1/5 text-end",className)}>
                        {props.wonBets}
                    </Text>
            </div>
        </div>
    )
}