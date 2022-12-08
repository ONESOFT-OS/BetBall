import { PhoneIcon } from '@chakra-ui/icons';
import { InstagramLogo } from 'phosphor-react';
import { FooterLogo } from '../assets/FooterLogo';

const Footer = () => {
  return (
    <footer className='bg-dark-117 text-[#ffffff] bg-[#ffffff19] w-screen'>
        <div className='flex lg:px-5 items-center'>
          <FooterLogo />
          <div className='lg:pl-20 flex justify-between space-x-40 items-center'>
            <div className='md:pr-5 md:pl-5 xl:pr-30 xl:pl-30'>
              <h1 className='font-bold'>CONTATOS</h1>
              <small>
                <PhoneIcon />
                {' (XX) - XXXX-XXXX'}
              </small>
              <span className='md:flex md:itens-center font-sans'>
                <InstagramLogo className='w-5 h-5' />{'@betball'}
              </span>
            </div>
            <div>
              <h1 className='font-bold'>SOBRE NÓS</h1>
              <div className='md:flex flex-col md:justify-between'>
                <a href="#" className='font-sans'>Política de Privacidade</a>
                <a href="#" className='font-sans'>Termos de Serviço</a>
                <a href="#" className='font-sans'>Central de Ajuda</a>
              </div>
            </div>
          </div>
        </div>
      <div className='bg-[#7DC120] flex flex-row justify-center items-center text-center'>
        <span><span className='font-bold'>Betball</span> © Copyright 2022 - Desenvolvido por <span className='font-bold'>OneSoft</span></span>
      </div>
    </footer>
  );
}


export { Footer }
