import { Button } from "../components/Button";
import { NavBar } from "../components/Navbar";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { EyeClosed, Eye } from "phosphor-react";
import { useState } from "react";


export function ChangeUsersPassword() {
    const [visible, setVisibility] = useState(false)
    const toggle = () =>{
        visible ? setVisibility(false)  : setVisibility(true)
    }

    let Icon = visible ? <Eye/>: <EyeClosed/>
    let Password =  visible ? "" : "password" 

    return(
        <div  className="bg-[url('../assets/Gradient.svg')] bg-black min-w-screen min-h-screen  max-h-full max-w-full flex flex-col items-center text-white">
            <NavBar/>
             <div  className="bg-gray-900 w-[1000px] h-[600px] min-h-max min-w-max flex justify-center flex-row rounded-2xl bg-opacity-70  mt-10 mb-10">
                
                <div className="w-11/12 flex flex-col justify-center items-center">
                    <div className="flex w-11/12 justify-around text-center pr-[1rem]">
                        <Text className="w-[8rem] lg mb-[2rem]">Usuários</Text>                        
                    </div>

                    <div className="w-11/12 flex flex-row justify-around text-center pr-[1.5rem]" >
                        <Text className="w-[8rem]">Nome</Text>
                        <Text className="w-[8rem]">Tipo de usuário</Text>
                        <Text className="w-[15rem]">Senha</Text>
                    </div>
                    <div className="w-11/12 h-0.5 bg-white bg-opacity-60  shadow-sm shadow-black"></div>
                   
                   
                    <div  className="h-3/5 w-11/12 text-center overflow-y-scroll"> 
                        <div className="h-[4rem] flex flex-row justify-around mt-[1rem]">
                            <div className="flex items-center justify-center w-[8rem]">
                            <TextInput.Root className="h-5" >
                                <TextInput.Input type="text" value={"Fulano"} />
                            </TextInput.Root>
                            </div>
                            <div className="flex items-center justify-center w-[8rem]">
                            <TextInput.Root className="h-5" >
                                <TextInput.Input type="text" value={"Administrador"} />
                            </TextInput.Root>
                            </div>

                            <label className='flex flex-col justify-center items-center w-full max-w-[260px]  gap-2 '>
                        
                                <TextInput.Root className="h-5 w-[15rem]" >
                                    <TextInput.Input  type={Password} value={"senhaqualquer"}/>
                                    <div onClick={toggle}>
                                        {<TextInput.Icon >
                                            {Icon}
                                        </TextInput.Icon>}
                                    </div>
                                </TextInput.Root>
                            </label>
                        </div>
                    </div>
                    <div className="w-9/12 flex flex-row justify-end ">
                        <Button className="w-fit mt-[2rem] mr-[8rem]">Cancelar</Button>
                        <Button className="w-fit mt-[2rem]">Salvar</Button>
                    </div>
                </div> 
            </div>
        </div>
    )

} 