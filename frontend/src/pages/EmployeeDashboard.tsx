import { Button } from "../components/Button";
import { HistoricItemCurrent } from "../components/HistoricItemCurrent";
import { SideBar } from "../components/SideBar";
import { StaticCardDashboard } from "../components/StaticCardDashboard";
import { Text } from "../components/Text";

export function EmployeeDashboard (){
    return(
        <div className="main pt-[100px] p-10 bg-[url('../assets/Gradient.svg')] bg-no-repeat bg-contain bg-dark-900 min-w-screen h-[100vw]">
            <div className="sideBar">
                <SideBar/>
            </div>
            <div className="header flex items-center justify-between">
                <div className="col-1 text-white">
                    <h1 className="font-black text-[2.5rem]">Dashboard</h1>
                    <p className=" text-[1.2rem] text-glass-800">Bem-vindo, João!</p>
                </div>

                <div className="col-2 flex justify-center items-center gap-6">
                    <div className="search mt-2 p-5 justify-center bg-glass-500 bg-[url('../assets/search.svg')] bg-no-repeat bg-auto bg-center  w-[30px] h-[30px] rounded-[8px]">
                    </div>

                    <div className="button w-[150px] h-[35px]">
                        <Button type='submit' className='min-w-fit max-w-xs'>       
                            + Add New 
                        </Button>
                    </div>
                </div>
            </div>
            <div className="body mt-10 flex justify-between">
                <StaticCardDashboard/>
                <StaticCardDashboard/>
            </div>

            <div className="flex flex-col gap-3 pt-8 px-20">
                <div className="flex flex-row justify-center gap-10 pb-3">
                    <Text className="font-bold text-3xl text-green-500 ">Todos</Text>
                    <Text className="font-bold text-3xl text-gray-500 " >Agendados</Text>
                    <Text className="font-bold text-3xl text-gray-500 ">Finalizados</Text>
                </div>
                <HistoricItemCurrent></HistoricItemCurrent>
                <HistoricItemCurrent></HistoricItemCurrent>
                <HistoricItemCurrent></HistoricItemCurrent>
                <HistoricItemCurrent></HistoricItemCurrent>
                <HistoricItemCurrent></HistoricItemCurrent>
                <HistoricItemCurrent></HistoricItemCurrent>
                <HistoricItemCurrent></HistoricItemCurrent>
                <HistoricItemCurrent></HistoricItemCurrent>
                <HistoricItemCurrent></HistoricItemCurrent>
            </div>
        </div>
    )
}