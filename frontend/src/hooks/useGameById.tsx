import { useEffect, useState } from "react"

interface Game{
    idGame : number
    nickColaborador: string
    endDate: string
    endTime: string
    isFinish: boolean
}


export function useGameById(idGame : number){
    const [game, setGame] = useState<Game>({idGame : 0,
                                            nickColaborador: "-",
                                            endDate: "-",
                                            endTime: "-",
                                            isFinish: false});
    const url : string = "http://127.0.0.1:8000/game/" + idGame.toString();
    
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setGame(data));
    }, [])
    
    return game;
};