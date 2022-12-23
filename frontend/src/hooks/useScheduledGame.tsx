import { useEffect, useState } from "react"

interface Game{
    idGame : number
    nickColaborador: string
    endDate: string
    endTime: string
    club1_name : string
    club1_id : string
    club1_photo_link : string
    club2_name : string
    club2_id : string
    club2_photo_link : string
}


export function useGameById(idGame : number){
    const [game, setGame] = useState<Game>({
        idGame : 0,
        nickColaborador: "-",
        endDate: "-",
        endTime: "-",
        club1_name : "-",
        club1_id : "-",
        club1_photo_link : "-",
        club2_name : "-",
        club2_id : "-",
        club2_photo_link : "-",
    });
    const url : string = "http://127.0.0.1:8000/game/" + idGame.toString();
    
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setGame(data));
    }, [])
    
    return game;
};