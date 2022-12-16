import { ArrowDownIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { HistoricItemCurrent } from "../components/HistoricItemCurrent";
import { HistoricItemFinish } from "../components/HistoricItemFinish";
import { HistoricItemScheduled } from "../components/HistoricItemScheduled";
import { SideBar } from "../components/SideBar";
import { StaticCardDashboard } from "../components/StaticCardDashboard";
import { Text } from "../components/Text";

import '../styles/sideBar.css';


export function EmployeeDashboard (){
    return(
        <div className="main bg-[url('../assets/Gradient.svg')] bg-no-repeat bg-contain bg-dark-900 min-w-screen h-[100vw]">
            <div className="sideBar">
                <SideBar/>
            </div>
            <div className="home pt-[100px] ">
                <div className="header flex items-center justify-between">
                    <div className="col-1 text-white">
                        <h1 className="font-black text-[2.5rem]">Dashboard</h1>
                        <p className=" text-[1.2rem] text-glass-800">Bem-vindo, João!</p>
                    </div>

                    <div className="col-2 flex justify-center items-center gap-6">
                        <div className="search mt-2 p-5 justify-center bg-glass-500 bg-[url('../assets/search.svg')] bg-no-repeat bg-auto bg-center  w-[30px] h-[30px] rounded-[8px]">
                        </div>

                        <div className="button w-[150px] h-[35px]">
                            <Link to={"/newgame"}>
                                <Button type='submit' className='min-w-fit max-w-xs'>       
                                    + Add New 
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="body mt-10 flex justify-between flex-wrap">
                    <StaticCardDashboard/>
                    <StaticCardDashboard/>
                </div>

                <div className="flex flex-col gap-4 pt-8 px-20">
                    <div className="flex flex-row justify-center gap-10 pb-3">
                    <Link to={'/dashboard'}> 
                        <Text className="font-bold text-xl text-green-500 ">Em Andamento</Text> 
                    </Link>
                    <Link to={'/dashboard/time'}>  
                        <Text className="font-bold text-xl text-gray-500 hover:text-green-700" >Agendados</Text>
                    </Link>
                    <Link to={'/dashboard/finish'}>   
                        <Text className="font-bold text-xl text-gray-500 hover:text-green-700">Finalizados</Text>
                    </Link>
                    </div>
                    <HistoricItemCurrent 
                        action = "FINALIZAR"
                        name1 = "Bahia"
                        name2 = "Flamengo"
                        url1 = "../src/assets/team/bahiaIcon.png"
                        url2 = "../src/assets/team/flamengoIcon.png"
                        team1Goal = "0"
                        team2Goal = "0"
                        apostar= "32"/>

                    <HistoricItemCurrent 
                        action = "FINALIZAR"
                        name1 = "Cuiabá"
                        name2 = "Botafogo"
                        url1 = "../src/assets/team/cuiabaIcon.png"
                        url2 = "../src/assets/team/botafogoIcon.png"
                        team1Goal = "0"
                        team2Goal = "0"
                        apostar= "47"/>

                    <HistoricItemCurrent 
                        action = "FINALIZAR"
                        name1 = "Fluminense"
                        name2 = "Internacional"
                        url1 = "../src/assets/team/fluminenseIcon.png"
                        url2 = "./src/assets/team/internacionalIcon.png"
                        team1Goal = "2"
                        team2Goal = "1"
                        apostar= "67"/>

                    <HistoricItemCurrent 
                        action = "FINALIZAR"
                        name1 = "Corinthians"
                        name2 = "São Paulo"
                        url1 = "../src/assets/team/corinthiansIcon.png"
                        url2 = "../src/assets/team/saoPauloIcon.png"
                        team1Goal = "0"
                        team2Goal = "1"
                        apostar= "22"/>

                    <HistoricItemCurrent 
                        action = "FINALIZAR"
                        name1 = "Santos"
                        name2 = "Avai"
                        url1 = "../src/assets/team/santosIcon.png"
                        url2 = "../src/assets/team/avaiIcon.png"
                        team1Goal = "0"
                        team2Goal = "0"
                        apostar= "31"/>

                    <HistoricItemCurrent 
                        action = "FINALIZAR"
                        name1 = "Atletico-MG"
                        name2 = "Palmeiras"
                        url1 = "../src/assets/team/atleticoMGIcon.png"
                        url2 = "../src/assets/team/flamengoIcon.png"
                        team1Goal = "1"
                        team2Goal = "2"
                        apostar= "53"/>

                    <HistoricItemCurrent 
                        action = "FINALIZAR"
                        name1 = "Real Madrid"
                        name2 = "Barcelona"
                        url1 = "../src/assets/team/realMadridIcon.png"
                        url2 = "../src/assets/team/barcelonaIcon.png"
                        team1Goal = "3"
                        team2Goal = "3"
                        apostar= "324"/>
                </div>
            <div className="container flex justify-center items-center mt-[25px]">
                <div className="see-more bg-white rounded-[100%] w-[40px] h-[40px] flex justify-center items-center">
                        <ArrowDownIcon className="w-[30px] h-[30px]"/>
                </div>
            </div>
            </div>
        </div>
    )
}