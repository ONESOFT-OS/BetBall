import { Link, Routes } from "react-router-dom";
import {Logo} from "../assets/Logo";
import { Button } from "./Button";
import {Text} from './Text';


export function NavBar(){
    return(
       <nav className="flex justify-between items-center w-screen h-[5rem] pl-20 pr-20"> 
              <Logo/>
              <ul className=" w-[20rem] flex flex-row justify-between">
              
                <li><Text className="text-white hover:text-green-500 font-semibold" size="lg"><Link to={'/'}>Home</Link></Text></li>
                <li><Text className="text-white hover:text-green-500 font-semibold" size="lg"><Link to={'/'}>Ranking</Link></Text></li>
                <li><Text className="text-white hover:text-green-500 font-semibold" size="lg"><Link to={'/'}>Jogos</Link></Text></li>
                <li><Text className="text-white hover:text-green-500 font-semibold" size="lg"><Link to={'/'}>Sobre</Link></Text></li>
              </ul>
              <Button type='submit' className='w-fit m bg-transparent ring-2 ring-green-500'>Logout</Button>
       </nav>
        
    )
}