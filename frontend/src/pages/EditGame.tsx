import { FormEvent, MouseEventHandler, SetStateAction, useState } from "react";
import {clsx} from "clsx";
import { Heading } from "../components/Heading";
import { Button } from "../components/Button";
import { Text } from "../components/Text";
import { useGameById } from "../hooks/useGameById";
import axios from "axios";
import { InputDate } from "../components/InputDate";
import { useTeamByGame } from "../hooks/useTeamByGame";
import { GameController } from "phosphor-react";

export interface NewGame{
    dataFimAposta : string;
    horaFimAposta : string;
    goalTeamLeft : number;
    goalTeamRight : number; 
}

export function EditGame() {
    const id = 2;
    const game = useGameById(id);
    const teams = useTeamByGame(id);
    const date = new Date();
    const today : string = date.getFullYear().toString() + "-" + (date.getMonth() + 1).toString() + "-" + date.getDate().toString();
    const currentTime = date.getHours + ":" + date.getMinutes() + ":00";
    const timeBetOver = today > game.endDate && currentTime > game.endTime; 
    console.log(game);
    console.log(timeBetOver);

    const [editGame, setEditGame] = useState<NewGame>({
        dataFimAposta : "",
        horaFimAposta : "",
        goalTeamLeft : -1,
        goalTeamRight : -1,
    });
    
    const datePlacehold = ():string => {
        if (editGame.dataFimAposta == ""){
            return game.endDate
        }
        return editGame.dataFimAposta
    };

    const timePlacehold = ():string => {
        if (editGame.horaFimAposta == ""){
            return game.endTime
        }
        return editGame.horaFimAposta
    };

    const golsTeamLeftPlacehold = ():string =>{
        if (editGame.goalTeamLeft == -1){
            return teams[0].goal.toString();
        }
        return editGame.goalTeamLeft.toString();
    }

    const golsTeamRightPlacehold = ():string =>{
        if (editGame.goalTeamRight == -1){
            return teams[1].goal.toString();
        }
        return editGame.goalTeamRight.toString();
    }

    async function sendNewEditGame(event : FormEvent){
        event.preventDefault();
        var time:string = game.endTime;
        var date:string = game.endDate;
        var goalTeamLeft = teams[0].goal;
        var goalTeamRight = teams[1].goal;

        if (editGame.dataFimAposta != ""){
            date = editGame.dataFimAposta;
        }

        if (editGame.horaFimAposta != ""){
            time = editGame.horaFimAposta;
        }

        if (editGame.goalTeamLeft != -1){
            goalTeamLeft = editGame.goalTeamLeft
        }

        if (editGame.goalTeamRight != -1){
            goalTeamLeft = editGame.goalTeamRight
        }

        if (editGame.dataFimAposta == game.endDate){
            if (editGame.horaFimAposta < game.endTime) {
                alert("Reagendar jogo apenas para depois da hora marcada");
                return
            }
        }
        
        axios({
            method: 'put',
            url: 'http://127.0.0.1:8000/update/game',
            
            data: {
                idGame: id,
                end_datetime: (date + " " + time),
                idTeam1: teams[0].club_id,
                goalTeam1: goalTeamLeft,
                idTeam2: teams[1].club_id,
                goalTeam2: goalTeamRight,
            }
        })
          
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
                        <div className="flex gap-1">
                            <select className="bg-gray-900 bg-opacity-30 text-white text-sm rounded-lg focus:ring-green-700 focus:bg-opacity-100 focus:ring-[1px] block p-2.5 w-80" 
                                    name="TimeEsquerda"
                                    value = {teams[0].club_id}
                                    id="leftTeamSelect" 
                                    disabled>
                                    <option value="" >{teams[0].club_name}</option>
                            </select>
                            <input className="bg-gray-900 bg-opacity-30 text-white text-sm rounded-lg focus:ring-green-700 focus:bg-opacity-100 focus:ring-[1px] block p-2.5 max-w-[32px]"
                                   type="Number" 
                                   name="goalLeftTeam" 
                                   id="goalLeftTeam" 
                                   value={golsTeamLeftPlacehold()}
                                   min={0}
                                   disabled={!timeBetOver}
                                   onChange={(event) => 
                                    setEditGame({
                                        ...editGame,
                                        goalTeamLeft : parseInt(event.target.value)
                                    })} />
                        </div>
                        <div  className="flex gap-1">
                            <input className="bg-gray-900 bg-opacity-30 text-white text-sm rounded-lg focus:ring-green-700 focus:bg-opacity-100 focus:ring-[1px] block p-2.5 max-w-[32px]"
                                   type="Number" 
                                   name="goalRightTeam" 
                                   id="goalRightTeam" 
                                   value={golsTeamRightPlacehold()}
                                   min={0}
                                   disabled={!timeBetOver}
                                   onChange={(event) => 
                                        setEditGame({
                                            ...editGame,
                                            goalTeamRight : parseInt(event.target.value)
                                        })} />
                            <select className="bg-gray-900 bg-opacity-30 text-white text-sm rounded-lg focus:ring-green-700 focus:bg-opacity-100 focus:ring-[1px] block p-2.5 w-80 sele" 
                                    name="TimeDireita" 
                                    value = {teams[1].club_id}
                                    id="rightTeamSelect"
                                    disabled>
                                    <option value="" >{teams[1].club_name}</option>
                            </select>
                            
                        </div>
                        
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
                                    disabled={timeBetOver}
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
                                    disabled={timeBetOver}
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