import { Banner } from "../components/Banner";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { Ranking } from "../components/Ranking";
import { SelectorHome } from "../components/SelectorHome";

export function Home(){
    return(
        <div className="bg-dark-900 min-w-screen min-h-screen  max-h-full max-w-full flex flex-col items-center justify-center">
            <span>
                <NavBar />
            </span>
            <span>
                <Banner />
            </span>
            <span>
                <SelectorHome/>
            </span>
            <div>
                <Card outTeam={""} homeTeam={""}/>
                <Ranking type={"value"}/>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}