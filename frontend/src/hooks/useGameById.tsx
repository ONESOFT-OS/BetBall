import { useEffect, useState } from "react"

interface Game{
    idGame : number
    nickColaborador: string
    date: string
    isFinish: boolean
}

export const useGameById = (idGame : number) => {
    const findGame : Game =  {idGame : 1,
                              nickColaborador: "MASTER",
                              date: "2022-10-22 12:00:00",
                              isFinish: false};
    const [game, setGame] = useState<Game>(findGame);
    const url : string = "http://127.0.0.1:8000/game/" + idGame.toString();
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setGame(data));
    }, [])
    return game;
};