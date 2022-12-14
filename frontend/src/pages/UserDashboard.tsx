import { ArrowDownIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { HistoricItemCurrent } from "../components/HistoricItemCurrent";
import { HistoricItemFinish } from "../components/HistoricItemFinish";
import { HistoricItemScheduled } from "../components/HistoricItemScheduled";
import { UserSideBar } from "../components/UserSideBar";
import { StaticCardDashboard } from "../components/StaticCardDashboard";
import { Text } from "../components/Text";

import '../styles/sideBar.css';


export function UserDashboard (){
    return(
        <div className="main bg-[url('../assets/Gradient.svg')] bg-no-repeat bg-contain bg-dark-900 min-w-screen h-[100vw]">
            <div className="sideBar">
                <UserSideBar/>
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
                            <Link to={"/bet"}>
                                <Button type='submit' className='min-w-fit max-w-xs text-center'>       
                                    + Nova Aposta
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 pt-8 px-20">
                    <div className="flex flex-row justify-center gap-10 pb-3">
                    <Link to={'/dashboard'}> 
                        <Text className="font-bold text-xl text-green-500 ">Em Andamento</Text> 
                    </Link>
                    <Link to={'scheduled'}>  
                        <Text className="font-bold text-xl text-gray-500 hover:text-green-700" >Agendados</Text>
                    </Link>
                    </div>
                    <HistoricItemCurrent action="APOSTOU"></HistoricItemCurrent>
                    <HistoricItemCurrent action="APOSTOU"></HistoricItemCurrent>
                    <HistoricItemCurrent action="APOSTOU"></HistoricItemCurrent>
                    <HistoricItemCurrent action="NÃO APOSTOU"></HistoricItemCurrent>
                    <HistoricItemCurrent action="APOSTOU"></HistoricItemCurrent>
                    <HistoricItemCurrent action="NÃO APOSTOU"></HistoricItemCurrent>
                    <HistoricItemCurrent action="NÃO APOSTOU"></HistoricItemCurrent>
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