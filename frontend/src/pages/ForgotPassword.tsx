import { Envelope } from "phosphor-react";
import { Button } from "../components/Button";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Logo } from "../assets/Logo";
import { Link } from "react-router-dom";

export function ForgotPassword(){
    return(
       <div className="w-screen h-screen bg-gradient-to-bl from-green-900 via-gray-900 to-black flex flex-col items-center justify-center ">
            <header className="mt-4">
                <Logo />
            </header>

            <form className="h-2/5 bg-slate-50 bg-opacity-5 w-full max-w-2xl flex flex-col items-center justify-center rounded-2xl gap-3">
                <Text size="lg" className='font-semibold'>Esqueceu sua senha?</Text>

                <label htmlFor='email' className='flex flex-col gap-3 w-full max-w-sm'>
                    <Text size="sm" className='font-semibold'>Digite seu endereço de e-mail</Text>
                    <TextInput.Root>
                    <TextInput.Icon>
                        <Envelope/>
                    </TextInput.Icon>
                    <TextInput.Input autoComplete="off" type='email' id='email' placeholder='Digite seu email'/>
                    </TextInput.Root>
                </label>

              <Button type='submit' className='mt-4 mb-12 w-fit'>Enviar</Button>
            
            </form>
        </div>
    )
}