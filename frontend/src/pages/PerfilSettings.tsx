import { Link } from "react-router-dom";
import { Heading } from "../components/Heading";
import { NavBar } from "../components/NavBar";
import { Text } from "../components/Text";
import { User } from "phosphor-react";
import { TextInput } from "../components/TextInput";
import { LockKey } from "phosphor-react";
import { Button } from "../components/Button";

export function PerfilSettings() {
    const  nick = localStorage.getItem("nickname");
    return(
        <div className="bg-[url('../assets/Gradient.svg')] bg-black min-w-screen min-h-screen  max-h-full max-w-full flex flex-col items-center">
        <NavBar/>
      
      <div  className="bg-gray-900 w-[1000px] h-[600px] min-h-max min-w-max flex flex-col rounded-2xl bg-opacity-70   mt-10 mb-10">
          <header className="flex flex-row justify-between pt-12 px-10">
              <div className="flex flex-row justify-start items-baseline">
                  <Heading size="xlg">Perfil</Heading>
              </div>
          </header>

          <div className="flex flex-row pt-2 px-12 space-x-8">
              <Text size="lg"   className="text-green-500 underline font-bold" ><Link to={'/perfil/settings'}>Configurações</Link></Text>
              <Text size="lg"   className="font-semibold hover:text-green-500" ><Link to={'/perfil/withdraw'}>Carteira</Link></Text>
              <Text size="lg"   className="font-semibold hover:text-green-500" ><Link to={'/perfil/historic'}>Histórico</Link></Text>
          </div>


            <div className="flex flex-row mt-5 justify-between">
                <div className="flex flex-col items-center justify-center gap-4 ml-8">
                  <Heading size="lg"><h2>{nick}</h2></Heading>

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

            <div className="flex flex-col items-start mr-[1rem] w-[32rem]">
                <Text className ="mb-[2rem]" size="2lg">Informações</Text>
            <div className="h-0.5 w-[30rem] bg-[#ffffff] mb-[2rem]"></div>
              
              <div className="flex justify-between w-full mb-[2rem]">
                <label htmlFor="email" className="w-6/12">
                    <Text size="sm" className='font-semibold'>E-mail</Text>
                    <TextInput.Root >
                        <TextInput.Input required type='email' id='email' autoComplete="off" placeholder='Digite seu e-mail'  />
                        <TextInput.Icon>
                        <LockKey/>
                        </TextInput.Icon>
                    </TextInput.Root>
                </label>

                <label htmlFor="Nickname">
                    <Text size="sm" className='font-semibold'>Nickname</Text>
                    <TextInput.Root >
                        <TextInput.Input required type='email' id='email' autoComplete="off" placeholder='Fulano'  />
                        <TextInput.Icon>
                        <LockKey/>
                        </TextInput.Icon>
                    </TextInput.Root>
              </label>
              </div>

              <div className=" h-0.5  w-[30rem] mb-[2rem] bg-[#ffffff]"></div>

              <label htmlFor="Senha" className="w-full">
                    <Text size="sm" className='font-semibold'>Senha</Text>
                    <TextInput.Root >
                        <TextInput.Input required type='email' id='email' autoComplete="off" placeholder='******'  />
                    </TextInput.Root>
              </label>

              <div className="flex w-full justify-end">
                <Button className='mt-4  w-fit mr-[2rem]' type='submit' >Cancelar</Button>
                <Button className='mt-4 w-fit' type='submit' >Salvar</Button>
              </div>
            </div>
          </div>

      </div>

  </div>
    )
}