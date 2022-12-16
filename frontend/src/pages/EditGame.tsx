import { FormEvent, MouseEventHandler, SetStateAction, useState } from "react";
import {clsx} from "clsx";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { Text } from "../components/Text";
import { useGameById } from "../hooks/useGameById";
import axios from "axios";
import { InputDate } from "../components/InputDate";
import { ITeam, useTeamById } from "../hooks/useTeamById";
import { useTeamByGame } from "../hooks/useTeamByGame";

export interface NewGame{
    dataFimAposta : string;
    horaFimAposta : string;
}
/*
export function getURL(team : ITeam[], id : string){
    var url : string = "";

    for (let index = 0; index < team.length; index++) {
        var element = team[index];
        if (element.club_id == id) {
            url = element.photo_link;
            break;
        }
    }
    return url;
}
*/
export function EditGame() {
    const game = useGameById(1);
    const teams = useTeamByGame(1);

    
    const [editGame, setEditGame] = useState<NewGame>({
        dataFimAposta : "",
        horaFimAposta : "",
    });
    
    const datePlacehold = ():string => {
        if (editGame.dataFimAposta == ""){
            return game.endDate
        }
        return editGame.dataFimAposta
    }

    const timePlacehold = ():string => {
        if (editGame.horaFimAposta == ""){
            return game.endTime
        }
        return editGame.horaFimAposta
    }
    ;

    async function sendNewEditGame(event : FormEvent){
        event.preventDefault();
        var time:string = game.endTime;
        var date:string = game.endDate;
        if (editGame.dataFimAposta != ""){
            console.log("valor Date");
            date = editGame.dataFimAposta;
        }

        if (editGame.horaFimAposta != ""){
            console.log("valor time");
            time = editGame.horaFimAposta;
        }

        if (editGame.dataFimAposta == game.endDate){
            if (editGame.horaFimAposta < game.endTime) {
                alert("Reagendar jogo apenas para depois da hora marcada");
                return
            }
        }
        /*
        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/register/game',
            
            data: {
                collaborator_nickname: game.nickColaborador,
                end_datetime: (game.dataFimAposta + " " + game.horaFimAposta),
                team1_id: game.idTime1,
                team2_id: game.idTime2
            }
          })
          */
        history.back();
    }

    const close = (event : any) => {
        history.back();
    }

    return(
        <div className="w-screen h-auto min-h-screen bg-gradient-to-bl from-green-900 via-gray-900 to-black items-center flex flex-col justify-center">
            <div className="bg-black bg-opacity-50 w-full max-w-6xl rounded-2xl">
                <form className="mx-16 my-16 flex flex-col justify-evenly">
                    <div className="flex justify-between">
                        <Heading classname="text-5xl">
                            Editar Jogo
                        </Heading>
                        <Button mode="closer" onClick={close} className=" px-[19px]">
                            X
                        </Button>
                    </div>

                    <div className="flex justify-center pt-3">
                        <div className="bg-[#24242E] rounded-full h-24 w-24 items-center flex flex-col justify-center">
                            <img className="scale-75" 
                                 src={teams[0].photo_link}/>
                        </div>
                        <div className="items-center flex flex-col justify-center">
                            <p className="text-white mx-4">
                                vs
                            </p>
                        </div>
                        <div className="bg-[#24242E] rounded-full h-24 w-24 items-center flex flex-col justify-center">
                            <img className="scale-75" 
                                 src={teams[1].photo_link}/>
                        </div>
                    </div>

                    <div className="flex justify-center pt-11 gap-28">
                        <select className="bg-gray-900 bg-opacity-30 text-white text-sm rounded-lg focus:ring-green-700 focus:bg-opacity-100 focus:ring-[1px] block p-2.5 w-96" 
                                name="TimeEsquerda"
                                value = {teams[0].club_id}
                                id="leftTeamSelect" 
                                disabled>
                                <option value="" >{teams[0].club_name}</option>
                        </select>
                        <select className="bg-gray-900 bg-opacity-30 text-white text-sm rounded-lg focus:ring-green-700 focus:bg-opacity-100 focus:ring-[1px] block p-2.5 w-96 sele" 
                                name="TimeDireita" 
                                value = {teams[1].club_id}
                                id="rightTeamSelect"
                                disabled>
                                <option value="" >{teams[1].club_name}</option>
                        </select>
                    </div>

                    <Text className="pl-2 pt-10">
                        Data final para aposta:
                    </Text>

                    <div className="flex gap-10 pt-5">
                        <div className="flex flex-col gap-1">
                            <InputDate
                                    id="dateGame"
                                    min = {game.endDate}
                                    value = {datePlacehold()}
                                    onChange={(event) => 
                                        setEditGame({
                                            ...editGame,
                                            dataFimAposta : event.target.value
                                        })} 
                            />
                            <Text className="pl-2">
                                Data
                            </Text>
                        </div>
                        <div className="flex flex-col gap-1">
                            <InputDate
                                    id="timeGame" 
                                    mode="time"
                                    value = {timePlacehold()}
                                    onChange={(event) => 
                                        setEditGame({
                                            ...editGame,
                                            horaFimAposta : event.target.value
                                        })}
                                    />
                            <Text className="pl-2">
                                Hora
                            </Text>
                        </div>
                    </div>

                    <div className="flex justify-center pt-12">
                        <Button type='submit' 
                                onClick={sendNewEditGame} 
                                className='mt-4 min-w-fit max-w-xs text-center'>
                            Salvar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}