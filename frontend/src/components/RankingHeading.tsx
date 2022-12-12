import clsx from "clsx"
import { MouseEventHandler, useState } from "react";
import { Text } from "./Text";

export interface RankingHeadingProps{
    type: string
    onClickEarnedValue: MouseEventHandler
    onClickWonBets: MouseEventHandler
}

export function RankingHeading(props : RankingHeadingProps){

    return(
        <div className="bg-white bg-opacity-[0.02] border-white border-opacity-5 border-x-[1px] rounded-t border-y-[1px]">
            <div className="p-4 flex justify-between">
                    <Text size="base" className="w-1/5 font-bold text-gray-300">
                        RANKING
                    </Text>
                    <Text size="base" className="w-2/5 font-bold text-gray-300">
                        NOME
                    </Text>
                    <span className={clsx("font-sans text-base w-1/5 font-bold text-end text-gray-300",
                                         {"cursor-default" : props.type === "earnedValue",
                                          "opacity-60 cursor-pointer" : props.type === "wonBets"})}
                          onClick = {props.onClickEarnedValue}>
                        VALOR GANHO
                    </span>
                    <span className={clsx("font-sans text-base w-1/5 font-bold text-end text-gray-300",
                                         {"opacity-60 cursor-pointer" : props.type === "earnedValue",
                                          "cursor-default" : props.type === "wonBets"})}
                           onClick = {props.onClickWonBets}>
                        VITORIAS
                    </span>

            </div>
        </div>
    )
}