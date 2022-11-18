import { Envelope } from "phosphor-react";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../assets/Logo";
import { Link } from "react-router-dom";
import { NavBar } from "../components/NavBar";

export function Home(){
    return (
        // Div principal
        //Header contendo nav bar
        <div className="bg-black min-w-screen min-h-screen  max-h-full max-w-full flex flex-col items-center justify-center">
            <header>
                <NavBar/>
            </header>
            <div>
                
            </div>
        </div>

        )
}
    
    