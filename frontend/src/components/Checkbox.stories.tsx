import {Meta, StoryObj} from '@storybook/react';
import { Checkbox, CheckboxProps } from "./Checkbox";
import { Text } from './Text';

export default{
    title: 'Components/Checkbox',
    component: Checkbox,
    args: {},
    argTypes:{},
    decorators: [
        (Story) =>{
            return (
                <div className='flex items-center gap-2'> 
                    {Story()}
                    <Text size="sm" >Ao se cadastrar no BetBall, você concorda com nossos termos de serviço e confirma ter 18 anos ou mais.</Text>
                </div>
            )
        }
    ],
    
}as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}

