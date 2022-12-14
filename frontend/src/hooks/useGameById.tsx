import { useEffect, useState } from "react"

interface Game{
    idGame : number
    nickColaborador: string
    endDate: string
    endTime: string
    isFinish: boolean
}

export const useGameById = (idGame : number) => {
    const [game, setGame] = useState<Game>({idGame : 3,
                                            nickColaborador: "MASTER",
                                            endDate: "2022-10-21",
                                            endTime: "13:00:00",
                                            isFinish: false});
    const url : string = "http://127.0.0.1:8000/game/" + idGame.toString();
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {console.log(data); return setGame(data)});
    }, [])
    return game;
};