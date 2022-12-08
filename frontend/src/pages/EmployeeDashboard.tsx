import { Button } from "../components/Button";
import { StaticCardDashboard } from "../components/StaticCardDashboard";

export function EmployeeDashboard (){
    return(
        <div className="main pt-[100px] p-10 bg-[url('../assets/Gradient.svg')] bg-no-repeat bg-contain bg-dark-900 min-w-screen h-[100vw]">
            <div className="header flex items-center justify-between">
                <div className="col-1 text-white">
                    <h1 className="font-black text-[2.5rem]">Dashboard</h1>
                    <p className=" text-[1.2rem] text-glass-800">Bem-vindo, João!</p>
                </div>
                <div className="col-2 flex justify-center items-center gap-6">
                    <div className="search-icon bg-glass-500 w-[32px] h-[30px] rounded-[8px]">
                    </div>
                    <div className="button w-[150px] h-[35px]">
                        <Button type='submit' className='min-w-fit max-w-xs'>       
                            + Add New 
                        </Button>
                    </div>
                </div>
            </div>
            <div className="body mt-10">
                <StaticCardDashboard/>
            </div>
        </div>
    )
}