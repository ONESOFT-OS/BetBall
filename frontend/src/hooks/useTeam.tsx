import { useEffect, useState } from "react"

export interface ITeam{
    club_name : string
    club_id : string
    photo_link : string
}

export const useTeam = () => {
    const [team, setTeam] = useState<ITeam[]>([]);
    

    useEffect(() => {
        fetch("http://127.0.0.1:8000/teams")
            .then((response) => response.json())
            .then((data) => setTeam(data));
    }, [])
    return {
        team
    };
};