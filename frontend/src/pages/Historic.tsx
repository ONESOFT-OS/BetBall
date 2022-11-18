import { HistoricGame } from "../components/HistoricGame";
import { NavBar } from "../components/NavBar";


export function Historic() {
  return (
    <div className="relative text-white w-screen h-screen bg-gradient-to-bl from-green-900 via-gray-900 to-black ">
        <NavBar/>
        <div className="absolute bottom-0 h-[50rem] w-screen ">       
          <div className="h-[9rem] w-[25rem]  ml-28">
            <h1 className="text-[50px]">Perfil</h1> 
            <ul  className="flex flex-row text-[20px] leading-6	justify-between">
              <li> <a href="">Configurações</a> </li>
              <li> <a href="">Carteira</a></li>
              <li> <a href="">Histórico</a></li>
            </ul>
          </div>
          <div>

         <div className="absolute bottom-0 h-[40rem] w-screen  flex " >
          <div className="flex flex-col items-center justify-center w-[70rem]">
            <h1 className="text-[40px] mb-5">Fulano</h1> 
            <img className="h-[10rem] w-[10rem]" src="" alt="" />
            <div className="flex flex-row justify-between w-[25rem] text-center text-[30px] mt-5">

              <div><p>200</p> <p>Apostas</p> </div>
             
              <div ><p>158</p> <p>Ganhas</p></div>
             
              <div> <p>50</p> <p>Perdidas</p></div>
            </div>
          </div>
          <div className="h-[38rem] w-0.5 bg-[#ffffff] mt-3"></div>

          <div className="w-screen">
            <ul className="h-[3rem] flex justify-around items-center">
              <li>Time</li>
              <li>Valor apostado</li>
              <li>Aposta</li>
              <li>Data</li>
              <li>Total Carteira</li>
            </ul>
            <div className="h-[35rem] overflow-y-scroll">             
              <HistoricGame teamHome="Flamengo" teamOut="Palmeiras" valueBet={10.00} statusBet="Ganha" date='20/07/2022' valueWallet={500.00}/>
              <HistoricGame teamHome="Flamengo" teamOut="Palmeiras" valueBet={25.00} statusBet="Ganha" date='20/07/2022' valueWallet={50.00}/>
              <HistoricGame teamHome="Curitiba" teamOut="São Paulo" valueBet={10.00} statusBet="Perdida" date='20/07/2022' valueWallet={500.00}/>
              <HistoricGame teamHome="Flamengo" teamOut="Palmeiras" valueBet={30.00} statusBet="Ganha" date='20/07/2022' valueWallet={15.00}/>
              <HistoricGame teamHome="Flamengo" teamOut="Fluminense" valueBet={10.00} statusBet="Perdida" date='20/07/2022' valueWallet={500.00}/>
              <HistoricGame teamHome="Bahia" teamOut="Vitória" valueBet={50.00} statusBet="Estornada" date='20/07/2022' valueWallet={100.00}/>
              <HistoricGame teamHome="Flamengo" teamOut="Palmeiras" valueBet={10.00} statusBet="Ganha" date='20/07/2022' valueWallet={250.00}/>
            </div>

          </div>
         </div>
        
          </div>
        </div>       
    </div>
  );
}
