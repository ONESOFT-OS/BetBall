import {Link} from "react-router-dom";
import {Heading} from "../components/Heading";
import {NavBar} from "../components/NavBar";
import {Text} from "../components/Text";
import {User} from "phosphor-react";
import {TextInput} from "../components/TextInput";
import {LockKey} from "phosphor-react";
import {Button} from "../components/Button";
import axios from "axios";
import {useState} from "react";
import {createStandaloneToast} from "@chakra-ui/react";
import api from "../services/api";

export function PerfilSettings() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let nick = undefined
    const user = localStorage.getItem("nickname");
    const {toast} = createStandaloneToast();
    if (user === null) {
        nick = undefined
    } else {
        nick = user
    }

    async function getEmail() {

        axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/getemail',

            data: {
                nickname: user,
            }
        }).then(function (reponse) {
            const result = reponse.data
            setEmail(result)
        })
    }

    function reload() {
        window.location.reload()
    }

    function save() {
        api.post('/user/update', {
            nickname: user,
            email,
            password,
        }).then(function (res) {
            toast({
                title: '',
                description: 'Senha alterada com sucesso',
                status: 'success',
                duration: 3000,
                isClosable: false
            });

            setTimeout(reload, 1000)
        })
    }

    getEmail()

    return(
        <div className="bg-[url('../assets/Gradient.svg')] bg-black min-w-screen min-h-screen  max-h-full max-w-full flex flex-col items-center justify-center">
        <div  className="bg-gray-900 w-[1000px] h-[600px] min-h-max min-w-max flex flex-col rounded-2xl bg-opacity-70  mt-10 mb-10">
            <header className="flex flex-row justify-between pt-12 px-10">
                <div className="flex flex-row justify-start items-baseline">
                    <Heading size="xlg">Perfil</Heading>
                </div>
                <Link to="/user/dashboard">
                    <Button mode="closer" onClick={close} className=" px-[19px]">
                            X
                    </Button>
                </Link>
            </header>

            <div className="flex flex-row pt-2 px-12 space-x-8">
                <Text size="lg" className="text-green-500 underline font-bold"><Link
                    to={'/perfil/settings'}>Configura????es</Link></Text>
                <Text size="lg" className="font-semibold hover:text-green-500"><Link
                    to={'/perfil/withdraw'}>Carteira</Link></Text>
                <Text size="lg" className="font-semibold hover:text-green-500"><Link
                    to={'/perfil/historic'}>Hist??rico</Link></Text>
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
                        <div className="flex flex-col items-center">
                            <Text size="2lg">130</Text>
                            <Text size="2lg">Ganhos</Text>
                        </div>
                        <div className="h-[4rem] w-0.5 bg-[#ffffff] bg-opacity-60 mt-1 shadow-sm shadow-black"></div>

                        <div className="flex flex-col items-center">
                            <Text size="2lg">70</Text>
                            <Text size="2lg">Perdas</Text>
                        </div>
                    </div>
                </div>

                <div className="h-[350px] w-0.5 bg-[#ffffff] bg-opacity-60  shadow-sm shadow-black"></div>

                <div className="flex flex-col items-start mr-[1rem] w-[32rem]">
                    <Text className="mb-[2rem]" size="2lg">Informa????es</Text>
                    <div className="h-0.5 w-[30rem] bg-[#ffffff] mb-[2rem]"></div>

                    <div className="flex justify-between w-full mb-[2rem]">
                        <label htmlFor="email" className="w-6/12">
                            <Text size="sm" className='font-semibold'>E-mail</Text>
                            <TextInput.Root>
                                <TextInput.Input
                                    required type='email'
                                    id='email'
                                    autoComplete="off"
                                    placeholder={email}
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    disabled/>
                                <TextInput.Icon>
                                    <LockKey/>
                                </TextInput.Icon>
                            </TextInput.Root>
                        </label>

                        <label htmlFor="Nickname">
                            <Text size="sm" className='font-semibold'>Nickname</Text>
                            <TextInput.Root>
                                <TextInput.Input required type='text' id='nick' autoComplete="off" placeholder={nick}
                                                 disabled/>
                                <TextInput.Icon>
                                    <LockKey/>
                                </TextInput.Icon>
                            </TextInput.Root>
                        </label>
                    </div>

                    <div className=" h-0.5  w-[30rem] mb-[2rem] bg-[#ffffff]"></div>

                    <label htmlFor="Senha" className="w-full">
                        <Text size="sm" className='font-semibold'>Senha</Text>
                        <TextInput.Root>
                            <TextInput.Input required type='password' id='password' autoComplete="off"
                                             placeholder='******' value={password}
                                             onChange={(e) => setPassword(e.target.value)}/>
                        </TextInput.Root>
                    </label>

                    <div className="flex w-full justify-end">
                        <Button className='mt-4  w-fit mr-[2rem]' type='submit'>Cancelar</Button>
                        <Button className='mt-4 w-fit' type='submit' onClick={save}>Salvar</Button>
                    </div>
                </div>
            </div>
          </div>
      </div>
      </div>
    )
}