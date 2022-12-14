import { MenuItem } from "@mui/material";
import { User } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { NavBar } from "../components/NavBar";
import { SelectM } from "../components/SelectM";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";

export function PerfilWithdraw(){
    
    const [valor, setValor]  = useState('')
    const saldo = 100

    function maskCoin() {

        const i = 0
        const dinheiro = i.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
        console.log(dinheiro)
        
    }

    return(
        <div className="bg-[url('../assets/Gradient.svg')] bg-black min-w-screen min-h-screen  max-h-full max-w-full flex flex-col items-center">
            <NavBar/>
            <div  className="bg-gray-900 w-[1000px] h-[600px] min-h-max min-w-max flex flex-col rounded-2xl bg-opacity-70  mt-28">
                <header className="flex flex-row justify-between pt-12 px-10">
                    <div className="flex flex-row justify-start items-baseline">
                        <Heading size="xlg">Perfil</Heading>
                    </div>
                </header>

                <div className="flex flex-row pt-2 px-12 space-x-8">
                    <Text size="lg"   className="font-semibold hover:text-green-500" ><Link to={'/perfil/settings'}>Configurações</Link></Text>
                    <Text size="lg"   className="text-green-500 underline font-bold" ><Link to={'/perfil/withdraw'}>Carteira</Link></Text>
                    <Text size="lg"   className="font-semibold hover:text-green-500" ><Link to={'/perfil/historic'}>Histórico</Link></Text>
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

                    <div className="flex flex-col items-center gap-12 mr-32">
                        <div className="flex flex-row pt-2 px-12 space-x-8">
                            <Text size="lg"   className="font-semibold hover:text-green-500 " >
                                <Link to={'/perfil/deposit'}>Adicionar</Link>
                            </Text>
                            <Text size="lg"   className="font-bold text-green-500 underline" >
                                <Link to={'/perfil/withdraw'}>Sacar</Link>
                            </Text>
                        </div>
                        <div className="flex flex-col  items-center h-12 w-60 ">
                            {/* <SelectR /> */}
                            <Text className="ml-2">Forma de saque</Text>
                            <SelectM defaultText="Método" >
                                <MenuItem value={1}>Pix</MenuItem>
                                <MenuItem value={2}>Cartão de Crédito</MenuItem>
                                <MenuItem value={3}>Transferência bancária</MenuItem>
                            </SelectM>
                        </div>

                        <label className='flex flex-col items-center w-full max-w-[260px]  gap-2 '>
                            <Text>Valor do saque</Text>
                            <TextInput.Root className="h-5  bg-white opacity-60" >
                                <TextInput.Input className="text-black" type="number" name="quantity" step="0.01" min="0.01" value={valor} onChange={(e) => setValor(e.target.value)}/>
                            </TextInput.Root>
                        </label>
                        <Button className="w-fit ">Confirmar</Button>
                    </div>
                </div>

            </div>

        </div>
    )
}