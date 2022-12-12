import {Text} from "./Text"
import { PhoneIcon } from '@chakra-ui/icons';
import { InstagramLogoIcon } from "@radix-ui/react-icons";

export function Footer (){
  return(
    <footer className='text-[#ffffff] bg-[#121217] min-w-screen max-w-full h-[320px] mt-[30px] flex flex-col'>
      <div className="content flex flex-row h-[280px] justify-between items-center">
        
        <div className="col-1 w-[33%] h-[100%] flex flex-col items-center justify-center p-16">
          <div className="logo bg-[url('../assets/logo-transparente.png')] bg-contain bg-no-repeat w-[350px] h-[202px] p-5"></div>
        </div>

        <div className="col-2 w-[33%] h-[100%] flex flex-col items-start justify-start p-16">
          <div className="contact">
            <div className="title">
              <h1 className="text-xl font-semibold">CONTATO</h1>
            </div>
            <div className="list text-gray-500">
              <div className="phone mt-10 flex gap-3 items-center">
                <PhoneIcon />
                <p>(75) - 7070-7070</p>
              </div>
              <div className="social mt-4 flex gap-3 items-center">
                <InstagramLogoIcon />
                <p>/@betball</p>
              </div>
            </div>
            </div>
        </div>

        <div className="col-3 w-[33%] h-[100%] flex flex-col items-start justify-start p-16">
          <div className="links">
            <div className="title">
                <h1 className="text-xl font-semibold">LINKS ÚTEIS</h1>
            </div>
            <div className="list text-gray-500">
              <ul className="list-none mt-10">
                <li>Politica de Privacidade</li>
                <li className="mt-4">Termos de Serviço</li>
                <li className="mt-4">Central de Ajuda</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="subfooter bg-green-700 text-white w-[100vw] h-[20px] p-5 flex items-center justify-center">
          <p><span className='font-bold'>Betball</span>© Copyright 2022 - Desenvolvido por <span className='font-bold'>OneSoft</span></p>
        </div>
    </footer>
  )
}

