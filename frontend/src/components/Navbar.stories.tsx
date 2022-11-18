import {Meta, StoryObj} from '@storybook/react';
import { Logo } from '../assets/Logo';
import { Button } from './Button';
import { NavBar } from "./Navbar";



export default{
    title: 'Components/NavBar',
    component: NavBar,
    decorators:[
        (Story)=>{
            return(
                <div>
        <nav className="flex justify-between items-center w-screen bg-black text-white h-[5rem]  pl-20 pr-20"> 
               <Logo/>
              <ul className=" w-[20rem] flex flex-row justify-between">
                <li><a href="http://" target="_blank">Home</a> </li> 
                <li><a href="http://" target="_blank">Ranking</a></li> 
                <li><a href="http://" target="_blank">Jogos</a></li>
                <li><a href="http://" target="_blank">Sobre</a></li>
              </ul>
              <Button type='submit' className='w-fit m'>Logout</Button>
          </nav>
    </div>
            )
        }
    ]
}as Meta



export const Default: StoryObj={}