import { Envelope, Lock, User } from "phosphor-react";
import React, { FormEvent } from "react";
import { Link } from "react-router-dom";
import { ICad } from "../assets/ICad";
import { Logo } from "../assets/Logo";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";
import { Select } from "../components/Select";
import axios from "axios";
import { NavBar } from "../components/NavBar";

const CreateUser = () => {
  const [isValid, setIsValid] = React.useState<boolean>();
  const [isChecked, setIsChecked] = React.useState<boolean>();
  const [password, setPassword] = React.useState<string>();
  const [nickname, setNickname] = React.useState<string>();
  const [email, setEmail] = React.useState<string>();
  const [role, setRole] = React.useState<string>();

  const defaultUserRoles = ["Admin", "Funcionário"];

  async function handleCreateUser(evt: FormEvent) {
    evt.preventDefault();

    axios.post('http://127.0.0.1:8000/register/user', {
        nickname, email, password, isAdmin: role == 'Admin' ? 1 : 0
    }).then(response => console.log(response));
  }

  return (
    <div className="w-full h-full bg-gradient-to-bl from-green-900 via-gray-900 to-black flex flex-col items-start ">

      <NavBar></NavBar>

      <div className="flex flex-row w-full px-14 gap-28 pb-10 justify-center mt-3">
        <form
          onSubmit={handleCreateUser}
          className="bg-slate-50 bg-opacity-5 w-full max-w-md  h-screen flex flex-col items-center justify-center rounded-2xl gap-1 "
        >
          <div className="flex flex-col  w-full max-w-sm gap-4  mt-2 mb-8">
            <Heading size="lg"> Cadastrar novo Usuário</Heading>
            <Text>Preencha os dados do novo usuário</Text>
          </div>

          <label htmlFor="text" className="flex flex-col gap-3 w-full max-w-sm">
            <Text size="sm" className="font-semibold">
              Nickname
            </Text>
            <TextInput.Root valid={isValid}>
              <TextInput.Icon>
                <User />
              </TextInput.Icon>
              <TextInput.Input
                autoComplete="off"
                required
                type="text"
                id="nick"
                placeholder="Digite o nickname"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
              />
            </TextInput.Root>
          </label>

          <label
            htmlFor="email"
            className="flex flex-col gap-3 w-full max-w-sm"
          >
            <Text size="sm" className="font-semibold">
              Endereço de e-mail
            </Text>
            <TextInput.Root valid={isValid}>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon>
              <TextInput.Input
                required
                type="email"
                id="email"
                autoComplete="off"
                placeholder="Digite o e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </TextInput.Root>
          </label>

          <label
            htmlFor="password"
            className="flex flex-col gap-3 w-full max-w-sm"
          >
            <Text size="sm" className="font-semibold ">
              Sua senha
            </Text>
            <TextInput.Root valid={true}>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon>
              <TextInput.Input
                required
                minLength={8}
                type="password"
                id="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </TextInput.Root>
          </label>

          <div className="flex flex-row space-x-36">
            <div>
              <label htmlFor="userType" className="flex flex-col gap-3 w-full max-w-sm">
                <Text size={"sm"} className={"font-semibold"}>
                  Tipo de Usuário
                </Text>
                <Select defaultOptions={defaultUserRoles} required={true} onValueChange={(e) => setRole(e)}/>
              </label>
            </div>

            <div className="mt-7">
              <Button type="submit" className="w-fit">
                Cadastrar
              </Button>
            </div>
          </div>


        </form>
      </div>
    </div>
  );
};

export { CreateUser };
