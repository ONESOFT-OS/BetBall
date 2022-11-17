import {Meta, StoryObj} from '@storybook/react';
import { HistoricGame } from './HistoricGame';
import clsx from "clsx";

export default{
    title: 'Components/HistoricGame',
    component: HistoricGame,
    decorators:[
        (Story) => {
            return(
                <div className={clsx(
                    'flex justify-around items-center h-20 text-white bg-black/50 mb-2'
                    )}> 
                    <p>{"Goias"} 2<br/>{"Sport"} 0</p>
                    <p>R$ {30.00}</p> 
            
                    <p>{"Ganha"}</p>
            
                    <p>{"14/01/2002"}</p>
                    <p>R$ {500.00}</p>
                </div>
            )
        }
    ]

}as Meta


export const Default: StoryObj= {}