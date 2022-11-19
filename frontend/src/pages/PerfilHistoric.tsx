import { Link } from "react-router-dom";
import { Heading } from "../components/Heading";
import { HistoricGame } from "../components/HistoricGame";
import  {NavBar} from "../components/NavBar"
import { Text } from "../components/Text";
import { User } from "phosphor-react";


export function PerfilHistoric() {
  return (
    <div className="bg-[url('../assets/Gradient.svg')] bg-black min-w-screen min-h-screen  max-h-full max-w-full flex flex-col items-center justify-center ">
              <NavBar/>
            
            <div  className="bg-gray-900 w-[1000px] h-[600px] min-h-max min-w-max flex flex-col rounded-2xl bg-opacity-70  mt-10 mb-10">
                <header className="flex flex-row justify-between pt-12 px-10">
                    <div className="flex flex-row justify-start items-baseline">
                        <Heading size="xlg">Perfil</Heading>
                    </div>
                </header>

                <div className="flex flex-row pt-2 px-12 space-x-8">
                    <Text size="lg"   className="font-semibold hover:text-green-500" ><Link to={'/perfil/settings'}>Configurações</Link></Text>
                    <Text size="lg"   className="font-semibold hover:text-green-500" ><Link to={'/perfil/withdraw'}>Carteira</Link></Text>
                    <Text size="lg"   className="text-green-500 underline font-bold" ><Link to={'/perfil/historic'}>Histórico</Link></Text>
                </div>


                <div className="flex flex-row mt-5 justify-between">
                    <div className="flex flex-col items-center justify-center gap-4 ml-8">
                        <Heading size="lg"><h2>Fulano</h2></Heading>

                        <User className="bg-green-500 rounded-full w-40 h-40"></User>

                        <div className="flex flex-row space-x-9">
                            <div className="flex flex-col items-center">
                                <Text size="2lg">200</Text>
                                <Text size="2lg">Apostas</Text>
                            </div>
                            <div className="h-[4rem] w-0.5 bg-[#ffffff] bg-opacity-60 mt-1 shadow-sm shadow-black"></div>
                            <div  className="flex flex-col items-center">
                                <Text size="2lg">130</Text>
                                <Text size="2lg">Ganhos</Text>
                            </div>
                            <div className="h-[4rem] w-0.5 bg-[#ffffff] bg-opacity-60 mt-1 shadow-sm shadow-black"></div>

                            <div  className="flex flex-col items-center">
                                <Text size="2lg">70</Text>
                                <Text size="2lg">Perdas</Text>
                            </div>
                        </div>
                    </div>
                    <div className="h-[350px] w-0.5 bg-[#ffffff] bg-opacity-60  shadow-sm shadow-black"></div>

                    <div className="flex flex-col items-center  mr-[1rem] w-[32rem]">
                      <ul className="h-[2rem] flex justify-between items-center pr-[1rem] text-white w-full text-center">
                        <li className="w-[7rem]">Time</li>
                        <li className="w-[7rem]">Valor apostado</li>
                        <li className="w-[7rem]">Aposta</li>
                        <li className="w-[7rem]">Data</li>
                      </ul>

                      <div className=" w-full h-[19rem] overflow-y-scroll">
                        <HistoricGame teamHome={"Flamengo"} teamOut={"Palmeriras"} valueBet={23} statusBet={"Ganha"} date={"12/01/2002"}/>
                        <HistoricGame teamHome="Flamengo" teamOut="Palmeiras" valueBet={25.00} statusBet="Ganha" date='20/07/2022'/>
                        <HistoricGame teamHome="Curitiba" teamOut="São Paulo" valueBet={10.00} statusBet="Perdida" date='20/07/2022' />
                        <HistoricGame teamHome="Flamengo" teamOut="Palmeiras" valueBet={30.00} statusBet="Ganha" date='20/07/2022' />
                        <HistoricGame teamHome="Flamengo" teamOut="Fluminense" valueBet={10.00} statusBet="Perdida" date='20/07/2022' />
                        <HistoricGame teamHome="Bahia" teamOut="Vitória" valueBet={50.00} statusBet="Estornada" date='20/07/2022' />
                        <HistoricGame teamHome="Flamengo" teamOut="Palmeiras" valueBet={10.00} statusBet="Ganha" date='20/07/2022'/>
                      </div>
                    </div>
                </div>

            </div>

        </div>
  );
}
