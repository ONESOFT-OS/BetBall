import { Link } from "react-router-dom";
import { Heading } from "../components/Heading";
import { NavBar } from "../components/NavBar";
import { Text } from "../components/Text";
import { User } from "phosphor-react";
import { TextInput } from "../components/TextInput";
import { LockKey } from "phosphor-react";
import { Button } from "../components/Button";

export function PerfilAdmSettings() {
    return(
        <div className="bg-[url('../assets/Gradient.svg')] bg-black min-w-screen min-h-screen  max-h-full max-w-full flex flex-col items-center justify-center ">
          <div className="card bg-glass-300 min-w-[80vw] h-[90vh] m-[60px] rounded-[10px] p-16">
            <div className="profile-header flex gap-5 text-white font-normal">
              <div className="photo">
                  <img className="w-[50px] h-[50px] rounded-[100%]" src="../src/assets/users/user.png"/>
              </div>
              <div className="data-text flex flex-col">
                  <div className="name font-bold">Rodrigo D.</div>
                  <div className="email text-gray-300 font-extralight text-[12px]">rodrigosampaio@gmail.com</div>
              </div>  
            </div>

            <div className="title text-white font-extrabold mt-[30px]">
              <h1 className="text-[1.6rem]">Editar Perfil</h1>
            </div>
            <div className="form">
              <div className="row flex gap-5">
                <label htmlFor="Nickname" className="w-6/12">
                    <Text size="sm" className='font-semibold pt-5 pb-5'>Nickname</Text>
                    <TextInput.Root >
                        <TextInput.Input required type='Nickname' id='Nickname' autoComplete="off" placeholder='@rodrigodamasceno'  />
                        <TextInput.Icon>
                            <LockKey/>
                        </TextInput.Icon>
                    </TextInput.Root>
                </label>

                <label htmlFor="email" className="w-6/12">
                    <Text size="sm" className='font-semibold pt-5 pb-5'>E-mail</Text>
                    <TextInput.Root >
                        <TextInput.Input required type='email' id='email' autoComplete="off" placeholder='rodrigosampaio@gmail.com'  />
                        <TextInput.Icon>
                            <LockKey/>
                        </TextInput.Icon>
                    </TextInput.Root>
                </label>
              </div>

              <div className="title text-white font-extrabold mt-[30px]">
                <h1 className="text-[1.6rem]">Alterar Senha</h1>
              </div>

              <div className="row flex gap-5">
                <label htmlFor="Senha" className="w-full">
                  <Text size="sm" className='font-semibold'>Senha Antiga</Text>
                  <TextInput.Root >
                  <TextInput.Input required type='email' id='email' autoComplete="off" placeholder='******'/>
                  </TextInput.Root>
                </label>
                <label htmlFor="Senha" className="w-full">
                  <Text size="sm" className='font-semibold'>Nova Senha</Text>
                  <TextInput.Root >
                  <TextInput.Input required type='email' id='email' autoComplete="off" placeholder='******'/>
                  </TextInput.Root>
                </label>
              </div>

              <div className="flex w-full justify-end mt-5">
                            <Button className='mt-4  w-fit mr-[2rem]' type='submit' >Cancelar</Button>
                            <Button className='mt-4 w-fit' type='submit' >Salvar</Button>
                        </div>
            </div>
          </div>
        </div>
  )
}
