import { MenuItem } from "@mui/material";
import { SelectIcon } from "@radix-ui/react-select";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { SelectR } from "../components/SelectR";
import { SelectM } from "../components/SelectM";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { useState } from "react";

export function Deposit(){

    const [valor, setValor]  = useState('')
    const saldo = 100

    function maskCoin() {

        const i = 0
        const dinheiro = i.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        console.log(dinheiro)
        
    }

    return(
        <div  className="bg-[url('../assets/Gradient.svg')] bg-gray-900 min-w-screen min-h-screen  max-h-full max-w-full flex items-center justify-center">
                <div className="bg-black w-[1000px] h-[500px] min-h-max min-w-max flex flex-col rounded-2xl opacity-70">
                <header className="flex flex-row justify-between pt-12 px-10">
                    <div className="flex flex-row justify-start items-baseline">
                        <Heading size="xlg"> Carteira</Heading>
                        {/* <div>
                            <Text className="ml-4">Créditos: {saldo}</Text>
                        </div> */}
                    </div>
                    <Button mode="closer">X</Button>
                </header>

                <div className="flex flex-row pt-2 px-12 space-x-8">
                    <Text size="lg"   className="text-green-500 underline font-bold " ><Link to={'/deposit'}>Adicionar</Link></Text>
                    <Text size="lg"   className="font-semibold hover:text-green-500" ><Link to={'/withdraw'}>Sacar</Link></Text>
                </div>

                <div className=" flex flex-col items-center gap-12">
                    <div className="flex flex-col  items-center h-12 w-60 ">
                        {/* <SelectR /> */}
                        <Text className="ml-2">Forma de pagamento</Text>
                        <SelectM defaultText="Pagamento" >
                            <MenuItem value={1}>Pix</MenuItem>
                            <MenuItem value={2}>Cartão de Crédito</MenuItem>
                            <MenuItem value={3}>Transferência bancária</MenuItem>
                        </SelectM>
                    </div>

                    <label className='flex flex-col items-center w-full max-w-[260px]  gap-2 '>
                        <Text>Valor do depósito</Text>
                        <TextInput.Root className="h-5" >
                            <TextInput.Input  type="number" name="quantity" step="0.01" min="0.01" value={valor} onChange={(e) => setValor(e.target.value)}/>
                        </TextInput.Root>
                    </label>
                    <Button className="w-fit ">Confirmar</Button>
                </div>
            </div>
        </div>
    )
}