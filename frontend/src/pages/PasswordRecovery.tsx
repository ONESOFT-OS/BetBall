import {Link, useNavigate} from "react-router-dom";
import {FormEvent, useCallback, useState} from "react";

import axios from "axios";
import {Heading} from "../components/Heading";
import {Text} from "../components/Text";
import {TextInput} from "../components/TextInput";
import {Envelope} from "phosphor-react";
import {Button} from "../components/Button";
import {Logo} from "../assets/Logo";

type FormSubmit = FormEvent<HTMLFormElement>;

const PasswordRecovery = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');

    const onSubmit = useCallback(async (formValues: FormSubmit) => {
        console.log(formValues);

        try {
            await axios.post('/path_to_passrecovery_backend', formValues)
        } catch (error) {
            console.warn(error)
        }
    }, [navigate]);

    return (
        <div className="w-screen h-screen bg-gradient-to-bl from-green-900 via-gray-900 to-black flex flex-col items-center justify-center ">
            <header className="mt-4 mb-2">
                <Logo/>
            </header>
            <form
                onSubmit={onSubmit}
                className="bg-slate-50 bg-opacity-5 w-full max-w-2xl flex flex-col items-center justify-center rounded-2xl gap-3">
                <div className="flex flex-col  w-full max-w-sm gap-4  mt-12 mb-8">
                    <Heading size="lg">
                        Recuperar Senha
                    </Heading>
                    <Text>
                        Insira seu e-mail para recuperar sua senha
                    </Text>
                </div>

                <label
                    htmlFor='email'
                    className='flex flex-col gap-3 w-full max-w-sm'>
                    <Text
                        size="sm"
                        className='font-semibold'>
                        Endereço de e-mail
                    </Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Envelope/>
                        </TextInput.Icon>
                        <TextInput.Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type='email'
                            id='email'
                            autoComplete="off"
                            placeholder='Digite seu e-mail'/>
                    </TextInput.Root>
                </label>

                <Button
                    type='submit'
                    className='mt-4 mb-12 w-fit'>
                    Recuperar Senha
                </Button>

                <Link
                    to={"/signin"}
                    className='text-green-700 underline hover:text-white'>
                    Voltar para Login
                </Link>

            </form>
        </div>
    );
}


export {PasswordRecovery}