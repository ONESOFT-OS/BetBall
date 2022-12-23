import { NavBar } from "../components/NavBar";
import { HistoricItemCurrent } from "../components/HistoricItemCurrent";
import { HistoricItemFinish } from "../components/HistoricItemFinish";
import { HistoricItemScheduled } from "../components/HistoricItemScheduled";
import { Link } from "react-router-dom";
import { Heading } from "../components/Heading";
import { ArrowDownIcon } from "@chakra-ui/icons";
// import { Text } from "../components/Text";
// import { User } from "phosphor-react";
// import { TextInput } from "../components/TextInput";
// import { LockKey } from "phosphor-react";
// import { Button } from "../components/Button";

export function Allgames(){
    return(
        <div className="bg-[url('../assets/Gradient.svg')] bg-dark-900 min-w-screen min-h-screen  max-h-full max-w-full flex flex-col items-center justify-center ">
            <NavBar/>
            {/* <div className="bg-gray-900 w-[1000px] h-[600px] min-h-max min-w-max flex flex-col rounded-2xl bg-opacity-70  mt-10 mb-10">
            <header className="flex flex-row justify-between pt-12 px-10">
                <div className="flex flex-row justify-start items-baseline">
                    <Heading size="xlg">Jogos Cadastrados</Heading>
                </div>
            </header>

            <div className="flex flex-row pt-2 px-12 space-x-8">
                <Text size="lg"   className="font-semibold hover:text-green-500" ><Link to={'/perfil/adm'}>Voltar</Link></Text>
                
            </div>
            </div> */}
            <div className="body mt-7">
                <div className="title">
                    <h1 className="text-white font-bold text-[2.5rem]">Últimos jogos</h1>
                </div>
                <div className="game-list p-[5px] w-[90vw]">
                    <div className="item m-5">
                        <HistoricItemCurrent action="APOSTAR"></HistoricItemCurrent>    
                    </div>
                    <div className="item m-5">
                        <HistoricItemFinish action="FINALIZADO"></HistoricItemFinish>
                    </div>
                    <div className="item m-5">
                        <HistoricItemScheduled></HistoricItemScheduled>
                    </div>
                    <div className="item m-5">
                        <HistoricItemCurrent action="APOSTAR"></HistoricItemCurrent>
                    </div>
                    <div className="item m-5">
                        <HistoricItemFinish action="FINALIZADO"></HistoricItemFinish>   
                    </div>
                    <div className="item m-5">
                        <HistoricItemCurrent action="APOSTAR"></HistoricItemCurrent>
                    </div>
                    <div className="item m-5">
                        <HistoricItemScheduled></HistoricItemScheduled>
                    </div>
                </div>
                <div className="container flex justify-center items-center mt-[25px] mb-[50px]">
                    <div className="see-more bg-white rounded-[100%] w-[40px] h-[40px] flex justify-center items-center">
                            <ArrowDownIcon className="w-[30px] h-[30px]"/>
                    </div>
            </div>
            </div>
        </div>


    )
}