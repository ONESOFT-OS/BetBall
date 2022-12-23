import { useBettorEarnedValue } from "../hooks/useBettorEarnedValue";
import { useBettorWonBets } from "../hooks/useBettorWonBets";
import { RankingIten } from "./RankingIten";
import { RankingHeading } from "./RankingHeading";
import { useState } from "react";

export interface RankingProps{
    className?: string
}

export function Ranking(props:RankingProps){

    const {bestBettorEarnedValue} = useBettorEarnedValue();

    const {bestBettorsWonBets} = useBettorWonBets();

    const [type, setType] = useState("earnedValue");
    const [bettor, setBettor] = useState(bestBettorEarnedValue);

    const setEarnedValueRanking = () => {
        setType("earnedValue");
        setBettor(bestBettorEarnedValue);
    }
    const setWonBetsRanking = () => {
        setType("wonBets");
        setBettor(bestBettorsWonBets);
    }

    return(
        <div className={props.className}>
            <RankingHeading type = {type} 
                            onClickEarnedValue = {setEarnedValueRanking} 
                            onClickWonBets = {setWonBetsRanking}/>
            {bettor.map((b) => {
                var position = "middle";
                if (b == bettor[bettor.length - 1])
                    position = "down";
                return(
                    <RankingIten ranking={b.ranking} 
                                 nickName = {b.nickName}
                                 earnedValue = {b.earnedValue}
                                 wonBets = {b.wonBets}
                                 position = {position}/>)
            })}
        </div>
    )
}
