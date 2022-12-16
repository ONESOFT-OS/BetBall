import { Envelope } from "phosphor-react";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Checkbox } from "../components/Checkbox";
import { Button } from "../components/Button";
import { Lock } from "phosphor-react";
import { Heading } from "../components/Heading";
import { Logo } from "../assets/Logo";
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { createStandaloneToast, useToast } from '@chakra-ui/react';
import axios from "axios";
import {redirectPages} from "../utils/roles";

export function SignIn() {
    const [username, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { loginAuthentication } = useAuth();
    const navigate = useNavigate();
    const {toast} = createStandaloneToast();
    async function handleSignIp(event: FormEvent) {
        event.preventDefault();
        const auth = await loginAuthentication(username, password);
        if (auth) {
            axios({
                    method: 'post',
                    url: 'http://127.0.0.1:8000/getnick',
                    data: {
                    email: username,
                    }
                }).then(function (response){
                    localStorage.setItem("nickname", response.data[0][0]);
                })

            navigate(redirectPages[auth.role]);
        } else{
            setPassword('');
            toast({
                title: 'Erro',
                description: 'Senha ou Usuário incorretos',
                status: 'error',
                duration: 3000,
                isClosable: false
            });
        }
    }

    return (
        <div className="w-screen h-screen bg-gradient-to-bl from-green-900 via-gray-900 to-black flex flex-col items-center justify-center ">
            <header className="mt-4 mb-2">
                <Logo />
            </header>

            <form
                onSubmit={handleSignIp}
                className="bg-slate-50 bg-opacity-5 w-full max-w-2xl flex flex-col items-center justify-center rounded-2xl gap-3"
            >
                <div className="flex flex-col  w-full max-w-sm gap-4  mt-12 mb-8">
                    <Heading size="lg">Entrar</Heading>
                    <Text>Entre para acessar sua conta</Text>
                </div>

                <label
                    htmlFor="email"
                    className="flex flex-col gap-3 w-full max-w-sm"
                >
                    <Text size="sm" className="font-semibold">
                        Endereço de e-mail
                    </Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Envelope />
                        </TextInput.Icon>
                        <TextInput.Input
                            value={username}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="email"
                            autoComplete="off"
                            placeholder="Digite seu e-mail"
                        />
                    </TextInput.Root>
                </label>

                <label
                    htmlFor="password"
                    className="flex flex-col gap-3 w-full max-w-sm"
                >
                    <Text size="sm" className="font-semibold">
                        Sua senha
                    </Text>
                    <TextInput.Root>
                        <TextInput.Icon>
                            <Lock />
                        </TextInput.Icon>
                        <TextInput.Input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="password"
                            placeholder="********"
                        />
                    </TextInput.Root>
                </label>

                <label
                    htmlFor="remember"
                    className="flex items-center w-full max-w-sm gap-2 mt-2"
                >
                    <Checkbox id="remember" />
                    <Text size="sm" className="text-gray-200">
                        Matenha-me conectado
                    </Text>
                </label>

                <Button type="submit" className="mt-4 mb-12 w-fit">
                    Entrar na plataforma
                </Button>
            </form>

            <footer className=" flex flex-col items-center gap-3 mt-4 ">
                <Text size="sm">
                    Não possui uma conta?
                    <Link
                        to={"/signup"}
                        className="text-green-700 underline hover:text-white"
                    >
                        Crie uma agora!
                    </Link>
                </Text>

                <Text asChild size="sm">
                    <Link
                        to={"/password_recovery"}
                        className="text-green-700 underline hover:text-white"
                    >
                        Esqueceu sua senha?
                    </Link>
                </Text>
            </footer>
        </div>
    );
}
