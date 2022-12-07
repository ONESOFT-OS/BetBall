import { Banner } from "../components/Banner";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";

export function Home(){
    return(
        <div className="bg-[url('../assets/Gradient.svg')] bg-black min-w-screen min-h-screen  max-h-full max-w-full flex flex-col items-center justify-center">
            <span>
                <NavBar />
            </span>
            <span>
                <Banner />
            </span>
            <div>
                <Card outTeam={""} homeTeam={""}/>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>

    )
}