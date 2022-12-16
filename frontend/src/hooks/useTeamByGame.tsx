import { useEffect, useState } from "react"

export interface ITeam{
    club_name : string
    club_id : string
    photo_link : string
    goal: number
}

export const useTeamByGame = (id : number) => {
    const [teams, setTeams] = useState<ITeam[]>([{club_name : "-", club_id : "-", photo_link : "-", goal : 0},
                                                 {club_name : "-", club_id : "-", photo_link : "-", goal : 0}]);
    
    const url : string = "http://127.0.0.1:8000/team/game/" + id.toString();  
    
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => setTeams(data));
    }, [])
    
    return teams;
};