import { useEffect, useState } from "react"

export interface ITeam{
    club_name : string
    club_id : string
    photo_link : string
}

export const useTeam = () => {
    const [team, setTeam] = useState<ITeam[]>([{club_name : "Real Madrid", club_id : "1",  photo_link : "/src/assets/realMadridIcon.png"},{club_name : "Barcelona", club_id : "2",  photo_link : "/src/assets/barcelonaIcon.png"}]);
    //setTeam([{idTeam : "1", name : "Real Madrid", icon : "/src/assets/realMadridIcon.png"}]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/teams")
            .then((response) => response.json())
            .then((data) => setTeam(data));
    }, [])
    console.log(team);
    return {
        team
    };
};