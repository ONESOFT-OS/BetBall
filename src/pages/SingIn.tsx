import { Envelope } from "phosphor-react";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Checkbox } from "../components/Checkbox";
import { Button } from "../components/Button";
import {Lock} from 'phosphor-react'
import { Heading } from "../components/Heading";
import { Logo } from "../Logo";

export function SingIn(){
    return(
        <div className="flex flex-col items-start justify-start  bg-gray-900 divide-y divide-green-500 max-h-screen-sm">
            <div>
                <Logo />
            </div>
            <div className=" bg-gray-900 flex  items-center justify-center gap-28">
                <div className="flex flex-col items-center justify-center px-14">

                    <Heading size='lg' classname='mt-4 '>
                        ENTRE NA SUA CONTA
                    </Heading>
                    <form className="flex flex-col items-stretch w-full max-w-md mt-10 gap-4">
                        <label htmlFor='email' className='flex flex-col gap-3'>
                            <Text className='font-semibold text-sm'>Endereço de e-mail</Text>
                            <TextInput.Root>
                                <TextInput.Icon>
                                    <Envelope />
                                </TextInput.Icon>
                                <TextInput.Input type='email' id='email' placeholder='example@gmail.com' />
                            </TextInput.Root>
                        </label>

                        <label htmlFor='password' className='flex flex-col gap-3'>
                            <Text className='font-semibold'>Sua senha</Text>
                            <TextInput.Root>
                                <TextInput.Icon>
                                    <Lock />
                                </TextInput.Icon>
                                <TextInput.Input type='password' id='password' placeholder='********' />
                            </TextInput.Root>
                        </label>

                        <label htmlFor='remember' className='flex items-center gap-2'>
                            <Checkbox id='remember' />
                            <Text size='sm' className='text-white'>Ao se cadastrar no BetBall, você concorda com nossos <a href="" className="underline text-green-700">termos de serviço</a> e confirma ter 18 anos ou mais.</Text>
                        </label>

                        <div className="flex flex-row gap-3">
                            <Button type='submit' className='mt-4'>Entrar na plataforma</Button>
                            <Button type='submit' className='mt-4 bg-gray-800 text-green-700'>Criar nova conta</Button>
                        </div>
                    </form>

                    <footer className="flex flex-col items-center gap-4 mt-8 w-full max-w-md">
                        <Text asChild size='sm'>
                            <a href='' className='text-green-500 underline hover:text-gray-200 '>Esqueceu sua senha?</a>
                        </Text>
                    </footer>
                </div>

                <div className="flex justify-end mx-0">
                    <img className=" h-[565px] " src="src//assets/Jog2.png" alt="" />
                    <img className=" h-[565px] " src="src//assets/Jog1.png" alt="" />
                </div>
            </div>
        </div>
    )
}