import {Meta, StoryObj} from '@storybook/react';
import { Button, ButtonProps } from "./Button";

export default{
    title: 'Components/Button',
    component: Button,
    args: {
        children: 'Create account',
        mode: 'default',
    },
    argTypes:{
        children: {
            table:{
                disable:true
            }
        },
    }
    
}as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const Closer: StoryObj<ButtonProps> = {
    args:{
        children: 'X',
        mode:'closer',
    }
}

