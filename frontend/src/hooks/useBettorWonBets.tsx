import { useEffect, useState } from "react"

interface Bettor{
    ranking: string
    nickName: string
    earnedValue: string
    wonBets: string
}

export const useBettorWonBets = () => {
    const [bestBettorsWonBets, setBesteBettorsWonBets] = useState<Bettor[]>([{ranking:"1", nickName:"Fulano", earnedValue:"102.189,10", wonBets:"523"},
                                                                              {ranking:"2", nickName:"Ciclano", earnedValue:"5.556,33", wonBets:"342"},
                                                                              {ranking:"3", nickName:"Beltrano", earnedValue:"1.147,65", wonBets:"123"},
                                                                              {ranking:"4", nickName:"Gilclano", earnedValue:"5,25", wonBets:"58"},
                                                                              {ranking:"5", nickName:"Solano", earnedValue:"171,72", wonBets:"13"},]);
    /*
    useEffect(() => {
        fetch("http://127.0.0.1:8000/teams")
            .then((response) => response.json())
            .then((data) => setTeam(data));
    }, [])
    */
    return {
        bestBettorsWonBets
    };
};