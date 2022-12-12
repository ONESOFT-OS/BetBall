import { useBettorEarnedValue } from "../hooks/useBettorEarnedValue";
import { useBettorWonBets } from "../hooks/useBettorWonBets";
import { RankingIten } from "./RankingIten";


export interface RankingProps{
    type: "value" | "bet"
    className?: string
}

export function Ranking(props:RankingProps){
    if (props.type == "value"){
        var {bettor} = useBettorEarnedValue();
    } else {
        var {bettor} = useBettorWonBets();    
    }
    const lestBestBettor = bettor.pop();
    if(bettor.length == 0){
        return(
            <div className={props.className}>
            <RankingIten ranking="RANKING" nickName="NOME" earnedValue="VALOR GANHO" wonBets="VITORIAS" position="top"/>
            <RankingIten ranking="-" nickName='-' earnedValue="-" wonBets="-" position="down"/>
        </div>  
        )
    }
    return(
        <div className={props.className}>
            <RankingIten ranking="RANKING" nickName="NOME" earnedValue="VALOR GANHO" wonBets="VITORIAS" position="top"/>
            {bettor.map((bettor) => 
                    <RankingIten ranking={bettor.ranking} 
                    nickName={bettor.nickName}
                    earnedValue={bettor.earnedValue}
                    wonBets={bettor.wonBets}
                    position="middle"/>
                )}
            <RankingIten ranking={lestBestBettor?.ranking} nickName={lestBestBettor?.nickName} earnedValue={lestBestBettor?.earnedValue} wonBets={lestBestBettor?.wonBets} position="down"/>
        </div>
    )
}
