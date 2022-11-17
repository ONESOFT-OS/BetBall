import { SelectIcon } from "@radix-ui/react-select";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Select } from "../components/Select";
import { Text } from "../components/Text";

export function Deposit(){
    return(
        <div  className="bg-[url('../assets/Gradient.svg')] bg-gray-900 min-w-screen min-h-screen  max-h-full max-w-full flex items-center justify-center">
                <div className="bg-black w-[1000px] h-[500px] min-h-max min-w-max flex flex-col rounded-2xl opacity-70">
                <header className="flex flex-row justify-between pt-12 px-10">
                    <Heading size="xlg"> Carteira</Heading>
                    <Button mode="closer" className="px-4">X</Button>
                </header>

                <div className="flex flex-row pt-2 px-12 space-x-8">
                    <Text size="lg"   className="text-green-500 underline font-bold " ><Link to={'/'}>Adicionar</Link></Text>
                    <Text size="lg"   className="font-semibold hover:text-green-500" ><Link to={'/'}>Sacar</Link></Text>
                </div>

                <div className="flex h-12 w-60 mt-10 ml-12">
                    <Select />
                </div>
            </div>
        </div>
    )
}