import { Banner } from "../components/Banner";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Ranking } from "../components/Ranking";
import { Link } from "react-router-dom";
import { Text } from "../components/Text";
import { SelectorHome } from "../components/SelectorHome";

export function Home(){
    return(
        <section className="bg-dark-900 min-w-screen min-h-screen overflow-hidden  max-h-full max-w-full flex flex-col items-center justify-center">
            <main>
                <div className="nav">
                    <NavBar />
                </div>
                <div className="destaque">
                    <Banner/>
                </div>
                <div className="selector p-10 mt-20">
                    <div className="flex flex-row justify-center gap-10 pb-3">
                            <Link to={'/'}>  
                                <Text className="font-bold text-xl text-green-500 hover:text-green-700" >Jogos</Text>
                            </Link>
                            <Link to={'/ranking'}> 
                                <Text className="font-bold text-xl text-gray-500 ">Ranking</Text> 
                            </Link>
                    </div>
                </div>
                <div className="games flex justify-around p-8 mb-10">
                    <Card outTeam={"Barcelona"} homeTeam={"Real Madrid"} teamHomeIconScr={"../src/assets/team/barcelonaIcon.png"} teamOutIconScr={"../src/assets/team/realMadridIcon.png"}/>
                    <Card outTeam={"PSG"} homeTeam={"Chelsea"} teamHomeIconScr={"../src/assets/team/chelseaIcon.png"} teamOutIconScr={"../src/assets/team/psgIcon.png"}/>
                    <Card outTeam={"Real Madrid"} homeTeam={"Manchester United"} teamHomeIconScr={"../src/assets/team/manchesterUnitedIcon.png"} teamOutIconScr={"../src/assets/team/realMadridIcon.png"}/>
                </div>
            </main>
            <footer>
                <Footer/>
            </footer>
        </section>
    )
}