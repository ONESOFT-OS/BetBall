import { useEffect, useState } from "react"

export interface ITeam{
    idTeam : string
    name : string
    icon : string
}

export const useTeam = () => {
    const [team, setTeam] = useState<ITeam[]>([{idTeam : "1", name : "Real Madrid", icon : "/src/assets/realMadridIcon.png"},{idTeam : "2", name : "Barcelona", icon : "/src/assets/barcelonaIcon.png"}]);
    return {
        team
    };
};