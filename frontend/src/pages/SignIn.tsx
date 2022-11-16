import { Envelope } from "phosphor-react";
import { TextInput } from "../components/TextInput";
import { Text } from "../components/Text";
import { Checkbox } from "../components/Checkbox";
import { Button } from "../components/Button";
import {Lock} from 'phosphor-react'
import { Heading } from "../components/Heading";
import { Logo } from "../assets/Logo";
import {Link} from 'react-router-dom';
import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../src/contexts/Auth/AuthContext";
import axios from "axios";

export function SignIn(){

  // const auth = useContext(AuthContext);
  // const navigate = useNavigate();
 
  // const [email, setemail] = useState("user1@gmail.com");
  // const [password, setPassword] = useState("123456789");
  // const [count, setCount] = useState(0)
  
  // const handleSingout = async () =>{
  //     await auth.signout();
  //     window.location.href = window.location.href;
  
  //   }
  // const handleLogin = async () =>{
  //     if(email && password) {
  //         const isLogged = await auth.signin(email, password);
  //         if(isLogged){
  //             navigate('./');
  //         }
  //     }
      
  // }

  const [username, setEmail]  = useState('')
  const [password, setPassword]  = useState('')

  async function handleSignIp(event: FormEvent){
    event.preventDefault();
    
    var bodyFormData = new FormData();
    bodyFormData.append('username', username);
    bodyFormData.append('password', password);

    axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/token',
        data: bodyFormData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then(function (response) {
        console.log(response)
      });
}

    return(
        <div className="w-screen h-screen bg-gradient-to-bl from-green-900 via-gray-900 to-black flex flex-col items-center justify-center ">
            <header className="mt-4">
                <Logo/>
            </header>

            <form onSubmit={handleSignIp} className="bg-slate-50 bg-opacity-5 w-full max-w-2xl flex flex-col items-center justify-center rounded-2xl gap-3">
                    <div className="flex flex-col  w-full max-w-sm gap-4  mt-12 mb-8">
                        <Heading size="lg"> Entrar</Heading>
                        <Text>Entre para acessar sua conta</Text>
                    </div>

                <label htmlFor='email' className='flex flex-col gap-3 w-full max-w-sm'>
                    <Text size="sm" className='font-semibold'>Endereço de e-mail</Text>
                    <TextInput.Root>
                    <TextInput.Icon>
                        <Envelope/>
                    </TextInput.Icon>
                    <TextInput.Input value={username} onChange={(e) => setEmail(e.target.value)} type='email' id='email' autoComplete="off" placeholder='Digite seu e-mail'/>
                    </TextInput.Root>
                </label>

              <label htmlFor='password' className='flex flex-col gap-3 w-full max-w-sm'>
                <Text size="sm" className='font-semibold'>Sua senha</Text>
                <TextInput.Root>
                  <TextInput.Icon>
                    <Lock/>
                  </TextInput.Icon>
                  <TextInput.Input value={password} onChange={(e) => setPassword(e.target.value)} type='password' id='password' placeholder='********'/>
                </TextInput.Root>
              </label>

              <label htmlFor='remember' className='flex items-center w-full max-w-sm gap-2 mt-2'>
                <Checkbox id='remember'/>
                <Text size='sm' className='text-gray-200'>Matenha-me conectado</Text>
              </label>

              <Button  type='submit' className='mt-4 mb-12 w-fit'>Entrar na plataforma</Button>
              
              {/* //botão só para testagem da remoção do token ao sair no login
              <Button onClick={handleSingout} type='submit' className='mt-4 mb-12 w-fit'>Sair da plataforma</Button> */}

            </form>

            <footer className=" flex flex-col items-center gap-3 mt-4 ">
                <Text  size='sm'>Não possui uma conta? 
                  <Link to={"/signup"} className='text-green-700 underline hover:text-white'>   
                  Crie uma agora!
                  </Link>
                </Text>
                <Text asChild size='sm'>
                <Link to={"/forgotpassword"} className='text-green-700 underline hover:text-white'>Esqueceu sua senha?</Link>
                </Text>
            </footer>

        </div>
    )
}