import {Link, useNavigate} from "react-router-dom";
import {FormEvent, useCallback, useRef, useState} from "react";

import axios from "axios";
import {Heading} from "../components/Heading";
import {Text} from "../components/Text";
import {TextInput} from "../components/TextInput";
import {Button} from "../components/Button";
import {Logo} from "../assets/Logo";
import {ModalResetPassword} from "../components/ModalResetPassword";
import {ChakraProvider, useDisclosure} from "@chakra-ui/react";
import ModalComp from "../components/ModalComp";
import {Lock} from "phosphor-react";

type FormSubmit = FormEvent<HTMLFormElement>;

const ConfirmPasswordRecovery = () => {

    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();

    const [confirmationCode, setConfirmationCode] = useState('');

    const onSubmit = (async (formValues: FormSubmit) => {
        console.log(formValues);

        formValues.preventDefault();

        try {
            const response = await axios.post('/confirm_passwordrecoverybackend', formValues)

            if(response.data.status == 'SUCCESS'){

            }
        } catch (error) {
            onOpen()
            console.warn(error)
        }
    });

    return (
        <ChakraProvider>
            <div className="w-screen h-screen bg-gradient-to-bl from-green-900 via-gray-900 to-black flex flex-col items-center justify-center ">
                <header className="mt-4 mb-2">
                    <Logo/>
                </header>

                {isOpen && (<ModalResetPassword
                    isOpen={isOpen}
                    onClose={onClose}
                    />)}

                <form
                    onSubmit={onSubmit}
                    className="bg-slate-50 bg-opacity-5 w-full max-w-2xl flex flex-col items-center justify-center rounded-2xl gap-3">
                    <div className="flex flex-col  w-full max-w-sm gap-4  mt-12 mb-8">
                        <Heading size="lg">
                            Recuperar Senha
                        </Heading>
                        <Text>
                            Insira o código enviado pra seu email
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
                                <Lock/>
                            </TextInput.Icon>
                            <TextInput.Input
                                value={confirmationCode}
                                onChange={(e) => setConfirmationCode(e.target.value)}
                                type='text'
                                id='text'
                                autoComplete="off"
                                placeholder='Digite o código de confirmação'/>
                        </TextInput.Root>
                    </label>

                    <Button
                        type='submit'
                        className='mt-4 mb-12 w-fit'>
                        Submit
                    </Button>

                    <Link
                        to={"/signin"}
                        className='text-green-700 underline hover:text-white'>
                        Voltar para Login
                    </Link>
                </form>
            </div>

        </ChakraProvider>
    );
}


export {ConfirmPasswordRecovery}