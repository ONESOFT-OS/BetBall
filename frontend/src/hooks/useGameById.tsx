import { useEffect, useState } from "react"

interface Game{
    idGame : number
    nickColaborador: string
    date: string
    iDTeam1: string
    iDTeam2: string
}

export const useGameById = (idGame : number) => {
    const findGame : Game =  {idGame : 1,
                              nickColaborador: "MASTER",
                              date: "2022-10-22 12:00:00",
                              iDTeam1: "1",
                              iDTeam2: "2"};
    const [game, setGame] = useState<Game>(findGame);
    /*
    useEffect(() => {
        fetch("http://127.0.0.1:8000/teams")
            .then((response) => response.json())
            .then((data) => setTeam(data));
    }, [])
    */
    return game;
};