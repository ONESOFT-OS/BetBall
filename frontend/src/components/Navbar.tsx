import { Link, Routes } from "react-router-dom";
import {Logo} from "../assets/Logo";
import { useAuth } from '../hooks/useAuth';
import { Button } from "./Button";
import {Text} from './Text';


export function NavBar(){

  const {token} = useAuth();

  const isAuthenticated = token;

  console.log(isAuthenticated);

  const NavbarContent = () => {
    if(isAuthenticated){
      return (
        <>

        </>
      )
    }
    return(
      <>
        <Button type='submit' className='w-fit m bg-transparent px-6 ring-1 ring-green-500'><Link to={'/signin'}>Sign In</Link></Button>
        <Button type='submit' className='w-fit m bg-green-700'><Link to={'/signup'}>Sign Up</Link></Button>
      </>
    )
  }
    return(
       <nav className="flex justify-between items-center  min-w-full max-w-screen h-[5rem] pl-20 pr-20">
              <Logo/>
              <ul className=" w-[20rem] flex flex-row justify-between">

                <li><Text className="text-white hover:text-green-500 font-semibold" size="lg"><Link to={'/'}>Home</Link></Text></li>
                <li><Text className="text-white hover:text-green-500 font-semibold" size="lg"><Link to={'/games'}>Jogos</Link></Text></li>
                <li><Text className="text-white hover:text-green-500 font-semibold" size="lg"><Link to={'/'}>Sobre</Link></Text></li>
              </ul>
              <div className="w-[193.98px] flex flex-row justify-end gap-3">
                  <NavbarContent />
              </div>
       </nav>
    )
}
