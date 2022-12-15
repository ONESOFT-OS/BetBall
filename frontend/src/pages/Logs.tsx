import { ArrowDownIcon, ListBulletIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { HistoricItemCurrent } from "../components/HistoricItemCurrent";
import { AdmSideBar } from "../components/AdmSideBar";
import { Text } from "../components/Text";

import '../styles/sideBar.css';


export function SystemLogs(){
    return(
        <div className="main bg-[url('../assets/Gradient.svg')] bg-no-repeat bg-contain bg-dark-900 min-w-screen h-[100vw]">
            <div className="sideBar">
                <AdmSideBar/>
            </div>
            <div className="home pt-[100px] ">
                {/* Header */}
                <div className="header flex items-center justify-between">
                    <div className="col-1 text-white">
                        <h1 className="font-black text-[2.5rem]">Logs do sistema</h1>
                    </div>

                    <div className="col-2 flex justify-center items-center gap-6">
                        <div className="search mt-2 p-5 justify-center bg-glass-500 bg-[url('../assets/search.svg')] bg-no-repeat bg-auto bg-center  w-[30px] h-[30px] rounded-[8px]">
                        </div>
                    </div>
                </div>
                {/* Table */}
                <div className="table mt-8 w-[80vw] h-[90vh] bg-blacktransparent rounded-[10px]">
                    <div className="top-line w-[80vw] h-[8px] bg-green-700 rounded-t-[10px]"></div>
                    <div className="header p-5 px-10 text-white font-semibold flex justify-between">
                        <div>Id</div>
                        <div>Ação</div>
                        <div>Usuário</div>
                        <div>Data/Hora</div>
                    </div>
                    <div className="separator w-[80vw] h-[.3px] bg-glass-500"></div>
                    <div className="log-item">
                        <div className="content p-5 px-10 text-white font-normal flex justify-between items-center">
                            
                            <div className="id">
                                145
                            </div>
                            <div className="log-type mx-24">
                                Criar Funcionario
                            </div>
                            <div className="data flex gap-2">
                                <div className="photo">
                                    <img className="w-[50px] h-[50px] rounded-[100%]" src="../src/assets/users/user.png"/>
                                </div>
                                <div className="data-text flex flex-col">
                                    <div className="name">root</div>
                                    <div className="email text-gray-300 font-extralight text-[12px]">rodrigosampaio@gmail.com</div>
                                </div>
                            </div>
                            <div className="edit text-green-500">
                                15/12/2022 04:12:36
                            </div>
                        </div>
                        <div className="separator w-[80vw] h-[.3px] bg-glass-500"></div>
                    </div>

                    <div className="log-item">
                        <div className="content p-5 px-10 text-white font-normal flex justify-between items-center">
                            
                            <div className="id">
                                146
                            </div>
                            <div className="log-type mx-24">
                                Criar Jogo
                            </div>
                            <div className="data flex gap-2">
                                <div className="photo">
                                    <img className="w-[50px] h-[50px] rounded-[100%]" src="../src/assets/users/user.png"/>
                                </div>
                                <div className="data-text flex flex-col">
                                    <div className="name">rodrigosampaio</div>
                                    <div className="email text-gray-300 font-extralight text-[12px]">rodrigosampaio@gmail.com</div>
                                </div>
                            </div>
                            <div className="edit text-green-500">
                                15/12/2022 04:12:36
                            </div>
                        </div>
                        <div className="separator w-[80vw] h-[.3px] bg-glass-500"></div>
                    </div>

                    <div className="log-item">
                        <div className="content p-5 px-10 text-white font-normal flex justify-between items-center">
                            
                            <div className="id">
                                147
                            </div>
                            <div className="log-type mx-24">
                                Backup
                            </div>
                            <div className="data flex gap-2">
                                <div className="photo">
                                    <img className="w-[50px] h-[50px] rounded-[100%]" src="../src/assets/users/user.png"/>
                                </div>
                                <div className="data-text flex flex-col">
                                    <div className="name">root</div>
                                    <div className="email text-gray-300 font-extralight text-[12px]">rodrigosampaio@gmail.com</div>
                                </div>
                            </div>
                            <div className="edit text-green-500">
                                15/12/2022 04:12:36
                            </div>
                        </div>
                        <div className="separator w-[80vw] h-[.3px] bg-glass-500"></div>
                    </div>

                    <div className="log-item">
                        <div className="content p-5 px-10 text-white font-normal flex justify-between items-center">
                            
                            <div className="id">
                                147
                            </div>
                            <div className="log-type mx-24">
                                Backup
                            </div>
                            <div className="data flex gap-2">
                                <div className="photo">
                                    <img className="w-[50px] h-[50px] rounded-[100%]" src="../src/assets/users/user.png"/>
                                </div>
                                <div className="data-text flex flex-col">
                                    <div className="name">root</div>
                                    <div className="email text-gray-300 font-extralight text-[12px]">rodrigosampaio@gmail.com</div>
                                </div>
                            </div>
                            <div className="edit text-green-500">
                                15/12/2022 04:12:36
                            </div>
                        </div>
                        <div className="separator w-[80vw] h-[.3px] bg-glass-500"></div>
                    </div>

                    <div className="log-item">
                        <div className="content p-5 px-10 text-white font-normal flex justify-between items-center">
                            
                            <div className="id">
                                147
                            </div>
                            <div className="log-type mx-24">
                                Backup
                            </div>
                            <div className="data flex gap-2">
                                <div className="photo">
                                    <img className="w-[50px] h-[50px] rounded-[100%]" src="../src/assets/users/user.png"/>
                                </div>
                                <div className="data-text flex flex-col">
                                    <div className="name">root</div>
                                    <div className="email text-gray-300 font-extralight text-[12px]">rodrigosampaio@gmail.com</div>
                                </div>
                            </div>
                            <div className="edit text-green-500">
                                15/12/2022 04:12:36
                            </div>
                        </div>
                        <div className="separator w-[80vw] h-[.3px] bg-glass-500"></div>
                    </div>

                    <div className="log-item">
                        <div className="content p-5 px-10 text-white font-normal flex justify-between items-center">
                            
                            <div className="id">
                                147
                            </div>
                            <div className="log-type mx-24">
                                Backup
                            </div>
                            <div className="data flex gap-2">
                                <div className="photo">
                                    <img className="w-[50px] h-[50px] rounded-[100%]" src="../src/assets/users/user.png"/>
                                </div>
                                <div className="data-text flex flex-col">
                                    <div className="name">root</div>
                                    <div className="email text-gray-300 font-extralight text-[12px]">rodrigosampaio@gmail.com</div>
                                </div>
                            </div>
                            <div className="edit text-green-500">
                                15/12/2022 04:12:36
                            </div>
                        </div>
                        <div className="separator w-[80vw] h-[.3px] bg-glass-500"></div>
                    </div>
                </div>

                {/* Carregar mais */}
                <div className="container flex justify-center items-center mt-[25px]">
                    <div className="see-more bg-white rounded-[100%] w-[40px] h-[40px] flex justify-center items-center">
                            <ArrowDownIcon className="w-[30px] h-[30px]"/>
                    </div>
                </div>
            </div>
        </div>
    )
}