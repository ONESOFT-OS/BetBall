import { Heading } from "../components/Heading";
import { NavBar } from "../components/NavBar";

export function Home(){
    return(
        <div className="bg-[url('../assets/Gradient.svg')] bg-black min-w-screen min-h-screen  max-h-full max-w-full flex flex-col items-center justify-center">
            <NavBar />
        </div>

    )
}
