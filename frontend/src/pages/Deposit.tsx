import { Button } from "../components/Button";
import { Heading } from "../components/Heading";

export function Deposit(){
    return(
        <div  className=" w-screen h-screen bg-[url('../assets/Gradient.svg')] bg-black">
            <div className="flex flex-row justify-between pt-7 px-4">
                <Heading size="xlg"> Carteira</Heading>
                <Button mode="closer">X</Button>
            </div>
        </div>
    )
}