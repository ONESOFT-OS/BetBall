import { Logo } from "../Logo";
import {ICad} from "../ICad"
import { Checkbox } from "../components/Checkbox";
import { Envelope, User,Lock } from "phosphor-react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";

export function SignUp(){
    return(
        <div className="w-screen h-screen bg-gradient-to-bl from-green-900 via-gray-900 to-black flex flex-col items-start ">
            <header>
                <Logo className="pt-3"/>
            </header>

            <div className="flex flex-row w-full px-14 gap-28 ">
                <ICad className=" h-[500px] w-[500px]"/>

                <form className="bg-slate-50 bg-opacity-5 w-full max-w-md flex flex-col items-center justify-center rounded-2xl gap-1 ">
                    <div className="flex flex-col  w-full max-w-sm gap-4  mt-12 mb-8">
                        <Heading size="lg"> Cadastre-se</Heading>
                        <Text>Crie uma conta para acessar</Text>
                    </div>

                <label htmlFor='text' className='flex flex-col gap-3 w-full max-w-sm'>
                    <Text size="sm" className='font-semibold'>Nickname</Text>
                    <TextInput.Root>
                    <TextInput.Icon>
                        <User/>
                    </TextInput.Icon>
                    <TextInput.Input  type='text' id='nick' placeholder='Digite seu Nickname'/>
                    </TextInput.Root>
                </label>

                <label htmlFor='email' className='flex flex-col gap-3 w-full max-w-sm'>
                    <Text size="sm" className='font-semibold'>Endereço de e-mail</Text>
                    <TextInput.Root>
                    <TextInput.Icon>
                        <Envelope/>
                    </TextInput.Icon>
                    <TextInput.Input  type='email' id='email' autoComplete="off" placeholder='Digite seu e-mail'/>
                    </TextInput.Root>
                </label>

              <label htmlFor='password' className='flex flex-col gap-3 w-full max-w-sm'>
                <Text size="sm" className='font-semibold'>Sua senha</Text>
                <TextInput.Root>
                  <TextInput.Icon>
                    <Lock/>
                  </TextInput.Icon>
                  <TextInput.Input type='password' id='password' placeholder='********'/>
                </TextInput.Root>
              </label>

              <label htmlFor='remember' className='flex flex-cow items-center w-full  max-w-sm gap-4 mt-2'>
                <Checkbox id='remember' className="w-10 h-6 p-[2px] bg-green-700 rounded"/>
                <Text size='sm' className='text-white'>Ao se cadastrar no BetBall, você concorda com nossos termos de serviço e confirma ter 18 anos ou mais.</Text>
              </label>

              <Button type='submit' className='mt-4 mb-12 w-fit'>Entrar na plataforma</Button>
            </form>
            </div>
            
        </div>
    )
}